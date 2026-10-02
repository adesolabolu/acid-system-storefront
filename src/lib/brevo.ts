export async function sendOrderReceipt(order: any) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'receipts@acidsys.com';
  const senderName = process.env.BREVO_SENDER_NAME || 'ACID//SYS READY-TO-WEAR';

  if (!apiKey) {
    console.warn('BREVO_API_KEY not set. Skipping receipt email.');
    return null;
  }

  const total = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(order.totalAmount);

  const htmlContent = `
    <div style="background-color: #121316; color: #D2E823; font-family: monospace; padding: 40px; border: 2px solid #D2E823;">
      <h1 style="text-transform: uppercase; letter-spacing: -1px; border-bottom: 2px solid #D2E823; padding-bottom: 20px;">/// ACID//SYS ORDER CONFIRMED</h1>
      <p style="color: #F8F4E8;">ORDER ID: ${order.id}</p>
      <p style="color: #F8F4E8;">CUSTOMER: ${order.customerName}</p>
      
      <h3 style="color: #D2E823; margin-top: 30px;">[ TRANSMITTED CARGO ]</h3>
      <table style="width: 100%; border-collapse: collapse; color: #F8F4E8; margin-bottom: 30px;">
        ${order.items.map((item: any) => `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #333;">${item.quantity}x ${item.product_name}</td>
            <td style="padding: 10px; border-bottom: 1px solid #333;">SIZE: ${item.size_label}</td>
          </tr>
        `).join('')}
      </table>
      
      <h2 style="color: #D2E823;">TOTAL YIELD: ${total}</h2>
      <p style="color: #666; font-size: 12px; margin-top: 40px;">// SYSTEM OF GARMENT ARCHITECTURE</p>
    </div>
  `;

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: order.customerEmail, name: order.customerName }],
        subject: `ACID//SYS: ORDER [${order.id}] CONFIRMED`,
        htmlContent,
      }),
    });
    
    if (!res.ok) {
      console.error('Brevo API Error:', await res.text());
      return null;
    }
    
    const data = await res.json();
    return data.messageId;
  } catch (err) {
    console.error('Error sending receipt:', err);
    return null;
  }
}

export async function sendWelcomeEmail(email: string, name: string) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'comms@acidsys.com';
  const senderName = process.env.BREVO_SENDER_NAME || 'ACID//SYS READY-TO-WEAR';

  if (!apiKey) {
    console.warn('BREVO_API_KEY not set. Skipping welcome email.');
    return null;
  }

  const htmlContent = `
    <div style="background-color: #121316; color: #F8F4E8; font-family: monospace; padding: 40px; border: 2px solid #D2E823;">
      <h1 style="color: #D2E823; text-transform: uppercase; letter-spacing: -1px; border-bottom: 2px solid #D2E823; padding-bottom: 20px;">/// ACID//SYS : ACCESS GRANTED</h1>
      <p style="font-size: 16px;">OPERATOR: ${name.toUpperCase()}</p>
      <p style="font-size: 14px; margin-top: 20px;">Your profile has been synchronized with the main frame.</p>
      <p style="font-size: 14px;">You now have persistent storage for allocations across the grid.</p>
      
      <div style="margin-top: 40px; padding: 20px; border: 1px solid #333; background: #000;">
        <h3 style="color: #D2E823; margin: 0 0 10px 0;">[ PROTOCOLS ACTIVE ]</h3>
        <ul style="list-style: none; padding: 0; margin: 0; color: #888;">
          <li>> GLOBAL DISPATCH READY</li>
          <li>> ARCHIVAL PRESERVATION ACTIVE</li>
          <li>> ALLOCATIONS SYNCED</li>
        </ul>
      </div>
      
      <p style="color: #666; font-size: 12px; margin-top: 40px;">// SYSTEM OF GARMENT ARCHITECTURE</p>
    </div>
  `;

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email, name }],
        subject: `ACID//SYS: ACCESS GRANTED [${name.toUpperCase()}]`,
        htmlContent,
      }),
    });
    
    if (!res.ok) {
      console.error('Brevo API Error:', await res.text());
      return null;
    }
    
    const data = await res.json();
    return data.messageId;
  } catch (err) {
    console.error('Error sending welcome email:', err);
    return null;
  }
}
