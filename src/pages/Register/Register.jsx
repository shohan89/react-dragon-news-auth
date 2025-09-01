import { Link } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';

const Register = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h2 className='text-2xl font-bold text-center'>Please Register.</h2>
                <form className='lg:w-1/2 md:w-3/4 mx-auto my-10'>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                </form>
                <p className='text-center'>Do not have account? Please <Link className='font-bold text-primary' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Register;