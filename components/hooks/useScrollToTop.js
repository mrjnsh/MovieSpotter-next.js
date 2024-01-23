import { useEffect } from "react";

const useScrollToTop = (currentPage) => {
  useEffect(() => {
    const scrollToTop = () => {
      const scrollToOptions = {
        top: 0,
        behavior: "smooth",
      };
      window.scrollTo(scrollToOptions);
    };

    scrollToTop();
  }, [currentPage]);
};

export default useScrollToTop;
