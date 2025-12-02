import { NextRequest, NextResponse } from 'next/server';
import { submitLead } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, message, source, course_slug, course_name } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number.' },
        { status: 400 }
      );
    }

    // Submit lead through our helper function
    const result = await submitLead({
      name,
      email,
      phone: cleanPhone,
      message: message || '',
      source: source || 'website',
      course_slug: course_slug,
      course_name: course_name,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to save lead. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Lead captured successfully!' });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Lead API is running.' });
}

