import { useEffect, useState } from "react";
import { SEARCH_MOVIE_URL } from "@/config";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { SearchIcon } from "@/components/svgs";
import Loading from "@/components/loading";
import Pagination from "@/components/pagination";
import Button from "@/components/button";
import Wrapper from "@/components/searchList/wrapper";
import MovieCard from "@/components/searchList/movieCard";
import SearchInput from "@/components/searchInput";
import useScrollToTop from "@/components/hooks/useScrollToTop";
import useFetcher from "@/components/hooks/useFetcher";
import useQueryParams from "@/components/searchList/useQueryParams";

const SearchList = () => {
  const router = useRouter();
  const [retryCount, setRetryCount] = useState(0);
  const { query, currentPage,setQuery } = useQueryParams(router);
  const { data, isLoading, error } = useFetcher(
    `${SEARCH_MOVIE_URL}?include_adult=false&language=en-US&page=${currentPage}&query=${query}`,
    { method: "GET" },
    [query, currentPage, retryCount]
  );
  const list = data?.results;

  useScrollToTop(currentPage);

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/searchList",
      query: {
        query,
      },
    });
  };

  const handlePagination = (page) => {
    router.push({
      pathname: "/searchList",
      query: {
        query,
        page,
      },
    });
  };

  const retry = () => {
    setError(false);
    setRetryCount((prev) => prev + 1);
  };

  return (
    <Layout>
      <div className="flex flex-col w-full h-full bg-black gap-5 min-h-screen">
        <div className="border py-24 px-5 bg-black w-full h-full">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <form onSubmit={search}>
                <div className="relative text-white mx-11">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchIcon />
                  </div>
                  <SearchInput
                    onChange={handleInputChange}
                    value={query}
                    className={
                      "block w-full p-3 ps-10 text-sm text-white border border-secondary-color rounded-full bg-black focus:ring-blue-500 focus:border-blue-500"
                    }
                  />
                  <Button
                    type="submit"
                    variant="rounded"
                    className="absolute end-1 bottom-1 font-medium py-2 px-1"
                  >
                    Search
                  </Button>
                </div>
              </form>

              {query ? (
                <Wrapper>
                  {list.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                  <Pagination
                    currentPage={currentPage}
                    handlePagination={handlePagination}
                  />
                </Wrapper>
              ) : (
                <>
                  <span className="text-white md:text-lg flex justify-center py-24">
                    There are no movies that matched your query.
                  </span>
                </>
              )}
              {error && (
                <div className="text-center text-white">
                  <p>An error occurred.</p>
                  <Button
                    onClick={retry}
                    variant="square"
                    className="font-bold mt-4"
                  >
                    Retry
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchList;
