import { ReactNode, createContext, useEffect, useState } from "react";
import { Session, Subscription } from "@supabase/supabase-js";

import { Logger } from "@services";

import { supabase } from "@database";

interface SupbaseProviderProps {
  children: ReactNode;
}

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

const logger = new Logger();

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
          logger.DEBUG(`Supabase auth event: ${event}`);
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
