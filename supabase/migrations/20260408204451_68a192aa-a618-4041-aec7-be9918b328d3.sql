
-- Add length constraints to contact_submissions
ALTER TABLE public.contact_submissions
  ADD CONSTRAINT contact_full_name_length CHECK (char_length(full_name) <= 100),
  ADD CONSTRAINT contact_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT contact_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT contact_phone_length CHECK (phone IS NULL OR char_length(phone) <= 20),
  ADD CONSTRAINT contact_business_name_length CHECK (business_name IS NULL OR char_length(business_name) <= 100),
  ADD CONSTRAINT contact_question_length CHECK (char_length(question) <= 2000);

-- Add length and enum constraints to lead_submissions
ALTER TABLE public.lead_submissions
  ADD CONSTRAINT lead_full_name_length CHECK (char_length(full_name) <= 100),
  ADD CONSTRAINT lead_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT lead_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT lead_phone_length CHECK (phone IS NULL OR char_length(phone) <= 20),
  ADD CONSTRAINT lead_business_name_length CHECK (business_name IS NULL OR char_length(business_name) <= 100),
  ADD CONSTRAINT lead_success_vision_length CHECK (char_length(success_vision) <= 2000),
  ADD CONSTRAINT lead_valid_service CHECK (service IN ('Expert Ad Management', 'Terumah Sherehe', 'The Terumah Social Flow', 'Almasi by Terumah')),
  ADD CONSTRAINT lead_valid_tier CHECK (tier IN ('Core', 'Pro', 'Elite'));
