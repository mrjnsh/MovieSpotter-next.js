import { SEARCH_MOVIE_URL } from "@/config";
import { useState } from "react";
import Link from "next/link";
import Button from "./button";
import SearchInput from "./searchInput";
import { createSlug } from "./util";
import Loading from "./loading";
import useFetcher from "./hooks/useFetcher";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(true);

  const { data, isLoading } = useFetcher(
    `${SEARCH_MOVIE_URL}?include_adult=false&language=en-US&page=1&query=${query}`,
    { method: "GET" },
    [query]
  );
  const movieList = data?.results;

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setShowResults(showResults);
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
  
  return (
    <div className="relative h-[200px]">
      <>
        <form
          onSubmit={search}
          className="flex border-b border-secondary-color text-white py-2"
        >
          <SearchInput
            className={
              "flex appearance-none bg-transparent border-none w-full text-secondary-color mr-3 py-1 px-2 focus:outline-none"
            }
            onChange={handleInputChange}
            value={query}
          />
          <Link className="flex gap-2" href={"/searchList?query=" + query}>
            <Button variant="rounded" className="flex-shrink-0">
              Search
            </Button>
          </Link>
        </form>
        {showResults && query ? (
          isLoading ? (
            <div className="bg-black opacity-80 w-72">
              <Loading />
            </div>
          ) : (
            <div className="my-1">
              {movieList.slice(0, 5).map((item, index) => (
                <div key={item.id} className="bg-black opacity-80 w-72">
                  <div className="text-secondary-color px-3" key={index}>
                    <Link
                      href={`/movie/${item.id}/${createSlug(item.title)}`}
                      passHref
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : null}
      </>
    </div>
  );
};

export default Search;
