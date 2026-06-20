import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";

export function useMovies(query = "") {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        setError(null);

        let results;
        if (query && query.trim() !== "") {
          results = await searchMovies(query);
        } else {
          results = await getPopularMovies();
        }

        setMovies(results);
      } catch (err) {
        setError(err.message || "Erro ao carregar filmes.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [query]);

  return { movies, loading, error };
}
