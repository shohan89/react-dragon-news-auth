
const NewsCard = ({ aNews }) => {
    const { title, thumbnail_url, details } = aNews;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                src={thumbnail_url}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 500)+ '...'}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;