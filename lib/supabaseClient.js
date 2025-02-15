import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://uneqilihahylehssehht.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuZXFpbGloYWh5bGVoc3NlaGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MTEwOTQsImV4cCI6MjAyMDM4NzA5NH0.fUNO_eRVOgaa-V6LpWBSTDFCR2OGkdpdwUPMMNg9NCQ'
)
