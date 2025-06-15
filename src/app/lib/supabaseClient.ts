import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mnnxyscqnfprwqokrdni.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ubnh5c2NxbmZwcndxb2tyZG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4OTI4NjQsImV4cCI6MjA2NTQ2ODg2NH0.7dU_IsAYve_Vzyt5LQi7KNIHizAEXxE-WmDJA-l5eyI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
