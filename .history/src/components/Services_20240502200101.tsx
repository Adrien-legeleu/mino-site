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
              <div>
                <img src={data.src} alt="" />
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
    scr: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    scr: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    scr: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    scr: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    scr: "./template/glace.jpg",
  },
  {
    href: "#1",
    title: "Site Vitrine",
    scr: "./template/glace.jpg",
  },
];
