'use client';

import { AuthContext } from "./auth-context";

// import { SplashScreen } from 'src/components/loading-screen';
// components
//

// ----------------------------------------------------------------------


export function AuthConsumer({ children }) {
  return (
    <AuthContext.Consumer>
      {children}
    </AuthContext.Consumer>
  );
}
