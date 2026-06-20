import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function MovieCarousel({ movies }) {

  return (

    <Swiper
      slidesPerView={5}
      spaceBetween={20}
    >

      {movies.map(movie => (

        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie}/>
        </SwiperSlide>

      ))}

    </Swiper>

  );
}

export default MovieCarousel;