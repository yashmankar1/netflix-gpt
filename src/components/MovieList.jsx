import { useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  if (!movies) return null;

  const handleScroll = () => {
    const el = scrollRef.current;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
      <div className="relative">
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white text-2xl px-2 py-6 hover:bg-black/90 rounded-r-2xl"
          >
            ‹
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll scrollbar-hide"
        >
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                movieId={movie.id}
              />
            ))}
          </div>
        </div>

        {showRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white text-2xl px-2 py-6 hover:bg-black/90 rounded-l-2xl"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
