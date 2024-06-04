import { catalogHtml } from "./js/catalog.js";
import { initialize } from "./js/navigation.js";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

let SUPABASEURL = 'https://wmqpfdcesqcmyqcirzmb.supabase.co'
let SUPABASEAPIKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtcXBmZGNlc3FjbXlxY2lyem1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNjk3MjUsImV4cCI6MjAzMjY0NTcyNX0.gQlktOXkHVpdKzoPxmcx82R1220EftSzpPJAHqwMQ8A';
export const supabase = createClient(SUPABASEURL, SUPABASEAPIKEY);
initialize();
catalogHtml();
console.log('shit')