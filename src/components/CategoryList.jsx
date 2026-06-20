import "./CategoryList.css";

function CategoryList() {

  const genres = [
    "Ação",
    "Aventura",
    "Animação",
    "Comédia",
    "Drama",
    "Ficção Científica",
    "Suspense",
    "Terror",
    "Romance",
    "Documentário"
  ];

  return (
    <div className="genres">

      <h2>Gêneros</h2>

      {genres.map((genre) => (
        <button key={genre}>
          {genre}
        </button>
      ))}

    </div>
  );
}

export default CategoryList;