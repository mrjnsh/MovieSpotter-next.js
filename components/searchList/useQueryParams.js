import { useEffect, useState } from "react";

const useQueryParams = (router) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const { query, page } = router.query;
    setQuery(query || "");
    setCurrentPage(parseInt(page) || 1);
  }, [router.query]);

  return { query, currentPage, setQuery, setCurrentPage };
};

export default useQueryParams;
