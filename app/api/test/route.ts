import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      { success: true, message: 'API is working correctly' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in test API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
