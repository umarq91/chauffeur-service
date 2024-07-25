import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const navbarOptions = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Contact Us",
      link: "/contact"
    },
    // {
    //   label: "Our Services",
    //   link: "/services"
    // },
    {
      label: "About Us",
      link: "/about"
    }
  ];

  return (
    <nav className="flex justify-around items-center bg-white bg-opacity-80 font-poppins shadow-lg w-full py-5 px-8 ring-1 ring-white z-50">
      <Link
        to="/"
        className="flex justify-center items-center text-[18px] md:text-[25px] font-bold"
      >
        <span className="text-[14px]">Company Logo</span>
      </Link>

      {/* Mid */}
      <ul className="hidden lg:flex h-full">
        {navbarOptions.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="flex mx-8  font-md relative text-gray-900 hover:text-blue-900 group"
          >
            {item.label}
            <span className="inline-block w-0 h-[2px] bg-black -bottom-2 transition-all duration-500 group-hover:w-full absolute"></span>
          </Link>
        ))}
      </ul>

      {/* Mobile */}
      {!menuOpened ? (
        <RxHamburgerMenu
          onClick={toggleMenu}
          className="lg:hidden inline-block cursor-pointer"
        />
      ) : (
        <MdClose
          onClick={toggleMenu}
          className="lg:hidden inline-block cursor-pointer"
        />
      )}

      <ul
        className={
          menuOpened
            ? "lg:mt-3 flex flex-col justify-center p-10 fixed top-10 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md z-50"
            : "flex flex-col justify-center p-12 fixed top-14 right-[-100%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
        }
      >
        {navbarOptions.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="flex gap-1 m-3 mx-3 relative text-gray-900 hover:text-blue-900 group"
          >
            {item.label}
            <span className="inline-block w-0 h-[2px] bg-black -bottom-2 transition-all duration-500 group-hover:w-full absolute"></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
