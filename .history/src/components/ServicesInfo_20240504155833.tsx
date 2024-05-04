import { Link } from "react-router-dom";

interface ServiceProps {
  setIsInfoContainerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isInfoContainerVisible: boolean;
}
const ServiceInfo: React.FC<ServiceProps> = ({
  setIsInfoContainerVisible,
  isInfoContainerVisible,
}) => {
  const closeContainerVisible = () => {
    setIsInfoContainerVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div
        className={`fixed md:rounded-t-[60px] rounded-t-[30px]   w-[100%] pt-4 h-[100%] bottom-0  bg-grayDark shadow-containerService left-0 flex flex-col  duration-300 ease-out z-[100] ${
          isInfoContainerVisible
            ? "transform translate-none visible"
            : "transform translate-y-full invisible"
        }`}
      >
        <ul className="  pl-5 p-5  items-center justify-center gap-4 m-auto bg-[#393d44] rounded-full hidden md:flex">
          <div className="absolute w-1/2 top-full left-1/2 -translate-x-1/2 h-1 bg-white rounded-full"></div>
          {infoContainerServices.map((info, index) => (
            <a href={`#${info.id}`}>
              <li key={`numéro : ${index}`}>
                <button className="text-sm text-center lg:text-md xl:text-lg pl-5 pr-5 pb-3 pt-3 bg-green rounded-full hover:scale-[1.03] duration-100">
                  {info.title}
                </button>
              </li>
            </a>
          ))}
        </ul>
        <div
          className=" cursor-pointer absolute top-6 right-2  md:top-4 md:right-10"
          onClick={closeContainerVisible}
        >
          <div className="w-8 md:w-12  rounded-full hover:scale-110 duration-300 cursor-pointer">
            <img className="w-full" src="./icon/close-white.png" alt="close" />
          </div>
        </div>
        <div
          className="w-full pr-5 pl-5 sm:p-0 overflow-y-auto max-w-[700px] m-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {infoContainerServices.map((info, index) => (
            <div
              className={`pl-7 pr-7 pt-20 pb-16 flex flex-col items-center justify-center ${
                index !== infoContainerServices.length - 1
                  ? "border-b-2 border-whiteGray"
                  : ""
              }`}
              key={`infos-${index}`}
              id={info.id}
            >
              <h3 className=" text-center text-2xl md:text-3xl text-white">
                {info.title}
              </h3>
              <p className=" mb-10 mt-10 text-center text-[0.75rem] sm:text-sm lg:text-md lg:leading-8 leading-6 text-whiteGray">
                {info.text}
              </p>
              <Link to="/realisations" onClick={scrollToTop}>
                <button className="p-5 text-white  rounded-full ease-out duration-300 hover:scale-110">
                  voir nos réalisations
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceInfo;

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
  {
    id: "5",
    title: "Portfolio",
    text: "Distinguez-vous avec un portfolio exceptionnel grâce à notre service de création sur mesure. Notre équipe expérimentée de développeurs web conçoit des portfolios personnalisés selon vos besoins et votre style. Que vous soyez un artiste, un photographe ou un designer, nous transformons votre vision en réalité en utilisant les dernières technologies web. Contactez-nous dès aujourd'hui pour donner vie à votre projet de portfolio sur mesure.",
  },
];
