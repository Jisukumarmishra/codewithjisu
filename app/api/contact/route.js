import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Sanitize helper — strip HTML tags
function sanitize(str) {
  return String(str || '').replace(/<[^>]*>/g, '').trim();
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name    = sanitize(body.name);
    const email   = sanitize(body.email);
    const message = sanitize(body.message);

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    // Insert into PlanetScale
    await query(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    return NextResponse.json(
      { message: 'Message received. Thank you!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[POST /api/contact]', err);
    return NextResponse.json(
      { message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
