import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}