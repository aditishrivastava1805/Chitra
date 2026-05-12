import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://naanpxgapiadqojcsjnj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYW5weGdhcGlhZHFvamNzam5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0Mzg5NjYsImV4cCI6MjA4NzAxNDk2Nn0.wrp9I_FquaFacyy44OVZ3ZScj4fF7GcyYRm3VBBCtX0";

export const supabase = createClient(supabaseUrl, supabaseKey);