import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h2 className='text-2xl font-bold text-center'>Please Login.</h2>
                <form className='lg:w-1/2 md:w-3/4 mx-auto my-10'>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;