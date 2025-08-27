import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RIghtSideNav from "../Shared/RightSideNav/RIghtSideNav";

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2">
                    <h2>News coming soon...</h2>
                </div>
                <div>
                    <RIghtSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;