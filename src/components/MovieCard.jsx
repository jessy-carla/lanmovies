import "./MovieCard.css";

function MovieCard({ title, year, rating, image, genres }) {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
        <div className="card-overlay">
          <div className="card-genres">
            {genres && genres.length > 0 ? (
              genres.slice(0, 2).map((genre) => (
                <span key={genre} className="genre-badge">
                  {genre}
                </span>
              ))
            ) : (
              <span className="genre-badge">Sem gênero</span>
            )}
          </div>
        </div>
      </div>

      <div className="card-rate">⭐ {rating}</div>

      <div className="content">
        <h3 title={title}>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;