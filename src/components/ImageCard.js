function ImageCard({ url, title, description }) {
  return (
    <div className="card">
      <img src={url} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;