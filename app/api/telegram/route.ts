import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const text = `
🏡 New Property Inquiry

👤 Name: ${body.name}
📧 Email: ${body.email}
📱 Phone: ${body.phone}

📅 Date: ${body.date}
⏰ Time: ${body.time}

🏠 Property: ${body.property}

📝 Notes:
${body.notes}
`;

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
