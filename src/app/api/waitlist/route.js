import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log(email);

    await prisma.waitlist.create({
      data: {
        email,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error.message.includes('Unique constraint')) {
      errorMessage = "You're already on the list!";
    } else {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}

export async function GET() {
  try {
    const data = await prisma.waitlist.count();

    return NextResponse.json({ success: true, count: data });
  } catch (error) {
    return NextResponse.json({ error: error?.message }, { status: 400 });
  }
}
