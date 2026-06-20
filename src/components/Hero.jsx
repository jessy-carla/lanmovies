import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="overlay">

        <span>EM DESTAQUE</span>

        <h1>Interestelar</h1>

        <div className="info">
          ⭐ 8.6 • 2014 • 2h49min
        </div>

        <p>
          Quando a Terra se torna inabitável,
          um grupo de exploradores viaja através
          de um buraco de minhoca em busca de um
          novo lar para a humanidade.
        </p>

        <button className="watch">
          Assistir agora
        </button>

      </div>

    </section>
  );
}

export default Hero;