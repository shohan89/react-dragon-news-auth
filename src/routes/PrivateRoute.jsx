import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const pathName = location.pathname;
    console.log("🚀 ~ PrivateRoute ~ location:", location.pathname)
    // check loading state
    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }
    if(user){
        return children;
    }

    return <Navigate state={pathName} to='/login' />
};

export default PrivateRoute;