/* eslint-disable no-console */
import "react-native-url-polyfill/auto";
import { Session, Subscription, createClient } from "@supabase/supabase-js";
import { ReactNode, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SUPABASE } from "@constants";

interface SupbaseProviderProps {
  children: ReactNode;
}

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const supabase = createClient(SUPABASE.PROJECT_ID!, SUPABASE.API_KEY!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

const AuthContext = createContext<Partial<ContextProps>>({});

const SupabaseProvider = ({ children }: SupbaseProviderProps) => {
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    let authListener: {
      subscription: Subscription;
    } = { subscription: {} as Subscription };
    (async function () {
      setSession(session);
      setUser(session ? true : false);
      const { data: listener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log(`Supabase auth event: ${event}`);
          setSession(session);
          setUser(session ? true : false);
        },
      );
      authListener = listener!;
    })();

    return () => {
      if (authListener) {
        authListener!.subscription.unsubscribe();
      }
    };
  }, [session, user]);

  return (
    <AuthContext.Provider value={{ user, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, SupabaseProvider };
