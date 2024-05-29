import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./UseAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth }: any = useAuth();
    const location = useLocation();

    return (
        allowedRoles?.find((role: any) => auth?.role?.includes(role)) ? (
            <Outlet />
        ) : auth?.user
            ? (<Navigate to="/#" state={{ from: location }} replace />)
            : (<Navigate to="/#" state={{ from: location }} replace />)
    )
}

export default RequireAuth;