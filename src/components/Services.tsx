import { useState } from "react";

const Services = () => {
  const [isInfoContainerVisible, setIsInfoContainerVisible] = useState(false);

  const OpenContainerVisible = () => {
    setIsInfoContainerVisible(true);
  };
  const closeContainerVisible = () => {
    setIsInfoContainerVisible(false);
  };

  return (
    <div className="h-full w-full bg-grayLight pt-48 pb-28 ">
      <h2 className="text-center text-white text-5xl">Nos Services</h2>
      <div className="grid grid-cols-30/70 mt-16">
        <div className="flex flex-col items-center justify-center gap-10">
          {servicesInfos.map((serviceInfo, index) => (
            <div
              key={`serviceInfo : ${index}`}
              className="h-80 w-80 p-5 rounded-full  shadow-services "
            >
              <img
                src={serviceInfo.img}
                alt={serviceInfo.title}
                className="w-full h-4/5 object-contain "
              />
              <h5 className="text-center text-whiteGray text-xl">
                {serviceInfo.title}
              </h5>
            </div>
          ))}
        </div>
        <div className="relative">
          <a href="#3" onClick={OpenContainerVisible}>
            <div className="absolute top-10 left-20 h-64 w-2/4 rounded-[35px] bg-[url(./template/hebergement.jpg)] bg-cover flex flex-col items-center justify-center group hover:scale-90 eae-in-out duration-300">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.1)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>

              <h1 className="text-center text-5xl backdrop-blur-[1px] text-white">
                Hébergement
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300 opacity-0 z-10  group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
          <a href="#1" onClick={OpenContainerVisible}>
            <div className="absolute top-[340px] right-8 h-80 w-2/5 rounded-[35px] bg-[url(./template/music.jpg)] bg-cover  flex flex-col items-center justify-center group hover:scale-90 eae-in-out duration-300">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.1)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>

              <h1 className="text-center text-5xl backdrop-blur-[1px] text-white">
                Blog
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300 opacity-0 z-10  group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
          <a href="#2" onClick={OpenContainerVisible}>
            <div className="absolute bottom-72 left-12 h-80 w-2/5 rounded-[35px] bg-[url(./template/sushi.jpg)] bg-cover bg-center  flex flex-col items-center justify-center group hover:scale-90 eae-in-out duration-300">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.1)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>
              <h1 className="text-center text-5xl backdrop-blur-[1px] text-white">
                Site Vitrine
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300 opacity-0 z-10  group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
          <a href="#4" onClick={OpenContainerVisible}>
            <div className="absolute bottom-1 right-10 h-64 w-2/4 rounded-[35px] bg-[url(./template/glace.jpg)] bg-cover  flex flex-col items-center justify-center group hover:scale-90 eae-in-out duration-300">
              <div className="absolute top-0 left-0 w-full h-full rounded-[35px] bg-[rgba(0,0,0,0.1)] duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.3)]"></div>

              <h1 className="text-center text-5xl backdrop-blur-[1px] text-white">
                E-commerce
              </h1>
              <div className="flex w-full items-center justify-center ease-in-out duration-300 opacity-0 z-10 group-hover:opacity-100 mt-5">
                <button className="text-2xl text-white backdrop-blur-[2px]">
                  En savoir plus
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className={`fixed rounded-3xl top-0 w-3/5 h-screen bg-gray-300 shadow-containerService left-0 grid grid-cols-80/20 duration-500 ease-out z-10 ${
          isInfoContainerVisible
            ? "transform translate-none visible"
            : "transform -translate-x-full invisible"
        }`}
      >
        <div
          className="w-full overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {infoContainerServices.map((info, index) => (
            <div
              className={`pl-7 pr-7 pt-20 pb-16 flex flex-col items-center justify-center ${
                index !== infoContainerServices.length - 1 ? "border-b-2" : ""
              }`}
              key={`infos-${index}`}
              id={info.id}
            >
              <h3 className=" text-center text-3xl">{info.title}</h3>
              <p className=" mb-10 mt-10 text-center leading-9">{info.text}</p>
              <button className="p-5 bg-green rounded-full ease-out duration-300 hover:scale-110">
                voir nos réalisations
              </button>
            </div>
          ))}
        </div>
        <ul className=" relative pl-5 flex flex-col items-center justify-center gap-2 ">
          {infoContainerServices.map((info, index) => (
            <a href={`#${info.id}`}>
              <li key={`numéro : ${index}`}>
                <h4 className="underline text-lg">{info.title}</h4>
              </li>
            </a>
          ))}
          <div
            className="absolute bottom-[22%] cursor-pointer "
            onClick={closeContainerVisible}
          >
            <button className="pl-5 pr-5 pt-3 pb-3 bg-red-600 rounded-full text-white text-xl">Fermer</button>
          </div>
          <div className="absolute w-1 h-3/5 bg-white rounded-full left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </ul>
      </div>
      <div
        className={`fixed z-0 top-0 left-0 w-screen h-screen bg-transparent ${
          isInfoContainerVisible ? "block" : "hidden"
        }`}
        onClick={closeContainerVisible}
      ></div>
    </div>
  );
};

export default Services;

const servicesInfos = [
  {
    title: "Sécurisé",
    img: "./image-3d/cloud (2).png",
  },
  {
    title: "Optimisé",
    img: "./image-3d/fusé.png",
  },
  {
    title: "Sur-mesure",
    img: "./image-3d/performant (2).png",
  },
];

const infoContainerServices = [
  {
    id: "1",
    title: "Blog",
    text: "Obtenez un blog qui vous démarque avec notre service de création sur mesure. Notre équipe expérimentée de développeurs web conçoit des blogs personnalisés selon vos besoins et votre style. Que vous soyez un passionné de voyages, un entrepreneur ou un créateur de contenu, nous transformons votre vision en réalité en utilisant les dernières technologies web. Contactez-nous dès aujourd'hui pour démarrer votre projet de blog sur mesure.",
  },
  {
    id: "2",
    title: "Site Vitrine",
    text: "Démarquez-vous en ligne avec un site vitrine professionnel conçu sur mesure. Nous créons des sites web captivants qui reflètent l'essence de votre entreprise et attirent l'attention de vos clients potentiels. Que vous soyez un petit commerce local ou une entreprise en pleine croissance, nous vous aidons à vous démarquer dans un monde numérique compétitif. Contactez-nous dès aujourd'hui pour donner vie à votre entreprise en ligne.",
  },
  {
    id: "3",
    title: "Site d'Hébergement",
    text: "Propulsez votre établissement vers de nouveaux sommets avec un site web d'hébergement conçu sur mesure. Nous comprenons les besoins uniques de l'industrie de l'hospitalité et créons des sites web qui mettent en valeur les caractéristiques uniques de votre établissement. De la réservation en ligne à la présentation visuelle de vos chambres ou locations, nous vous aidons à offrir une expérience utilisateur inoubliable à vos clients. Contactez-nous dès aujourd'hui pour faire de votre site web un atout majeur pour votre entreprise d'hébergement.",
  },
  {
    id: "4",
    title: "Site E-commerce",
    text: "Transformez votre entreprise en ligne avec un site e-commerce sur mesure. Nous concevons des boutiques en ligne attractives et conviviales qui maximisent les ventes et fidélisent les clients. Que vous vendiez des produits physiques ou numériques, nous vous aidons à créer une plateforme de commerce électronique qui répond à vos besoins spécifiques et à ceux de vos clients. Contactez-nous dès aujourd'hui pour démarrer votre voyage vers le succès en ligne.",
  },
];
