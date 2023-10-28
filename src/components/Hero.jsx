import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
function Hero({ movies }) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="hero">
      {movies.map((a, b) => (
        <SwiperSlide key={a.id}>
          <div className={`slider__inner ${b % 2 ? "reversed" : ""}`}>
            <div className="slider__text">
              <h3>{a.title}</h3>
              <p>{a.overview}</p>
              <Link className="read__more">Ətraflı</Link>
            </div>
            <div className="slider__image">
              <img
                src={`https://image.tmdb.org/t/p/original/${a.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
