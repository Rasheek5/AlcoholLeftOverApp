import {createContext, useContext} from 'react';

export const AuthContext = createContext<any>(null);

export const useAuthContext = () => {
  const context = useContext<any>(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
};
