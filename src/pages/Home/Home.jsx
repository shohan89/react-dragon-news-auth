import { useLoaderData } from "react-router";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RIghtSideNav from "../Shared/RightSideNav/RIghtSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log("🚀 ~ Home ~ news:", news)
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav />
                </div>
                {/* News container */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard 
                            key={aNews.id}
                            aNews={aNews}
                            />)
                    }
                </div>
                <div>
                    <RIghtSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;