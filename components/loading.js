import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center py-7">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loading;
