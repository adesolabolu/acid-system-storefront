import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { sendOrderReceipt } from '@/lib/brevo';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, customerEmail, shippingAddress, items, totalAmount } = body;

    if (!customerName || !customerEmail || !items || items.length === 0) {
      return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
    }

    // Insert order
    const orderRes = await sql`
      INSERT INTO orders (customer_name, customer_email, shipping_address, total_amount)
      VALUES (${customerName}, ${customerEmail}, ${JSON.stringify(shippingAddress)}, ${totalAmount})
      RETURNING id
    `;
    const orderId = orderRes[0].id;

    // Insert items
    for (const item of items) {
      await sql`
        INSERT INTO order_items (order_id, product_id, variant_id, product_name, size_label, unit_price, quantity)
        VALUES (${orderId}, ${item.product_id}, ${item.variant_id}, ${item.product_name}, ${item.size_label}, ${item.unit_price}, ${item.quantity})
      `;
    }

    // Send receipt
    const order = { id: orderId, customerName, customerEmail, items, totalAmount };
    const messageId = await sendOrderReceipt(order);

    if (messageId) {
      await sql`UPDATE orders SET brevo_message_id = ${messageId} WHERE id = ${orderId}`;
    }

    return NextResponse.json({ success: true, orderId });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
