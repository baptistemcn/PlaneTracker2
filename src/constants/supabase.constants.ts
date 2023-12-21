class Supabase {
  readonly API_KEY: string = process.env.SUPABASE_API_KEY!;
  readonly PROJECT_ID: string = process.env.SUPABASE_PROJECT_URL!;
}

export const SUPABASE = new Supabase();
