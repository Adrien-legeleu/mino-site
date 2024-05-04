import { useState } from "react";
import Banner from "./Banner";

const Select = () => {
  const [valueSelect, setValueSelect] = useState(String);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const closeOptions = () => {
    setIsOpenOptions(false);
  };

  const selectOffer = (offer: string) => {
    setValueSelect(offer);
    closeOptions();
  };

  return (
    <div className=" h-11 w-full min-w-[200px] z-10">
      {isOpenOptions && (
        <div className="w-screen h-screen bg-white fixed bottom-1/2 left-0"></div>
      )}
      <button
        name="offre"
        className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white text-left outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100
        "
        onClick={() => setIsOpenOptions(!isOpenOptions)}
      >
        {" "}
        {valueSelect
          ? "Votre offre :" + " " + valueSelect
          : "Choisissez votre offre"}
      </button>
      <div
        className={`${
          isOpenOptions ? "opacity-100 visible" : "invisible opacity-0"
        }  duration-200 max-h-[300px] overflow-y-scroll bg-grayLight lg:rounded-3xl  rounded-2xl flex flex-col`}
        style={{ scrollbarWidth: "none" }}
      >
        {OptionsSelect.map((option, index) => {
          return (
            <div
              key={index}
              className=" py-5 px-3  text-white flex flex-col  hover:bg-[rgb(95,103,114)]  duration-200 cursor-pointer relative"
              onClick={() => selectOffer(option.title)}
            >
              {index === 1 && <Banner text="gratuit" />}
              {index === 2 && <Banner text="recommandé" />}
              {index === 4 && <Banner text="personnalisé" />}
              <h3>{option.title}</h3>
              <p className="text-whiteGray py-2">{option.text}</p>
              <span className={`text-end ${index === 1 && "line-through"}`}>
                {" "}
                {option.price} €
              </span>
              {index === 1 && <span className="text-end">Gratuit !</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Select;

const OptionsSelect = [
  {
    title: "Basic",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime iusto est nobis!",
    price: "19",
  },
  {
    title: "Advanced",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime iusto est nobis!",
    price: "50",
  },
  {
    title: "Pro",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime iusto est nobis!",
    price: "69",
  },
  {
    title: "Ultra",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime iusto est nobis!",
    price: "99",
  },
  {
    title: "Basic",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime iusto est nobis!",
    price: "A voir",
  },
];
