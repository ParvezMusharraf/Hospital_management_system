'use client';

import { useEffect, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------
const STORAGE_KEY = 'accessToken';

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  const initialize = useCallback(async () => {
    setLoading(true);
    try {
      console.log("auth call")
      const token = localStorage.getItem("accessToken")
      if(token){
        router.push('/')
      }else{
        router.push("/pages/login")
      }
    } catch (error) {
      console.log(error);
      alert(error);
      router.push(`/logout`);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);


  
  useEffect(() => {
    const accessTokenTemp = sessionStorage.getItem(STORAGE_KEY);    
    if(accessTokenTemp){
      setAccessToken(accessTokenTemp)
    }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
    
      accessToken,
      loading,
      setLoading,
      user,
      setUser,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, accessToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
