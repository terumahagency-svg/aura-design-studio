CREATE OR REPLACE FUNCTION public.is_valid_lead_submission(_full_name text, _email text, _phone text, _business_name text, _success_vision text, _service text, _tier text, _addons text[])
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE
 SET search_path TO 'public'
AS $function$
  SELECT
    char_length(btrim(_full_name)) BETWEEN 1 AND 100
    AND char_length(btrim(_email)) BETWEEN 3 AND 255
    AND _email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (_phone IS NULL OR char_length(btrim(_phone)) <= 20)
    AND (_business_name IS NULL OR char_length(btrim(_business_name)) <= 100)
    AND char_length(btrim(_success_vision)) BETWEEN 1 AND 2000
    AND char_length(btrim(_service)) BETWEEN 1 AND 100
    AND char_length(btrim(_tier)) BETWEEN 1 AND 100
    AND (
      _addons IS NULL
      OR cardinality(_addons) <= 10
    );
$function$;