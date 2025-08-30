import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RIghtSideNav = () => {
    return (
        <div>
            {/* Login Buttons */}
            <div className="space-y-4 mb-4">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn btn-outline btn-primary w-full">
                    <FaGoogle />
                    Login With Google
                    </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With GitHub
                    </button>
            </div>
            {/* Social Handles */}
            <div className=" mb-4 p-4">
                <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="#">
                    <FaFacebook className="mr-3" />
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center border-x " href="#">
                    <FaTwitter className="mr-3" />
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="#">
                    <FaInstagram className="mr-3" />
                    Instagram
                </a>
            </div>
        </div>
    );
};

export default RIghtSideNav;