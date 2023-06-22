import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios";

type ContextUser = {
  user: string;
  roles: Array<Roles>;
};

type Roles = {
  authority: string;
};
type Context = {
  auth: ContextUser;
  setAuth: Dispatch<SetStateAction<ContextUser>>;
};

const defaultValue = {
  auth: {
    user: "",
    roles: [],
  },
  setAuth: () => {},
};

const AuthContext = createContext(defaultValue as Context);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<ContextUser>(() => {
    let author;
    const items = localStorage.getItem("items");
    if (items) {
      author = JSON.parse(items);
      return {
        user: author.name,
        roles: author.roles,
      };
    } else
      return {
        user: "",
        roles: [],
      } as ContextUser;
  });

  
  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
