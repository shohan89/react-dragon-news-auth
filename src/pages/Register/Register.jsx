import { Link } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';

const Register = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h2 className='text-2xl font-bold text-center'>Please Register</h2>
                <form className='lg:w-1/2 md:w-3/4 mx-auto my-10'>
                    <fieldset className="fieldset space-y-2">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Your name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Your photo url" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <button className="btn btn-primary mt-4">Register</button>
                    </fieldset>
                </form>
                <p className='text-center'>Already have an account? Please <Link className='font-bold text-primary' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;