import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movie/${movieId}`);
  };

  if (!posterPath) return null;
  return (
    <div
      onClick={handleMovieClick}
      className="w-36 md:w-48 pr-4 shrink-0 transition-all duration-300 hover:scale-110 hover:z-20 cursor-pointer"
    >
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
