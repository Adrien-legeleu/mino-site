import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Realisation = () => {
  return (
    <div className="bg-grayLight">
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-grayDark from-60% to-grayLight"></div>
      <Header />
      <div className=" p-12 relative">
        <h1 className="mt-10 text-center text-6xl text-white">
          Nos Réalisations
        </h1>
        <p className="text-center max-w-[1100px] m-auto mt-20 text-whiteGray text-xl tracking-wider">
          Découvrez nos réalisations et explorez nos projets variés. Chaque site
          est conçu avec soin pour répondre aux besoins uniques de nos clients.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-10 lg:grid-cols-3 gap-4 md:gap-20 pl-3 pr-3 md:pl-10 md:pr-10 pb-32 max-w-[1700px] m-auto ">
        {ScreenShotSite.map((site, index) => (
          <div
            className={`relative group rounded-3xl overflow-hidden shadow-xl mt-5 shadow-[rgba(0,0,0,0.3)]`}
            key={`site numéro : ${index}`}
          >
            <div className="absolute w-full h-full top-0 left-0 z-10 rounded-3xl backdrop-blur-[2px] bg-[rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
            <img
              className="rounded-3xl group-hover:scale-110 duration-500 ease-out objectif-cover"
              src={site.img}
              alt={site.title}
            />
            <div className="absolute z-20 flex flex-col items-center jusitfy-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 invisible opacity-0 group-hover:opacity-100 group-hover:visible duration-500 ease-out">
              <h4 className="text-sm md:text-xl  lg:text-2xl text-white text-center">
                {site.title}
              </h4>
              <Link
                className="text-whiteGray text-[0.8rem] md:text-[1rem] lg:text-lg"
                to={site.url}
                target="_blank"
              >
                Visiter le site
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Realisation;

const ScreenShotSite = [
  {
    title: "Suhsi Food",
    img: "./screen-shot-site/sushifood.netlify.app_(Nest Hub Max).png",
    url: "https://sushifood.netlify.app",
  },
  {
    title: "AppBank",
    img: "./screen-shot-site/app-banque.netlify.app_(Nest Hub Max).png",
    url: "https://app-banque.netlify.app",
  },
  {
    title: "Ty Klouyou",
    img: "./screen-shot-site/villa-tyklouyou.netlify.app_(Nest Hub Max).png",
    url: "https://villa-tyklouyou.netlify.app",
  },
  {
    title: "Ultralight",
    img: "./screen-shot-site/ultralight-cycling.netlify.app_(Nest Hub Max).png",
    url: "https://ultralight-cycling.netlify.app",
  },
  {
    title: "Lurex",
    img: "./screen-shot-site/lurex.netlify.app_(Nest Hub Max).png",
    url: "https://lurex.netlify.app",
  },
  {
    title: "Crypto watch",
    img: "./screen-shot-site/tower-watch.netlify.app_(Nest Hub Max).png",
    url: "https://tower-watch.netlify.app",
  },
  {
    title: "La Montagne",
    img: "./screen-shot-site/l-montagne.netlify.app_(Nest Hub Max) (1).png",
    url: "https://l-montagne.netlify.app",
  },
  {
    title: "Le resto",
    img: "./screen-shot-site/6614180db57c0210e3c0a99b--verdant-snickerdoodle-8aa581.netlify.app_(Nest Hub Max).png",
    url: "https://le-resto.netlify.app",
  },
  {
    title: "Mino AI",
    img: "./screen-shot-site/mino-ai.netlify.app_(Nest Hub Max).png",
    url: "https://mino-ai.netlify.app",
  },
];
