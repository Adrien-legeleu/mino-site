import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const AboutUs = () => {
  return (
    <div className="lg:grid lg:grid-cols-30/70 bg-grayLight pt-40 pl-2 pr-2 md:pl-8 md:pr-8 lg:pr-16 flex flex-col max-w-[1700px] m-auto">
      <div className="flex flex-row items-start justify-start ">
        <div className="w-10 h-0.5 bg-white mr-3 relative top-2.5"></div>
        <h3 className="text-white">Pourquoi-nous ?</h3>
      </div>
      <div className="flex flex-col gap-32">
        <p className="text-white  tracking-wide leading-[40px] md:leading-[55px] text-center pr-2 pl-2 lg:text-start  lg:indent-12 md:text-4xl text-xl  lg:text-3xl xl:text-5xl  mt-10 lg:m-0">
          Grâce à une expérience forte acquise par des centaines de projets,
          nous vous proposons un accompagnement complet, de la conception à la
          mise en œuvre opérationnelle.
        </p>
        {window.innerWidth > 768 ? (
          <div className="flex flex-col gap-6">
            {Cards.map((card, index) => (
              <div
                key={index}
                className="grid grid-cols-30/70 bg-grayDark rounded-3xl h-[200px] items-center sease-out duration-300 group relative"
              >
                <div className=" bg-[rgba(30,30,30,0.4)]   lg:rounded-3xl rounded-2xl h-[50%]  sm:h-[70%] xl:h-[60%] 2xl:h-[80%] w-1/2 flex items-center justify-center relative m-auto">
                  <img
                    className="duration-300 ease-out w-[50%]  object-contain"
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <div className=" flex flex-col justify-between pb-10  pt-10 h-full">
                  <h4 className=" text-2xl">{card.title}</h4>
                  <p className="text-whiteGray text-sm xl:text  pr-20">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Splide
            options={{
              perPage: 1,
              gap: 20,
              pagination: true,
              arrows: false,
              rewind: true,
              rewindByDrag: true,
            }}
          >
            {Cards.map((card, index) => (
              <SplideSlide>
                <div
                  key={index}
                  className=" relative  flex flex-col  bg-grayDark rounded-3xl h-[220px]  shadow-card  ease-out duration-300 group"
                >
                  <div className="flex flex-col justify-between p-5 pb-7   h-full">
                    <h4 className="sm:text-xl text-md text-white ">
                      {card.title}
                    </h4>
                    <p className="text-whiteGray  text-[0.7rem] sm:text-[0.75rem] leading-6">
                      {card.text}
                    </p>
                  </div>
                  <div className=" bg-[rgba(30,30,30,0.4)] absolute top-3 right-4  lg:rounded-3xl rounded-2xl h-20 w-20 flex items-center justify-center  m-auto">
                    <img
                      className="duration-300 ease-out w-[50%]  object-contain"
                      src={card.img}
                      alt={card.title}
                    />
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </div>
  );
};
export default AboutUs;
const Cards = [
  {
    id: "1",
    title: "Conseil",
    text: "Écouter pour comprendre votre métier, vos objectifs, votre écosystème. C'est une étape indispensable pour être en mesure de proposer des solutions adéquates.",
    img: "./icon/operateur.png",
  },
  {
    id: "2",
    title: "Conception Digitale Axée Utilisateur",
    text: "Nous mettons les utilisateurs au centre de nos solutions digitales. Notre objectif : simplicité et facilité d'utilisation. Nos interfaces sont intuitives et performantes pour une expérience utilisateur agréable.",
    img: "./icon/conception-graphique.png",
  },
  {
    id: "3",
    title: "Choix technologiques",
    text: "Notre approche est pragmatique : nous sélectionnons les technologies les plus appropriées et les plus performantes aux besoins des projets et travaillons toujours sur-mesure.",
    img: "./icon/creation-de-sites-web.png",
  },
  {
    id: "4",
    title: "Hébergement & maintenance",
    text: "Nous gérons votre hébergement, couvrant le choix du cloud ou d'un serveur dédié, la sécurité, les réglementations et le budget. En cas de problème, notre équipe intervient rapidement pour assurer le bon fonctionnement.",
    img: "./icon/hebergement-web.png",
  },
];
