import React, {PropsWithChildren, useState} from 'react';
import {AuthContext} from './authContext';

export const Context = ({children}: PropsWithChildren) => {
  const [authContext, setAuthContext] = useState<any>();

  return (
    <AuthContext.Provider value={[authContext, setAuthContext]}>
      {children}
    </AuthContext.Provider>
  );
};
