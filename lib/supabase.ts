import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Level mapping for better readability
export const levelMapping = {
  'ALG': 'A-Level General',
  'ALT': 'A-Level Technical', 
  'OLG': 'O-Level General',
  'OLT': 'O-Level Technical'
} as const

export type LevelCode = keyof typeof levelMapping 