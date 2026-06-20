import "./Navbar.css";
import { useState } from "react";

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="navbar">
      <h1>Lan Movies</h1>

      <nav>
        <a href="#">Início</a>
        <a href="#">Em Alta</a>
        <a href="#">Gêneros</a>
        <a href="#">Listas</a>
        <a href="#">Minha Lista</a>
      </nav>

      <input
        type="text"
        placeholder="Buscar filmes..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyPress={handleSearchSubmit}
      />
    </header>
  );
}

export default Navbar;