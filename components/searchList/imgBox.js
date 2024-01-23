import { IMAGE_CONFIG } from "@/config";

const ImageBox = ({ path, alt }) => {
  return (
    <>
      {path ? (
        <img
          src={`${IMAGE_CONFIG.base_url}${IMAGE_CONFIG.backdrop_sizes.original}${path}`}
          alt={alt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      ) : (
        <img
          src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?size=626&ext=jpg&ga=GA1.1.1281199674.1704456986&semt=sph"
          className="h-[170px] lg:h-[163px] xl:h-[155px] w-full opacity-50 rounded"
        />
      )}
    </>
  );
};
export default ImageBox;
