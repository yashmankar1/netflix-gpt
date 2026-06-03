import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    let mounted = true;

    const getMovieVideos = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS,
        );
        const json = await res.json();
        const results = json.results || [];
        const filterData = results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : results[0];
        if (mounted && trailer) dispatch(addTrailerVideo(trailer));
      } catch (e) {
        // ignore network errors for now
      }
    };

    getMovieVideos();
    return () => {
      mounted = false;
    };
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
