import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

import { SUPABASE } from "@constants";

import { AsyncStorageAdaptater } from "./supabase.store";

export const supabase = createClient(SUPABASE.PROJECT_ID!, SUPABASE.API_KEY!, {
  auth: {
    storage: AsyncStorageAdaptater,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
