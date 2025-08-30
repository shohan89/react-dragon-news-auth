import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/class.png";
import qZone2 from "../../../assets/playground.png";
import qZone3 from "../../../assets/swimming.png";

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
            {/* Q Zone */}
            <div className="space-y-4 mb-4">
                <h2 className="text-2xl font-bold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RIghtSideNav;