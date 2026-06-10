import { useRef } from "react";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Dhurandhar, Superman, Chaava, Don, Koi Mil Gaya";

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(gptQuery);

      if (!result.response) {
        // error handling
      }

      console.log(result.response.text());

      const geminiMovies = result.response.text().split(",");

      const promiseResults = geminiMovies.map((movie) =>
        searchMovieTMDB(movie),
      );

      const tmdbResults = await Promise.all(promiseResults);
      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({
          movieNames: geminiMovies,
          movieResults: tmdbResults,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-6 m-6 bg-white col-span-9"
          placeholder="what would you like to watch today?"
        />

        <button
          className="px-4 m-4 py-2 bg-red-700 text-white col-span-3 rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
