import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unsubscribe;
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <header className="absolute top-0 left-0 z-20 w-full bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-12">
        <img className="w-28 md:w-40 lg:w-48" src={LOGO} alt="Netflix Logo" />

        {user && (
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handleGptSearchClick}
              className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700 md:px-4 md:py-2 md:text-sm"
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>

            <div className="group relative">
              <img
                className="h-8 w-8 cursor-pointer rounded-sm object-cover md:h-10 md:w-10"
                src={user?.photoURL}
                alt="User"
              />

              <div className="absolute right-0 top-12 hidden min-w-[140px] rounded-md border border-gray-700 bg-black/95 p-2 shadow-lg group-hover:block">
                <p className="truncate border-b border-gray-700 pb-2 text-xs text-gray-300">
                  {user?.displayName || user?.email}
                </p>

                <button
                  onClick={handleSignOut}
                  className="mt-2 w-full rounded px-2 py-2 text-left text-sm text-white hover:bg-gray-800"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
