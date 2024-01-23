import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGE_CONFIG, UPCOMING_LIST } from "@/config";
import useFetcher from "./hooks/useFetcher";
import Link from "next/link";
import { NextArrow } from "./svgs";
import { createSlug } from "./util";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // adaptiveHeight: true,
  };

  const { data } = useFetcher(`${UPCOMING_LIST}`);
  const slides = data?.results;

  return (
    <div className="rounded-xl shadow items-center text-white w-full min-h-screen">
      <Slider {...settings}>
        {slides?.map((items) => (
          <div className="flex h-screen w-full object-cover relative" key={items.id}>
            <img
              src={`${IMAGE_CONFIG.base_url}${IMAGE_CONFIG.backdrop_sizes.original}${items.backdrop_path}`}
              alt={items.title}
              className="h-screen w-full object-cover opacity-30"
            />
            <Link href={"/movie/[...id]"} as={`/movie/${items.id}/${createSlug(items.title)}`}>
             <span className="absolute bottom-0 right-0 flex  m-5 text-lg text-secondary-color">Check it out<span className="mt-[7px]"><NextArrow/></span> </span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;