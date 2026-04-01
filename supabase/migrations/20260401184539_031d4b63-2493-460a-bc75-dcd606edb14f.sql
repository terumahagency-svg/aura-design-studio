
CREATE TABLE public.lead_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  business_name TEXT,
  success_vision TEXT NOT NULL,
  service TEXT NOT NULL,
  tier TEXT NOT NULL
);

ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit lead form"
  ON public.lead_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
