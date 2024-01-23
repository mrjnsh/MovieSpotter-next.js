import ImageBox from "./imgBox";
import { createSlug } from "../util";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Link href={`/movie/${movie.id}/${createSlug(movie.title)}`} passHref>
          <ImageBox path={movie.backdrop_path} alt={movie.title} />
        </Link>
      </div>
      <Link href={`/movie/${movie.id}/${createSlug(movie.title)}`} passHref>
        <h3 className="mt-4 text-md text-secondary-color">{movie.title}</h3>
      </Link>
      <p className="mt-1 text-sm text-gray-900">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
