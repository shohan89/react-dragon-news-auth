import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h2>Please Login.</h2>
                <form className='lg:w-1/2 md:w-3/4 mx-auto'>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;