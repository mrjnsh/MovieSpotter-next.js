import { IMAGE_CONFIG } from "@/config";

const Avatar = ({ path }) => {
  return (
    <>
      {path ? (
        <img
          src={`${IMAGE_CONFIG.base_url}${IMAGE_CONFIG.backdrop_sizes.original}${path}`}
          className="inline-block h-8 md:h-10 w-8 md:w-10 rounded-full"
        />
      ) : (
        <img
          src={"https://avatar.iran.liara.run/public/27"}
          className="inline-block h-8 md:h-10 w-8 md:w-10 rounded-full"
        />
      )}
    </>
  );
};
export default Avatar;
