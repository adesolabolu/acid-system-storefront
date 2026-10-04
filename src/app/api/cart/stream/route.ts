import { NextRequest } from 'next/server';
import { getAuthenticatedUser } from '@/lib/auth-dual';
import { cartEventEmitter } from '@/lib/sse-emitter';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const user = await getAuthenticatedUser(req);
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      
      const listener = () => {
        controller.enqueue(encoder.encode(`event: cart_update\ndata: {"status":"updated"}\n\n`));
      };
      
      cartEventEmitter.on(`cart_update_${user.userId}`, listener);

      // Heartbeat every 15s to keep connection alive
      const intervalId = setInterval(() => {
        controller.enqueue(encoder.encode(`: ping\n\n`));
      }, 15000);

      // Cleanup on disconnect
      req.signal.addEventListener('abort', () => {
        cartEventEmitter.off(`cart_update_${user.userId}`, listener);
        clearInterval(intervalId);
        controller.close();
      });
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
