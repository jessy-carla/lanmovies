import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import CategoryList from "./components/CategoryList";
import Ranking from "./components/Ranking";
import { useMovies } from "./hooks/useMovies";
import { getGenres } from "./services/tmdb";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genres, setGenres] = useState({});
  const { movies, loading, error } = useMovies(searchQuery);

  useEffect(() => {
    async function loadGenres() {
      const genresData = await getGenres();
      setGenres(genresData);
    }

    loadGenres();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const getMovieGenres = (genreIds) => {
    if (!genreIds || genreIds.length === 0) return [];
    return genreIds
      .map((id) => genres[id])
      .filter((genre) => genre !== undefined)
      .slice(0, 3);
  };

  return (
    <div className="app">
      <Navbar onSearch={handleSearch} />

      {!searchQuery && <Hero />}

      <div className="main-content">
        <div className="left">
          <section>
            <h2>{searchQuery ? `Resultados para: "${searchQuery}"` : "Em Alta"}</h2>

            {loading && <p>Carregando filmes...</p>}
            {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
            {!loading && movies.length === 0 && (
              <p style={{ color: "#999" }}>Nenhum filme encontrado.</p>
            )}

            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  year={movie.release_date?.slice(0, 4) || "N/A"}
                  rating={movie.vote_average?.toFixed(1) || "--"}
                  image={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/500x750?text=Sem+Imagem"
                  }
                  genres={getMovieGenres(movie.genre_ids)}
                />
              ))}
            </div>
          </section>
        </div>

        {!searchQuery && (
          <div className="right">
            <CategoryList />
            <Ranking />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;