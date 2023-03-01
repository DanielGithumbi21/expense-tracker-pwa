import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../Context/ContextProvider";


const PrivateRoute: React.FC = () => {
    const { user } = useContext(DataContext)

    if (user.jwt === "" || user.jwt === undefined) {
        return <Navigate to="/auth" replace />
    }
    return <Outlet />;


};

export default PrivateRoute;