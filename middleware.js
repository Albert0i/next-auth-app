export { default } from "next-auth/middleware";

/*
   Add all the pages we want to protect. 
   Not accessable when we are logout-ed.
*/
export const config = { matcher: 
    [ "/dashboard" ] 
};

/*
   NextAuthJS | Middleware
   https://next-auth.js.org/configuration/nextjs#middleware

   NextAuthJS | getServerSession
   https://next-auth.js.org/configuration/nextjs#unstable_getserversession
*/