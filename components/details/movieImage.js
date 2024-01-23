import { IMAGE_CONFIG } from "@/config";

const MovieImage = ({ path, alt, size, className }) => {
  return (
    <img
      src={`${IMAGE_CONFIG.base_url}${size}${path}`}
      alt={alt}
      className={className}
    />
  );
};

export default MovieImage;
