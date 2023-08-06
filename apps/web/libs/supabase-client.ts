import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

console.log(process.env.SUPABASE_SECRET_KEY, process.env);

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);
