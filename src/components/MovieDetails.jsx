import { useParams } from "react-router-dom";
import useMovieDetailsTrailer from "../hooks/useMovieDetailsTrailer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error, movieDetails } = useMovieDetailsTrailer(id);

  const trailerVideo = useSelector((store) => store.movies.movieDetailsTrailer);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 bg-black/70 text-white px-4 py-2 rounded-lg hover:bg-black"
      >
        ← Back
      </button>

      <div className="min-h-screen bg-black text-white px-6 py-20 md:px-16">
        {loading && <p className="text-center">Loading movie details...</p>}
        {!loading && error && <p className="text-center">{error}</p>}
        {!loading && !error && movieDetails && (
          <section className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[280px_1fr]">
            <img
              className="w-full rounded-lg object-cover"
              src={IMG_CDN_URL + movieDetails.poster_path}
              alt={movieDetails.title}
            />
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl font-bold md:text-5xl">
                {movieDetails.title}
              </h1>
              <p className="text-gray-300">{movieDetails.overview}</p>
              <p className="text-gray-400">
                {movieDetails.release_date?.slice(0, 4)} · Rating{" "}
                {movieDetails.vote_average?.toFixed(1)}
              </p>
              {trailerVideo?.key ? (
                <iframe
                  className="mt-4 aspect-video w-full rounded-lg"
                  src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1`}
                  title={`${movieDetails.title} trailer`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <p className="text-gray-400">No trailer is available.</p>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
