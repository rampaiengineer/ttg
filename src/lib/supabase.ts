import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  source: string; // 'course_inquiry', 'demo_booking', 'contact'
  course_slug?: string;
  course_name?: string;
  created_at?: string;
}

export async function submitLead(lead: Omit<Lead, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([{
        ...lead,
        created_at: new Date().toISOString()
      }]);

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Error submitting lead:', err);
    return { success: false, error: 'Failed to submit. Please try again.' };
  }
}

