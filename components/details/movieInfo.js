import Avatar from "../avatar";

const MovieInfo = ({ movie }) => {
  return (
    <div className="pl-7 py-3">
      <div className="flex flex-col">
        <h2 className="text-lg md:text-2xl font-semibold mb-4 text-secondary-color">
          {movie.title}
        </h2>
        <div className="flex gap-1">
          {movie.genres.map((item, index) => (
            <div className="flex" key={item.id}>
              <p>{item.name}</p>
              {index !== movie.genres.length - 1 && <span>,</span>}
            </div>
          ))}
        </div>
        <span className="text-slate-500 pb-9 flex flex-col">
          {movie.release_date}
        </span>
      </div>
      <div>
        <div className="w-11 h-11 pt-2 my-2 text-center bg-secondary-color">
          <span className="text-center text-black font-bold text-xl">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <p className="text-sm md:text-lg lg:text-xl text-pretty">
        <span className="font-semibold">
          {" "}
          Overview :<br />
        </span>
        {movie.overview}
      </p>
      <div className="flex -space-x-2 overflow-hidden my-4">
        {movie.credits.cast.slice(0, 5).map((item) => (
          <Avatar key={item.id} path={item.profile_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieInfo;
