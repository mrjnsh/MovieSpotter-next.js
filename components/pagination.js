import React from "react";
import { NextArrow, PrevArrow } from "./svgs";

const Pagination = ({ currentPage, handlePagination}) => {
  return (
    <div className="fixed border-none bottom-0 right-0 mr-5">
      <div className="flex justify-between py-5 my-1">
        <button
          className="flex items-center px-2 py-1 border bg-black border-secondary-color rounded-md mr-2 hover:bg-[#fef9c3]"
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>
            <PrevArrow />
          </span>
        </button>

        <button
          className="flex items-center px-2 py-1 border bg-black border-secondary-color rounded-md ml-2 hover:bg-[#fef9c3]"
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage === 20}
        >
          <span>
            <NextArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
