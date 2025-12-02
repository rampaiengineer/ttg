-- Thanjai Tech Guru - Leads Table Schema for Supabase
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor)

-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  message TEXT,
  source VARCHAR(50) NOT NULL DEFAULT 'website',
  course_slug VARCHAR(100),
  course_name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'new',
  notes TEXT,
  assigned_to VARCHAR(100),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from anonymous users (for form submissions)
CREATE POLICY "Allow anonymous insert" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Create a policy to allow select for authenticated users only (admin access)
CREATE POLICY "Allow authenticated select" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a policy to allow updates for authenticated users only
CREATE POLICY "Allow authenticated update" ON leads
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to auto-update the updated_at column
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert a test record (optional - delete after testing)
-- INSERT INTO leads (name, email, phone, message, source) 
-- VALUES ('Test User', 'test@example.com', '9876543210', 'Test message', 'website');

-- View to get lead statistics
CREATE OR REPLACE VIEW lead_stats AS
SELECT 
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'new' THEN 1 END) as new_leads,
  COUNT(CASE WHEN source = 'course_inquiry' THEN 1 END) as course_inquiries,
  COUNT(CASE WHEN source = 'demo_booking' THEN 1 END) as demo_bookings,
  COUNT(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 END) as last_7_days,
  COUNT(CASE WHEN created_at >= NOW() - INTERVAL '30 days' THEN 1 END) as last_30_days
FROM leads;

-- Grant access to the view
GRANT SELECT ON lead_stats TO authenticated;

-- IMPORTANT: After running this script:
-- 1. Go to Supabase Dashboard > Settings > API
-- 2. Copy your Project URL and anon/public key
-- 3. Add them to your .env.local file:
--    NEXT_PUBLIC_SUPABASE_URL=your_project_url
--    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

