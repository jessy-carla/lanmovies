import { useState } from "react";
import { FavoritesContext } from "./favorites-context";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(movie) {
    setFavorites((currentFavorites) => [...currentFavorites, movie]);
  }

  function removeFavorite(id) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((movie) => movie.id !== id)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}