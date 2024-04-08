import { useState } from "react";
import Form from "./Form";

const Contact = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [selectDesc, setSelectDesc] = useState(null);

  const handleFormOpen = (desc: any) => {
    setSelectDesc(desc);
    setIsVisibleForm(true);
  };

  return (
    <div className="bg-grayLight shadow-contact_shadow pt-48 flex flex-col lg:grid lg:grid-cols-30/70 pl-4 pr-4 md:pl-10 md:pr-10 pb-32" id="contact">
      <div className="flex items-start">
        <div className="flex gap-2 items-center">
          <div className="h-[1px] w-16 bg-white rounded-full"></div>
          <h5 className="text-white ">Contact</h5>
        </div>
      </div>
      <div>
        <h2 className="text-green lg:text-6xl md:text-5xl sm:text-4xl text-3xl mt-16 lg:m-0  mb-2">Contactez-nous !</h2>
        <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-16 text-white leading-tight">
          Nous sommes toujours en quête de nouveautés et de nouvelles
          rencontres.
        </p>
        {contactText.map((desc, index) => (
          <div
            className="grid grid-cols-90/10 gap-2 lg:gap-0 md:p-10 p-5 pt-10 pb-10 h-48 w-full bg-grayDark justify-center rounded-3xl group relative mb-4"
            key={index}
          >
            <div className="bg-[rgb(95,103,114)] opacity-0 rounded-3xl w-full h-full absolute top-0 left-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
            <div className="grid grid-cols-20/80 gap-4 md:gap-8 group-hover:translate-x-5 duration-500 ease-in-out z-10 items-center">
              <div className="bg-[rgba(30,30,30,0.4)] lg:rounded-3xl rounded-2xl h-[70%] w-full flex items-center justify-center ">
                <img
                  className="w-[50%]"
                  src={desc.icon}
                  alt={`icon : ${index}`}
                />
              </div>
              <div className="flex items-center ">
                <p className="text-whiteGray text-md sm:text-xl md:text-3xl ">{desc.text}</p>
              </div>
            </div>
            <div className="flex items-center justify-end z-10">
              <button
                className="bg-green pt-3 pb-3 pr-5 pl-5 rounded-full lg:opacity-0 lg:translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out hover:brightness-90 hover:scale-110 "
                onClick={() => handleFormOpen(desc)}
              >
                <img
                  className="w-4"
                  src="./icon/right-arrow.png"
                  alt="right arrow"
                />
              </button>
            </div>
            {isVisibleForm && selectDesc && (
              <Form
                setIsVisibleForm={setIsVisibleForm}
                isVisibleForm={isVisibleForm}
                desc={selectDesc}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contact;

const contactText = [
  {
    text: "J'ai un projet précis, je souhaite obtenir un devis.",
    text2: "Vous avez déja une idéé et des informations ?",
    under_text2:
      "Écrivez-nous pour prendre contact, nous allons échanger sur votre besoin et le chiffrer.",
    icon: "./icon/file (1).png",
  },
  {
    text: "J'ai besoin de plus d'informations sur Mino.",
    text2: "Des questions à nous poser ?",
    under_text2:
      "Posez-nous votre question , nous vous répondrons dans le plus de détails",
    icon: "./icon/info.png",
  },
  {
    text: "Votre agence m'intéresse et je souhaite postuler.",
    text2: "Notre agence vous intéresse ?",
    under_text2:
      "Très bon choix, vous pouvez nous contacter directement ci-dessous.",
    icon: "./icon/user.png",
  },
];
