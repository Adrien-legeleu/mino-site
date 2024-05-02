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
        <div className="hidden bg-grayDark rounded-3xl lg:flex lg:flex-col items-center w-[40%] m-auto justify-center">
          {servicesInfos.map((serviceInfo, index) => (
            <div
              key={`serviceInfo : ${index}`}
              className="p-5 pb-8 pt-8 flex flex-col gap-5 justify-between h-full items-center"
            >
              <div className="bg-[rgba(30,30,30,0.4)] lg:rounded-3xl  w-full flex items-center justify-center relative p-3 pb-5 pt-5">
                <img
                  src={serviceInfo.img}
                  alt={serviceInfo.title}
                  className={`w-[55%] object-contain relative`}
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
          {servicesData.map((data, index) => {
            return (
              <div
                className="grid grid-cols-80/20 gap-2 lg:gap-0 md:p-10 p-5 pt-10 pb-10 h-48 w-full bg-grayDark justify-center rounded-3xl group relative mb-4"
                key={`service numéro : ${index}`}
              >
                <div className="bg-[rgb(95,103,114)] opacity-0 rounded-3xl w-full h-full absolute top-0 left-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
                <div className="grid grid-cols-20/80 gap-4 md:gap-8 group-hover:translate-x-5 duration-500 ease-in-out z-10 items-center">
                  <div className="bg-[rgba(30,30,30,0.4)] lg:rounded-3xl rounded-2xl h-[50%] sm:h-[70%] xl:h-[80%] 2xl:h-[95%] w-full flex items-center justify-center ">
                    <img
                      className="w-[50%]"
                      src={data.src}
                      alt={`icon : ${index}`}
                    />
                  </div>
                  <div className="flex items-center ">
                    <p className="text-whiteGray text-md sm:text-xl md:text-3xl ">
                      {data.title}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end z-10">
                  <button
                    className="bg-green pt-3 pb-3 pr-5 pl-5 rounded-full lg:opacity-0 lg:translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out hover:brightness-90 hover:scale-110 "
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
    title: "Site Vitrine",
    src: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    src: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    src: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    src: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    src: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    src: "./template/glace.jpg",
  },
];
