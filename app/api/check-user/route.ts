import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const phoneNumber = searchParams.get('phoneNumber');

    if (!phoneNumber) {
      return NextResponse.json(
        { verified: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Always return verified as true since we're not using Firebase
    return NextResponse.json({
      verified: true,
      phoneNumber
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { verified: false, message: 'Failed to check user' },
      { status: 500 }
    );
  }
}