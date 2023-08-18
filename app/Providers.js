"use client";

import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

/*
   NextAuthJS | SessionProvider
   https://next-auth.js.org/getting-started/client#sessionprovider
*/