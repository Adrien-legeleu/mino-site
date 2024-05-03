import { useState, useEffect } from "react";
import ServiceInfo from "./ServicesInfo";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Services = () => {
  const [isInfoContainerVisible, setIsInfoContainerVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".services",
      start: "top top",
      end: "bottom bottom",
      pin: ".left",
      pinSpacing: false,
      markers: true,
    });

    gsap.utils.toArray(".service-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const OpenContainerVisible = () => {
    setIsInfoContainerVisible(true);
  };

  return (
    <div className="services-page">
      <div className="h-full w-full bg-grayLight pt-48 pb-48 max-w-[1700px] m-auto ">
        <h2 className="text-center text-white text-5xl">Nos Services</h2>
        <div className="relative flex flex-col lg:grid lg:grid-cols-30/70 mt-16 services">
          <div className="fixed bg-grayDark rounded-3xl lg:flex lg:flex-col items-center w-[40%] m-auto justify-center left">
            {servicesInfos.map((serviceInfo, index) => (
              <div
                key={`serviceInfo : ${index}`}
                className="p-5 pb-8 pt-8 flex flex-col gap-5 justify-between h-full items-center"
              >
                <div className="bg-[rgba(30,30,30,0.4)] lg:rounded-3xl rounded-2xl w-full flex items-center justify-center relative p-3 pb-5 pt-5">
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
            className="relative grid-cols-1 gap-10 grid  w-[80%] m-auto"
            id="service"
          >
            {servicesData.map((data, index) => {
              return (
                <a href={data.href} key={`service numéro : ${index}`}>
                  <div className="grid grid-cols-95/5 gap-2  h-48 w-full pl-8 pr-5 bg-grayDark justify-center rounded-3xl group relative mb-4 service-item">
                    {/* ... */}
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
    src: "./template/glace.jpg",
  },
];
