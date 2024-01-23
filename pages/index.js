import Carousel from "@/components/carousel";
import Layout from "@/components/layout";
import Search from "@/components/search";
import { TmdbLogo } from "@/components/svgs";

const Home = () => {
  return (
    <Layout>
      <main className="flex flex-col w-full h-full bg-black gap-5 min-h-screen">
        <div className=" flex flex-col w-full justify-end">
          <>
          <div className="h-screen w-full object-cover">
            <Carousel />
            </div>
            <div className="absolute left-[50%] top-0 bottom-0 flex items-center justify-center translate-x-[-50%]">
              <Search />
            </div>
          
          </>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
