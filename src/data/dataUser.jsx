import { createClient } from '@supabase/supabase-js';

const supabaseURL ="https://ekylnkdgvnnsaonqexrw.supabase.co"
const supabaseKEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVreWxua2Rndm5uc2FvbnFleHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2Njc5NDIsImV4cCI6MTk5ODI0Mzk0Mn0.DXXZkCc9YbOZcqY-pXudtxq6Rt1pKROnrzISyYZ-79M";

const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;