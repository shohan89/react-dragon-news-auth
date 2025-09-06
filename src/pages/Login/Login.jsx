import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password')
        console.log("🚀 ~ handleLogin ~ email:", email, password)

        // login user
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                // navigate after login
                navigate(location?.state? location.state : '/');
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div>
            <Navbar />
            <div>
                <h2 className='text-2xl font-bold text-center'>Please Login.</h2>
                <form onSubmit={handleLogin} className='lg:w-1/2 md:w-3/4 mx-auto my-10'>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                </form>
                <p className='text-center'>Do not have account? Please <Link className='font-bold text-primary' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;