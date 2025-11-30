import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const number = searchParams.get('number');

  if (!number) {
    return NextResponse.json(
      { success: false, message: 'Phone number is required (use ?number=...)' },
      { status: 400 }
    );
  }

  const apiUrl = process.env.NEXT_PUBLIC_API || "";

  if (!apiUrl) {
    return NextResponse.json(
      { success: false, message: 'Upstream API not configured (NEXT_PUBLIC_API)' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${apiUrl}/pair?number=${encodeURIComponent(number)}`);
    const data = await response.json();

    console.log('Upstream API Response:', { status: response.status, data });

    // Return upstream response with proper status code and data
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to connect to pairing service' },
      { status: 502 }
    );
  }
}
