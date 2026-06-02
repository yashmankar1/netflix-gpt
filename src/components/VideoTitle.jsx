const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-40 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-300  text-xl text-white p-2 px-12 cursor-pointer mx-2 rounded">
          ▶ Play
        </button>
        <button className="bg-gray-300  text-xl text-white p-2 px-12 cursor-pointer rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
