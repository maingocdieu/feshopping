import { createContext, Dispatch, SetStateAction, useState } from "react";


type ContextUser= {
    user: string;
    roles: Array<string>;
}
type Context = {
    auth: ContextUser,
    setAuth: Dispatch<SetStateAction<ContextUser>>;
}

const defaultValue = {
    auth: {
        user: "",
        roles: []
    },
    setAuth: () => {},
}

const AuthContext = createContext(defaultValue as Context);

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<ContextUser>({} as ContextUser);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;