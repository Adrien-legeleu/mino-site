import { useState, useEffect, useRef } from "react";
import ServiceInfo from "./ServicesInfo";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [isInfoContainerVisible, setIsInfoContainerVisible] = useState(false);
  const servicesRef = useRef(null); // Référence à l'élément .services
  const leftRef = useRef(null); // Référence à l'élément .services

  const OpenContainerVisible = () => {
    setIsInfoContainerVisible(true);
  };

  useEffect(() => {
    if (servicesRef.current) {
      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: "top top",
        end:"bottom bottom"
        pin: leftRef.current,
        markers: true,
      });
    }
  }, []);

  return (
    <div className="h-full w-full bg-grayLight pt-48 pb-48 max-w-[1700px] m-auto ">
      <h2 className="text-center text-white text-5xl">Nos Services</h2>
      <div
        className=" flex flex-col lg:grid lg:grid-cols-30/70 mt-16  "
        ref={servicesRef}
      >
        <div className=" w-full h-full relative services">
          <div
            className="hidden  bg-grayDark rounded-3xl  h-screen lg:flex lg:flex-col w-[40%] items-center scale-90 translate-x-1/2"
            ref={leftRef}
          >
            {servicesInfos.map((serviceInfo, index) => (
              <div
                key={`serviceInfo : ${index}`}
                className="p-3 pb-4 pt-4  flex flex-col gap-5 justify-between h-full items-center"
              >
                <div className="bg-[rgba(30,30,30,0.4)] lg:rounded-3xl rounded-2xl w-[85%] flex items-center justify-center relative pt-5 pb-5 ">
                  <img
                    src={serviceInfo.img}
                    alt={serviceInfo.title}
                    className={`w-[45%] object-contain relative`}
                  />
                </div>
                <h5 className="text-center text-whiteGray text md:text-xl">
                  {serviceInfo.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative grid-cols-1  grid w-[95%] md:w-[80%] m-auto"
          id="service"
        >
          {servicesData.map((data, index) => {
            return (
              <a href={data.href}>
                <div
                  className="grid grid-cols-95/5 gap-2 h-36 md:h-48 w-full pl-8 pr-5 bg-grayDark justify-center rounded-3xl group relative mb-4"
                  key={`service numéro : ${index}`}
                >
                  <div className="bg-[rgb(95,103,114)] opacity-0 rounded-3xl w-full h-full absolute top-0 left-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
                  <div className="grid grid-cols-60/40 gap-4 md:gap-8 group-hover:translate-x-5 duration-500 ease-in-out items-center">
                    <div className="h-[80%] w-[90%] flex items-center justify-center ">
                      <img
                        className="w-[100%] h-[80%] md:h-full lg:rounded-3xl rounded-2xl"
                        src={data.src}
                        alt={`icon : ${index}`}
                      />
                    </div>
                    <div className="flex">
                      <p className="text-whiteGray  text-md -md sm:text-xl md:text-3xl ">
                        {data.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end z-10">
                    <button
                      className="bg-green md:pt-3 py-2 md:pb-3 px-3 md:pr-5 md:pl-5 rounded-full lg:opacity-0 lg:translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out hover:brightness-90 hover:scale-110 "
                      onClick={OpenContainerVisible}
                    >
                      <img
                        className="w-4"
                        src="./icon/right-arrow.png"
                        alt="right arrow"
                      />
                    </button>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <ServiceInfo
        isInfoContainerVisible={isInfoContainerVisible}
        setIsInfoContainerVisible={setIsInfoContainerVisible}
      />
    </div>
  );
};

export default Services;

const servicesInfos = [
  {
    title: "Sécurisé",
    img: "./icon/securite.png",
  },
  {
    title: "Optimisé",
    img: "./icon/optimisation-web.png",
  },
  {
    title: "Sur-mesure",
    img: "./icon/creation-de-sites-web (2).png",
  },
];

const servicesData = [
  {
    href: "#1",
    title: "Blog",
    src: "./template/music.jpg",
  },
  {
    href: "#2",
    title: "Site Vitrine",
    src: "./template/glace.jpg",
  },
  {
    href: "#3",
    title: "Site d'hébergement",
    src: "./template/hebergement.jpg",
  },
  {
    href: "#4",
    title: "E-commerce",
    src: "./template/sushi.jpg",
  },
  {
    href: "#5",
    title: "Portfolio",
    src: "./template/portfolio.jpg",
  },
];
