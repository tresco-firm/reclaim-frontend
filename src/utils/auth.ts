import { supabase } from "../config/supabase";

export const login = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};
