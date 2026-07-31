import { createClient } from '@supabase/supabase-js';


function normalizeSupabaseUrl(url) {
  return url
    ?.trim()
    .replace(/\/rest\/v1\/?$/, '')
    .replace(/\/$/, '');
}

const supabaseUrl = normalizeSupabaseUrl(
  import.meta.env.VITE_SUPABASE_URL
);

const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Add ' +
    'VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);


/*const DEFAULT_SUPABASE_URL = 'https://kuuvyfrchzsodnqitchn.supabase.co';
const DEFAULT_SUPABASE_KEY =
  

function normalizeSupabaseUrl(url) {
  if (!url) return url;

  return url
    .trim()
    .replace(/\/rest\/v1\/?$/, '')
    .replace(/\/$/, '');
}

function normalizeSupabaseRestUrl(url, baseUrl) {
  if (url) {
    return url.trim().replace(/\/$/, '');
  }

  return baseUrl ? `${baseUrl}/rest/v1` : undefined;
}

const supabaseUrl = normalizeSupabaseUrl(
  import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL
);

const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_KEY;

const supabaseRestUrl = normalizeSupabaseRestUrl(
  import.meta.env.VITE_SUPABASE_REST_URL,
  supabaseUrl
);

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
export { supabaseKey, supabaseRestUrl };
*/

/*import { createClient } from '@supabase/supabase-js';

function normalizeSupabaseUrl(url) {
  if (!url) return url;
  return url.replace(/\/rest\/v1\/?$/, '');
}

function normalizeSupabaseRestUrl(url, baseUrl) {
  if (url) {
    return url.replace(/\/$/, '');
  }
  return baseUrl ? `${baseUrl}/rest/v1` : url;
}

const supabaseUrl = normalizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL);
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseRestUrl = normalizeSupabaseRestUrl(import.meta.env.VITE_SUPABASE_REST_URL, supabaseUrl);

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
export { supabaseKey, supabaseRestUrl };*/
