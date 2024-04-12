import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [isHeader, setIsHeader] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  let recentScroll = 0;

  const scrollHeader = () => {
    let currentScroll = window.scrollY;
    if (currentScroll - recentScroll > 0) {
      setIsHeader(true);
    } else {
      setIsHeader(false);
    }
    recentScroll = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const handleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const scrollToTop=()=>{
    window.scrollTo(0, 0);
  }

  return (
    <div
      className={`z-50  h-20 w-full grid grid-cols-3 justify-between items-center fixed top-2 left-1/2 ease-in-out duration-200 max-w-[1300px]   ${
        isHeader
          ? "-translate-y-full -translate-x-1/2"
          : "-translate-y-none -translate-x-1/2"
      }`}
    >
      <div className="flex items-center justify-start lg:ml-24 ml-2">
        <Link to="/" onClick={scrollToTop}>
          <h1 className="text-white text-3xl tracking-wide text-shadow-lg">
            MINO
          </h1>
        </Link>
      </div>
      {window.innerWidth > 950 ? (
        <ul className="flex items-center justify-evenly backdrop-blur-lg rounded-full p-2 bg-[rgba(0,0,0,0.1)] ">
          <Link to="/#offre" onClick={scrollToTop}>
            <li className="text-shadow-lg text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-in-out">
              Offre
            </li>
          </Link>
          <Link to="/realisations" onClick={scrollToTop}>
            <li className="text-shadow-lg text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-in">
              Réalisations
            </li>
          </Link>
          <Link to="/#service" onClick={scrollToTop}>
            <li className="text-shadow-lg text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-in">
              Services
            </li>
          </Link>
        </ul>
      ) : (
        <div>
          <div className={`absolute w-full h-screen top-0 left-0 bg-transparent ${isMenuVisible ? "block" : "hidden"}`} onClick={handleMenu}></div>
          <div
            className=" relative bg-blackTransparent backdrop-blur-lg hover:scale-110 hover:brightness-125 cursor-pointer duration-300 md:w-12 md:h-12 w-10 h-10 m-auto rounded-full p-2"
            onClick={handleMenu}
          >
            <div
              className={`md:w-[3px] md:h-7 w-[2px] h-6 bg-whiteGray rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isMenuVisible ? "rotate-[45deg]" : "rotate-0"
              } duration-300`}
            ></div>
            <div
              className={`md:w-[3px] md:h-7 w-[2px] h-6 bg-whiteGray rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isMenuVisible ? "rotate-[135deg]" : "rotate-90"
              } duration-300`}
            ></div>
          </div>
          <ul
            className={`flex flex-col sm:flex-row sm:w-[70%] w-[55%] items-center justify-evenly backdrop-blur-lg sm:rounded-full rounded-[40px] sm:p-2 pb-1 pt-1 absolute bg-[rgba(0,0,0,0.2)] left-1/2 -translate-x-1/2 top-full duration-300 ${
              isMenuVisible ? "opacity-100 visible" : " opacity-0 invisible"
            }`}
          >
              <Link to="/#offre" onClick={scrollToTop}>
              <li className="text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-in">
                Offre
              </li>
            </Link>
            <Link to="/realisations" onClick={scrollToTop}>
            <li className="text-shadow-lg text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-in">
              Réalisations
            </li>
          </Link>
            <Link to="/#service"onClick={scrollToTop}>
              <li className="text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-out">
                Services
              </li>
            </Link>
          </ul>
        </div>
      )}
      <div className=" flex items-center justify-end lg:pr-12 pr-2 w-full">
        <Link to="/#contact">
          <button className="p-4 bg-green rounded-full text-sm md:text-md">
            Un besoin ?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
