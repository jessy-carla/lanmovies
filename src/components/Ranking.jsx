import "./Ranking.css";

function Ranking() {
  const movies = [
    {
      title: "O Poderoso Chefão",
      score: 9.2
    },
    {
      title: "Um Sonho de Liberdade",
      score: 9.1
    },
    {
      title: "A Lista de Schindler",
      score: 9.0
    }
  ];

  return (
    <div className="ranking">
      <h2>⭐ Top Avaliados</h2>

      <div className="ranking-list">
        {movies.map((movie, index) => (
          <div className="rank-item" key={index}>
            <div className="rank-position">
              <span className="rank-number">{index + 1}</span>
            </div>

            <div className="rank-info">
              <p className="rank-title">{movie.title}</p>
            </div>

            <div className="rank-score">
              <strong>{movie.score.toFixed(1)}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;
