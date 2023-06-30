import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";


const RequireAuth = ({ allowedRoles }: any) => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        // auth?.roles?.find(role => allowedRoles?.includes(role?.authority))
        //     ? <Outlet />
        //     : auth?.user
        //         ? <Navigate to="/unauthorized" />
        //         : <Navigate to="/login"  />
        <Outlet />
    );
}

export default RequireAuth;