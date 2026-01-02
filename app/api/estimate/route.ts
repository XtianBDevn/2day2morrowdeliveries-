import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, pickup, delivery, weight, date, details } = body;

    // Validate required fields
    if (!name || !email || !phone || !pickup || !delivery || !date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Send email using your preferred email service
    // For now, we'll just log the data
    console.log('Estimate form submission:', {
      name,
      email,
      phone,
      company,
      pickup,
      delivery,
      weight,
      date,
      details,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your estimate request! We will contact you shortly with a quote.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Estimate form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
