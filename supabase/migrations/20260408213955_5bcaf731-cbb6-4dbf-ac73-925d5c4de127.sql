CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS update_user_roles_updated_at ON public.user_roles;
CREATE TRIGGER update_user_roles_updated_at
BEFORE UPDATE ON public.user_roles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
$$;

DROP POLICY IF EXISTS "Admins can view user roles" ON public.user_roles;
CREATE POLICY "Admins can view user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can manage user roles" ON public.user_roles;
CREATE POLICY "Admins can manage user roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.is_valid_contact_submission(
  _full_name TEXT,
  _email TEXT,
  _phone TEXT,
  _business_name TEXT,
  _question TEXT
)
RETURNS BOOLEAN
LANGUAGE sql
IMMUTABLE
SET search_path = public
AS $$
  SELECT
    char_length(btrim(_full_name)) BETWEEN 1 AND 100
    AND char_length(btrim(_email)) BETWEEN 3 AND 255
    AND _email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (_phone IS NULL OR char_length(btrim(_phone)) <= 20)
    AND (_business_name IS NULL OR char_length(btrim(_business_name)) <= 100)
    AND char_length(btrim(_question)) BETWEEN 1 AND 2000;
$$;

CREATE OR REPLACE FUNCTION public.is_valid_lead_submission(
  _full_name TEXT,
  _email TEXT,
  _phone TEXT,
  _business_name TEXT,
  _success_vision TEXT,
  _service TEXT,
  _tier TEXT,
  _addons TEXT[]
)
RETURNS BOOLEAN
LANGUAGE sql
IMMUTABLE
SET search_path = public
AS $$
  SELECT
    char_length(btrim(_full_name)) BETWEEN 1 AND 100
    AND char_length(btrim(_email)) BETWEEN 3 AND 255
    AND _email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (_phone IS NULL OR char_length(btrim(_phone)) <= 20)
    AND (_business_name IS NULL OR char_length(btrim(_business_name)) <= 100)
    AND char_length(btrim(_success_vision)) BETWEEN 1 AND 2000
    AND _service = ANY (ARRAY['Expert Ad Management','Terumah Sherehe','The Terumah Social Flow','Almasi by Terumah'])
    AND _tier = ANY (ARRAY['Core','Pro','Elite'])
    AND (
      _addons IS NULL
      OR _addons <@ ARRAY[
        'A/B Test Variations (+ KES 15,000)',
        'RAW Footage Delivery (+ 25% of Package Price)',
        'Fast-Track Delivery within 48 hours (+ 20% rush fee)'
      ]::TEXT[]
    );
$$;

DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit validated contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  public.is_valid_contact_submission(full_name, email, phone, business_name, question)
);

DROP POLICY IF EXISTS "Anyone can submit lead form" ON public.lead_submissions;
CREATE POLICY "Anyone can submit validated lead form"
ON public.lead_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  public.is_valid_lead_submission(full_name, email, phone, business_name, success_vision, service, tier, addons)
);

DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can view lead submissions" ON public.lead_submissions;
CREATE POLICY "Admins can view lead submissions"
ON public.lead_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));