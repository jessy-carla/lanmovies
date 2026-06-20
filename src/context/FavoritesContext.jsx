import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState([]);

  function addFavorite(movie) {
    setFavorites([...favorites, movie]);
  }

  function removeFavorite(id) {
    setFavorites(
      favorites.filter(movie => movie.id !== id)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}