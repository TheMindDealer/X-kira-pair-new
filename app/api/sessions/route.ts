
import { NextResponse } from 'next/server';

interface Session {
  connected: boolean;
  user: string;
  jid: string;
  healthy: boolean;
}

interface SessionsResponse {
  total: number;
  healthy: number;
  sessions: Record<string, Session>;
}

export async function GET() {
  let total = 0;
  let apiCount = 0;

  const apiUrl = process.env.NEXT_PUBLIC_API || "";

  console.log('📊 Fetching real-time sessions from single API...');

  if (!apiUrl) {
    return NextResponse.json(
      { status: 'error', message: 'Upstream API not configured (NEXT_PUBLIC_API)' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${apiUrl}/sessions`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (response.ok) {
      const data: SessionsResponse = await response.json();
      apiCount = data.total || 0;
      total = apiCount;
      console.log(`✅ API: ${apiCount} sessions`);
    } else {
      console.warn(`⚠️ API response: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ API error:', error);
  }

  console.log(`🎯 TOTAL SESSIONS: ${total}`);

  return NextResponse.json(
    { 
      total,
      breakdown: {
        api: apiCount
      },
      timestamp: new Date().toISOString()
    },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }
  );
}
