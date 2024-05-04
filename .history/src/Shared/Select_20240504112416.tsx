import { useState } from "react";

const Select = () => {
  const [valueSelect, setValueSelect] = useState(String);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const selectOffer = (offer) => {
    setValueSelect(offer);
  };

  return (
    <div className="relative h-11 w-full min-w-[200px]">
      <button
        name="offre"
        className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100"
      >
        {" "}
        {valueSelect ? valueSelect : "choisissez votre offre"}
      </button>
      <div className="invisible">
        {OptionsSelect.map((option, index) => {
          return (
            <div
              key={index}
              className="bg-grayDark text-white"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr", // Une colonne
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
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
