
const NewsCard = ({ aNews }) => {
    const { title } = aNews;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default NewsCard;