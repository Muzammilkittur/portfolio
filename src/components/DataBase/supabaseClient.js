// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jmxtngtsvovjmbtglhat.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpteHRuZ3Rzdm92am1idGdsaGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTMwNTksImV4cCI6MjA2NTQ4OTA1OX0._N3TydywSFlLwWV1Ohk1az8H6h1DDqSHb5Pno7caLC4';

export const supabase = createClient(supabaseUrl, supabaseKey);
