import { useState } from "react";
import ServiceInfo from "./ServicesInfo";

const Services = () => {
  const [isInfoContainerVisible, setIsInfoContainerVisible] = useState(false);

  const OpenContainerVisible = () => {
    setIsInfoContainerVisible(true);
  };

  return (
    <div className="h-full w-full bg-grayLight pt-48 pb-48 max-w-[1700px] m-auto">
      <h2 className="text-center text-white text-5xl">Nos Services</h2>
      <div className=" flex flex-col lg:grid lg:grid-cols-30/70 mt-16">
        <div className="hidden bg-grayDark rounded-3xl lg:flex lg:flex-col items-center w-[40%] m-auto justify-center gap-10">
          {servicesInfos.map((serviceInfo, index) => (
            <div
              key={`serviceInfo : ${index}`}
              className="p-5 pb-10 pt-10 flex flex-col gap-5 justify-between h-full items-center"
            >
              <div className="bg-[rgba(30,30,30,0.4)] lg:rounded-3xl  w-[100%] flex items-center justify-center relative p-3 pb-5 pt-5">
                <img
                  src={serviceInfo.img}
                  alt={serviceInfo.title}
                  className={`w-[50%] object-contain relative`}
                />
              </div>
              <h5 className="text-center text-whiteGray text-xl md:text-2xl">
                {serviceInfo.title}
              </h5>
            </div>
          ))}
        </div>
        <div
          className="relative grid-cols-1  grid lg:block gap-10 lg:gap-0 pl-3 pr-3 lg:p-0 mt-20 lg:m-0"
          id="service"
        >
          <a className="block" href="#3" onClick={OpenContainerVisible}>
            <div className=" relative h-[250px]  lg:absolute lg:top-10 lg:left-20 lg:h-64 lg:w-2/4 rounded-[35px] bg-[url(../src/assets/template/hebergement.jpg)] bg-cover flex flex-col items-center justify-center group hover:scale-[0.96] eae-in-out duration-300 shadow-services">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.2)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>

              <h1 className="text-center text-2xl sm:text-4xl md:text-5xl backdrop-blur-[1px] text-white">
                Hébergement
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300 lg:opacity-0 z-10  group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
          <a href="#1" onClick={OpenContainerVisible}>
            <div className=" relative h-[250px]  lg:absolute lg:top-[340px] lg:right-8 lg:h-80 lg:w-2/5 rounded-[35px] bg-[url(../src/assets/template/music.jpg)] bg-cover  flex flex-col items-center justify-center group hover:scale-[0.96] eae-in-out duration-300 shadow-services">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.2)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>

              <h1 className="text-center text-2xl sm:text-4xl md:text-5xl backdrop-blur-[1px] text-white">
                Blog
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300 lg:opacity-0 z-10  group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
          <a href="#2" onClick={OpenContainerVisible}>
            <div className=" relative h-[250px]  lg:absolute lg:bottom-72 lg:left-12 lg:h-80 lg:w-2/5 rounded-[35px] bg-[url(../src/assets/template/sushi.jpg)] bg-cover bg-center  flex flex-col items-center justify-center group hover:scale-[0.96] eae-in-out duration-300 shadow-services">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.2)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>
              <h1 className="text-center text-2xl sm:text-4xl md:text-5xl backdrop-blur-[1px] text-white">
                Site Vitrine
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300  lg:opacity-0 z-10  group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
          <a href="#4" onClick={OpenContainerVisible}>
            <div className=" relative h-[250px]  lg:top-none lg:absolute lg:bottom-1 lg:right-10 lg:h-64 lg:w-2/4 rounded-[35px] bg-[url(../src/assets/template/glace.jpg)] bg-cover  flex flex-col items-center justify-center group hover:scale-[0.96] eae-in-out duration-300 shadow-services">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.2)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>

              <h1 className="text-center text-2xl sm:text-4xl md:text-5xl backdrop-blur-[1px] text-white">
                E-commerce
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300 lg:opacity-0 z-10 group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
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
    img: "./image-3d/sécuriser.png",
  },
  {
    title: "Optimisé",
    img: "./image-3d/optimisé.png",
  },
  {
    title: "Sur-mesure",
    img: "./image-3d/sur-mesure.png",
  },
];
