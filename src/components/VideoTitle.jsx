import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();

  const openMovieDetails = () => {
    if (movieId) navigate(`/movie/${movieId}`);
  };

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-2 md:m-0">
        <button
          onClick={openMovieDetails}
          className="bg-white text-s md:text-2xl text-black p-1 px-2 md:py-2 md:px-12 cursor-pointer rounded-lg hover:bg-white/80"
        >
          ▶ Play
        </button>
        <button
          onClick={openMovieDetails}
          className="hidden md:inline-block mx-2 bg-gray-500 text-xl text-white p-2 px-12 cursor-pointer rounded-lg hover:bg-gray-400"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
