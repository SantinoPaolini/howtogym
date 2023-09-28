import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
{        // eslint-disable-next-line @next/next/no-html-link-for-pages
}        <a href="/" className="flex items-center">
          <Image
            src="/LogoHowToGym.png"
            className="mr-3"
            alt="HowToGym"
            width={196}
            height={70}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
