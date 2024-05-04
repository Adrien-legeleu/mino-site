import { useState } from "react";

const Select = () => {
  const [valueSelect, setValueSelect] = useState(String);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const selectOffer = (offer: string) => {
    setValueSelect(offer);
  };

  return (
    <div className="relative h-11 w-full min-w-[200px]">
      <button
        name="offre"
        className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white text-left outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100
        "
        onClick={() => setIsOpenOptions(!isOpenOptions)}
      >
        {" "}
        {valueSelect ? valueSelect : "Choisissez votre offre"}
      </button>
      <div
        className={`${
          isOpenOptions ? "opacity-100 visible" : "invisible opacity-0"
        }  duration-200 max-h-[200px] overflow-y-scroll bg-grayDark`}
      >
        {OptionsSelect.map((option, index) => {
          return (
            <div
              key={index}
              className="bg-grayDark text-white flex flex-col h-[100px] bg-grayDark"
              onClick={() => selectOffer(option.title)}
            >
              <h3>{option.title}</h3>
              <p className="text-whiteGray">{option.text}</p>
              <span>{option.price} €</span>
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
