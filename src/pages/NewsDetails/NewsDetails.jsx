import Header from "../Shared/Header/Header";
import RIghtSideNav from "../Shared/RightSideNav/RIghtSideNav";

const NewsDetails = () => {
    return (
        <div>
            <Header />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2>News details will here...</h2>
                </div>
                <div>
                    <RIghtSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;