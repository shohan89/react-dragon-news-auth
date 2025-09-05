import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }

    return <Navigate to='/login' />
};

export default PrivateRoute;