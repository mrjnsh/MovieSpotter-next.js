import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

const Header = () => {
  return (
    <div className="fixed w-full z-[1] bg-transparent text-lg text-text-color p-3">
      <Link
        href={"/"}
        className={`rounded whitespace-nowrap py-2 px-1 text-center flex justify-center font-bold text-xl text-secondary-color ${pacifico.className}`}
      >
        Movie Spotter
      </Link>
    </div>
  );
};

export default Header;
