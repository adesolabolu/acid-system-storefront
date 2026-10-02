import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { sql } from '@/lib/db';
import Link from 'next/link';
import { GlitchText } from '@/components/GlitchText';
import { ArrowLeft } from 'lucide-react';

export const revalidate = 0;

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect('/');
  }

  // Fetch the user_id from the session (or directly from DB using email if session.user.id is undefined)
  let userId = (session.user as any).id;
  if (!userId) {
    let userRes = await sql`SELECT id FROM users WHERE email = ${session.user.email} LIMIT 1`;
    
    if (userRes.length === 0) {
      // Self-heal: Create user if they authenticated before the DB was ready
      await sql`
        INSERT INTO users (email, name, image)
        VALUES (${session.user.email}, ${session.user.name || 'OPERATOR'}, ${session.user.image || ''})
        ON CONFLICT (email) DO NOTHING
      `;
      userRes = await sql`SELECT id FROM users WHERE email = ${session.user.email} LIMIT 1`;
    }
    
    if (userRes.length === 0) {
      redirect('/');
    }
    userId = userRes[0].id;
  }

  // Fetch past orders safely
  let orders: any[] = [];
  try {
    orders = await sql`
      SELECT id, total_amount, currency, status, created_at
      FROM orders
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `;
  } catch (e: any) {
    if (!e.message?.includes('relation "orders" does not exist')) {
      console.error('Error fetching orders:', e);
    }
  }

  const lifetimeYield = orders.reduce((sum, o) => sum + Number(o.total_amount), 0);
  const orderCount = orders.length;

  return (
    <div className="min-h-screen bg-[#F8F4E8] text-[#09090B] flex flex-col selection:bg-[#D2E823] selection:text-[#09090B] font-space relative p-6 md:p-12 overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-radial-dots opacity-20 pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute left-[24px] md:left-[48px] top-0 bottom-0 w-[2px] bg-[#09090B]/10 pointer-events-none hidden sm:block" />

      <div className="max-w-5xl mx-auto w-full relative z-10 pl-0 sm:pl-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#09090B] font-mono-code font-bold text-xs uppercase tracking-wider hover:bg-[#09090B] hover:text-[#D2E823] transition-colors border-2 border-[#09090B] px-4 py-2 shadow-hard-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO STOREFRONT</span>
          </Link>
          <div className="px-3 py-1.5 bg-[#D2E823] border-2 border-[#09090B] shadow-hard-sm font-mono-code text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#09090B] animate-ping" />
            LIVE LINK SECURED
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="bg-[#09090B] text-[#F8F4E8] p-8 md:p-12 border-2 border-[#09090B] shadow-hard-lg mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-9xl leading-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            OP
          </div>
          
          <div className="font-mono-code text-[#D2E823] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-[#D2E823]" />
            OPERATOR PROFILE // CLASSIFIED
          </div>
          <GlitchText
            text={`WELCOME, ${session.user.name?.toUpperCase() || 'OPERATOR'}`}
            as="h1"
            className="text-4xl md:text-6xl mb-6 relative z-10"
          />
          <div className="font-mono-code text-sm opacity-80 border-t-2 border-[#F8F4E8]/20 pt-4 max-w-md">
            <div className="flex justify-between mb-2">
              <span>COMMS ID:</span>
              <span className="text-[#D2E823]">{session.user.email}</span>
            </div>
            <div className="flex justify-between">
              <span>ACCESS LEVEL:</span>
              <span className="text-[#D2E823]">TIER 1 (VERIFIED)</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#D2E823] border-2 border-[#09090B] p-6 shadow-hard-sm flex flex-col justify-between">
            <span className="font-mono-code text-[10px] font-bold uppercase mb-4">TOTAL TRANSMISSIONS</span>
            <span className="font-display text-5xl">{orderCount}</span>
          </div>
          <div className="bg-white border-2 border-[#09090B] p-6 shadow-hard-sm flex flex-col justify-between">
            <span className="font-mono-code text-[10px] font-bold uppercase mb-4 text-[#09090B]/60">LIFETIME YIELD</span>
            <span className="font-display text-4xl truncate">₦{lifetimeYield.toLocaleString()}</span>
          </div>
        </div>

        {/* Orders Section */}
        <div className="relative">
          <div className="absolute -left-3 sm:-left-11 top-2 bottom-0 w-[2px] bg-[#09090B] hidden sm:block" />
          
          <h2 className="font-display text-2xl uppercase mb-8 flex items-center gap-4 relative">
            <span className="w-6 h-6 bg-[#09090B] border-2 border-[#09090B] inline-block absolute -left-5 sm:-left-[54px] z-10 hidden sm:block" />
            DISPATCH HISTORY
          </h2>

          {orders.length === 0 ? (
            <div className="bg-white border-2 border-[#09090B] border-dashed p-12 text-center shadow-hard ml-0 sm:ml-4">
              <p className="font-mono-code text-[#09090B] font-bold uppercase tracking-widest mb-6">
                NO ACTIVE DISPATCHES FOUND IN THE MAINFRAME.
              </p>
              <Link href="/shop" className="inline-block bg-[#09090B] text-[#D2E823] font-mono-code font-bold text-xs uppercase px-8 py-4 border-2 border-[#09090B] shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                INITIATE ACQUISITION
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 ml-0 sm:ml-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border-2 border-[#09090B] p-6 shadow-hard-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:-translate-y-1 transition-transform group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F8F4E8] border-2 border-[#09090B] flex items-center justify-center shrink-0 group-hover:bg-[#D2E823] transition-colors">
                      <span className="font-mono-code font-bold text-xs">#{order.id.toString().padStart(3, '0')}</span>
                    </div>
                    <div>
                      <div className="font-mono-code text-[11px] text-[#09090B]/60 font-bold uppercase mb-1">
                        WAYBILL // {new Date(order.created_at).toLocaleDateString()}
                      </div>
                      <div className="font-display text-xl">
                        {order.currency} {Number(order.total_amount).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className={`px-4 py-2 font-mono-code text-[10px] font-bold uppercase border-2 border-[#09090B] ${order.status === 'confirmed' ? 'bg-[#D2E823] text-[#09090B]' : 'bg-[#09090B] text-[#F8F4E8]'}`}>
                    STATUS: {order.status}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
