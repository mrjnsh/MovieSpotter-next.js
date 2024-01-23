import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { IMAGE_CONFIG } from "@/config";
import Loading from "@/components/loading";
import MovieImage from "@/components/details/movieImage";
import MovieInfo from "@/components/details/movieInfo";
import useFetcher from "@/components/hooks/useFetcher";

const Movie = () => {
  const router = useRouter();

  const { data: movie, isLoading } = useFetcher(
    `https://api.themoviedb.org/3/movie/${router.query.id}?append_to_response=credits`,
    { method: "GET" },
    [router.query.id]
  );

  return (
    <Layout>
      <div className="flex flex-col w-full h-full bg-black text-white gap-5 min-h-screen py-11">
        <div className="container mx-auto my-8">
          {!isLoading ? (
            <>
              {movie ? (
                <div className="relative isolate overflow-hidden bg-gray-900 py-20 rounded">
                  <MovieImage
                    path={movie.backdrop_path}
                    size={IMAGE_CONFIG.backdrop_sizes.w300}
                    alt={movie.title}
                    className={
                      "absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20"
                    }
                  />
                  <div className="px-9 flex flex-col lg:flex-row justify-between">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <MovieImage
                        path={movie.backdrop_path}
                        size={IMAGE_CONFIG.backdrop_sizes.original}
                        alt={movie.title}
                        className={
                          "h-full w-96 object-cover object-center group-hover:opacity-75 px-5"
                        }
                      />
                    </div>
                    <MovieInfo movie={movie} />
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Movie;
