import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import "@splidejs/react-splide/css";
const Offers = () => {
  const [isListeAll, setIsListeAll] = useState(false);

  const lenghtListe = isListeAll ? listes : listes.slice(0, 3);
  const handleIsVisibleAllListe = () => {
    setIsListeAll(!isListeAll);
  };

  return (
    <div className="bg-grayLight">
      <div
        className="flex items-center justify-center flex-col pb-32 pt-36 h-full bg-grayLight gap-6 pl-5 sm:pl-20 sm:pr-20 pr-5 md:pr-0 md:pl-0  max-w-[1500px] m-auto"
        id="offre"
      >
        <h2 className="text-white text-5xl text-center mb-12">Nos offres</h2>
        <Splide
          options={{
            perPage:
              window.innerWidth < 1050 ? (window.innerWidth > 768 ? 2 : 1) : 3,
            gap: 20,
            pagination: false,
          }}
          className=" max-w-[95%]"
        >
          {offers.map((offer, index) => (
            <SplideSlide key={index}>
              <div
                className={`flex flex-col gap-6 mb-20 group relative ${
                  index === 3 ? "bg-[rgb(95,103,114)]" : "bg-[rgb(110,117,128)]"
                } lg:rounded-3xl md:rounded-2xl rounded-xl px-6 pt-8 ${
                  !isListeAll ? "h-[500px]" : "h-full"
                } overflow-x-hidden cursor-pointer `}
              >
                {index === 1 && (
                  <span className="  bg-[rgb(187,247,208)] text-[rgb(34,197,94)] text-xs  me-2 px-2.5 py-0.5 rounded   border border-[rgb(22,101,52)] absolute top-5 right-5">
                    Gratuit
                  </span>
                )}
                <h2 className="text-black capitalize text-center text-4xl">
                  {offer.title}
                </h2>
                <p className="text-black text-center">{offer.description}</p>
                <ul>
                  <li className="flex flex-row items-center justify-start gap-3 mt-2 mb-2">
                    <img className="h-6 " src="./icon/check.png" alt="valid" />
                    <p className="text-black">{listePage[index].desc}</p>
                  </li>

                  {lenghtListe.map((liste, index) => (
                    <li
                      className={`${
                        offer.features[index] ? "text-black " : "text-red-800"
                      } flex flex-row items-center justify-start gap-3 mt-2 mb-2`}
                      key={index}
                    >
                      <img
                        className="h-6 "
                        src={`${
                          offer.features[index]
                            ? "./icon/check.png"
                            : "./icon/close.png"
                        }`}
                        alt={`${
                          offer.features[index] ? "valide" : "non valide"
                        }`}
                      />
                      <p>{liste}</p>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 items-center justify-center">
                  <p
                    className="flex flex-row items-center justify-center text-center text-md gap-2"
                    onClick={handleIsVisibleAllListe}
                  >
                    <img
                      src="./icon/down.png"
                      alt="angle-down"
                      className={`${
                        isListeAll ? "transform rotate-180" : ""
                      } h-8 duration-300 ease-out`}
                    />{" "}
                    Voir plus
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="pt-3 pb-3 pl-5 pr-5 bg-green rounded-full">
                      Réservez
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span
                    className={`text-center text-4xl ${
                      index === 1 && "line-through"
                    }`}
                  >
                    {offer.price} €{" "}
                  </span>
                  {index === 1 && (
                    <span className="text-4xl mr-5 text-green">Gratuit</span>
                  )}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Offers;

const offers = [
  {
    title: "basic",
    description:
      "Offre la plus basique pour ceux qui ont besoin d'un site simple d'une seule page  mais désigner",
    features: [
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    price: "19",
  },
  {
    title: "avancé",
    description:
      "Une option plus avancée pour ceux qui ont besoin de fonctionnalités supplémentaires et d'un site web plus complexe.",
    features: [
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    price: "50",
  },
  {
    title: "pro",
    description:
      "Pour les entreprises sérieuses qui ont besoin d'une présence en ligne professionnelle avec des fonctionnalités avancées.",
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
    ],
    price: "69",
  },
  {
    title: "ultra",
    description:
      "Pour les entreprises haut de gamme qui exigent le meilleur en matière de présence en ligne et de fonctionnalités.",
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
    price: "99",
  },
];

const listePage = [
  {
    desc: "site web 1 page",
  },
  {
    desc: "site web 3 pages",
  },
  {
    desc: "site web 5 pages",
  },
  {
    desc: "site web 15 pages",
  },
];

const listes = [
  "Hébergement inclus",
  "maintenance du site mensuel",
  "Domaine personnalisé non inclus",
  "Support par e-mail uniquement",
  "Nom de domaine personnalisé inclus",
  "Support par e-mail et téléphone",
  "Moyen de contact (formulaire , envoi d'e-mail)",
  "maintenance du site régulière",
  "Support par e-mail, téléphone et chat en direct",
  "Optimisation pour les moteurs de recherche (SEO)",
  "Hébergement haut de gamme avec sauvegardes régulières",
  "Nom de domaine personnalisé inclus",
  "Support prioritaire 24/7",
  "Optimisation pour les moteurs de recherche (SEO) avancée",
  "E-commerce intégré avec des options de paiement sécurisées",
  "Analyse du site et rapports de performance réguliers",
];
