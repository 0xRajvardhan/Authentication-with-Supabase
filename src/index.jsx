/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import { createClient } from '@supabase/supabase-js';
import { SupabaseProvider } from 'solid-supabase';

import './index.css';
import App from './App';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

render(() => 
  <SupabaseProvider client={supabase}>
  <Router>
    <App />
  </Router>
  </SupabaseProvider>
  , document.getElementById('root'));
