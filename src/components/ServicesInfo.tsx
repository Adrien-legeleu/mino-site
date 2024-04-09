interface ServiceProps {
    setIsInfoContainerVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isInfoContainerVisible:boolean
}
const ServiceInfo:React.FC<ServiceProps> =({setIsInfoContainerVisible , isInfoContainerVisible})=>{
      const closeContainerVisible = () => {
    setIsInfoContainerVisible(false);
  };
    return(
        <div>
            <div
        className={`fixed rounded-t-3xl  w-[100%]  h-[80%] bottom-0  bg-white shadow-containerService left-0 flex flex-col  duration-500 ease-out z-10 ${
          isInfoContainerVisible
            ? "transform translate-none visible"
            : "transform -translate-x-full invisible"
        }`}
      >
        <ul className=" relative pl-5 flex pt-5 pb-4  items-center justify-center gap-2 bg-[rgba(0,0,0,0.04)] sm:bg-transparent ">
          {infoContainerServices.map((info, index) => (
            <a href={`#${info.id}`}>
              <li key={`numéro : ${index}`}>
                <button className="text-sm text-center lg:text-lg pl-5 pr-5 pb-3 pt-3 bg-green rounded-full">{info.title}</button>
              </li>
            </a>
          ))}
          <div
            className=" cursor-pointer ml-20 "
            onClick={closeContainerVisible}
          >
            <button className="pl-5 pr-5 pt-3 pb-3 bg-red-600 rounded-full text-white text-md lg:text-xl">Fermer</button>
          </div>
        </ul>
        <div
          className="w-full pr-5 pl-5 sm:p-0 overflow-y-auto max-w-[800px] m-auto"
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
              <p className=" mb-10 mt-10 text-center text-sm lg:text-md lg:leading-9 leading-7">{info.text}</p>
              <button className="p-5 bg-green rounded-full ease-out duration-300 hover:scale-110">
                voir nos réalisations
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`fixed z-0 top-0 left-0 w-screen h-screen bg-transparent ${
          isInfoContainerVisible ? "block" : "hidden"
        }`}
        onClick={closeContainerVisible}
      ></div>
        </div>
    )
}
export default ServiceInfo

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