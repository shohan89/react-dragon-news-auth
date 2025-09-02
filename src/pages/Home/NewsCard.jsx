import { Link } from "react-router";

const NewsCard = ({ aNews }) => {
    const { id, title, image_url, details } = aNews;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                src={image_url}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 500)}<Link className="font-bold text-primary" to={`/news/${id}`}>Read More...</Link></p>
            </div>
        </div>
    );
};

export default NewsCard;