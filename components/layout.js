import Header from "./header";
import { TmdbLogo } from "./svgs";

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Header />
      {children}
      <div className="fixed w-7 bottom-0 left-0 m-3">
      <TmdbLogo/>
    </div>
    </div>
  );
};

export default Layout;
