import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {
  addMovieDetailsTrailer,
  clearMovieDetailsTrailer,
} from "../utils/moviesSlice";
import { useEffect, useState } from "react";

const useMovieDetailsTrailer = (movieId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(Boolean(movieId));
  const [error, setError] = useState(movieId ? "" : "No movie was selected.");
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      setLoading(true);
      setError("");
      dispatch(clearMovieDetailsTrailer());

      try {
        const [detailsResponse, videosResponse] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movieId}`, API_OPTIONS),
          fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS,
          ),
        ]);

        if (!detailsResponse.ok || !videosResponse.ok) {
          const status = !detailsResponse.ok
            ? detailsResponse.status
            : videosResponse.status;
          throw new Error(`TMDB request failed (${status}).`);
        }

        const [details, videosJson] = await Promise.all([
          detailsResponse.json(),
          videosResponse.json(),
        ]);
        const videos = Array.isArray(videosJson.results)
          ? videosJson.results
          : [];
        const trailer =
          videos.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          ) ?? videos[0];

        setMovieDetails(details);

        if (trailer?.key) dispatch(addMovieDetailsTrailer(trailer));
      } catch (requestError) {
        setError(requestError.message || "Unable to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    getMovieVideos();
  }, [dispatch, movieId]);

  return { loading, error, movieDetails };
};

export default useMovieDetailsTrailer;
