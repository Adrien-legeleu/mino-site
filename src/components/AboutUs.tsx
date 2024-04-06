import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const AboutUs = () => {
  return (
    <div className="lg:grid lg:grid-cols-30/70 bg-grayLight pt-40 pl-8 pr-8 lg:pr-16 flex flex-col">
      <div className="flex flex-row items-start justify-start ">
        <div className="w-10 h-0.5 bg-white mr-3 relative top-2.5"></div>
        <h3 className="text-white">Pourquoi-nous ?</h3>
      </div>
      <div className="flex flex-col gap-32">
        <p className="text-white  tracking-wide leading-[40px] md:leading-[55px] indent-12 md:text-4xl text-xl  lg:text-3xl xl:text-5xl  mt-10 lg:m-0">
          Grâce à une expérience forte acquise par des centaines de projets,
          nous vous proposons un accompagnement complet, de la conception à la
          mise en œuvre opérationnelle.
        </p>
        {window.innerWidth > 700 ? (
          <div className="flex flex-col gap-4">
            {Cards.map((card, index) => (
              <div
                key={index}
                className=" relative grid grid-cols-2 bg-grayDark rounded-3xl h-[350px] shadow-card  hover:brightness-125 ease-out duration-300 group"
              >
                <div className="text-whiteGray flex flex-col justify-between p-10  h-full">
                  <h4 className="text-2xl">{card.title}</h4>
                  <p className="text-sm xl:text-xl">{card.text}</p>
                </div>
                <div className="w-full h-full flex items-center justify-center absolute w-[100px] h-[100px] top-3 right-4 relative">
                  <img
                    className="group-hover:scale-110 duration-300 ease-out w-[95%] h-[95%] object-contain"
                    src={card.img}
                    alt={card.title}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
                <Splide
                  options={{
                    perPage:1,
                    gap: 20,
                    pagination: false,
                  }}
                >
              {Cards.map((card, index) => (
                <SplideSlide>
                  <div
                    key={index}
                    className=" relative  flex flex-col bg-grayDark rounded-3xl h-[220px]  shadow-card  hover:brightness-110 ease-out duration-300 group"
                  >
                    <div className="text-whiteGray flex flex-col justify-between p-10  h-full">
                      <h4 className="sm:text-xl text-md ">{card.title}</h4>
                      <p className="text-sm sm:text-md ">{card.text}</p>
                    </div>
                    <div className=" flex items-center justify-center absolute w-[100px] h-[100px] top-3 right-4">
                      <img
                        className="group-hover:scale-110 duration-300 ease-out w-[95%] h-[95%] object-contain"
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
    img: "./image-3d/conseil.png",
  },
  {
    id: "2",
    title: "Conception Digitale Axée Utilisateur",
    text: "Nous mettons les utilisateurs au centre de nos solutions digitales. Notre objectif : simplicité et facilité d'utilisation. Nos interfaces sont intuitives et performantes pour une expérience utilisateur agréable.",
    img: "./image-3d/surmesure.png",
  },
  {
    id: "3",
    title: "Choix technologiques",
    text: "Notre approche est pragmatique : nous sélectionnons les technologies les plus appropriées et les plus performantes aux besoins des projets et travaillons toujours sur-mesure.",
    img: "./image-3d/performant.png",
  },
  {
    id: "4",
    title: "Hébergement & maintenance",
    text: "Nous gérons votre hébergement, couvrant le choix du cloud ou d'un serveur dédié, la sécurité, les réglementations et le budget. En cas de problème, notre équipe intervient rapidement pour assurer le bon fonctionnement.",
    img: "./image-3d/performant.png",
  },
];
