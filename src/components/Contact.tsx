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
    <div className="bg-grayLight shadow-contact_shadow pt-48 grid grid-cols-30/70 pl-10 pr-10 pb-32" id="contact">
      <div className="flex items-start">
        <div className="flex gap-2 items-center">
          <div className="h-[1px] w-16 bg-white rounded-full"></div>
          <h5 className="text-white">Contact</h5>
        </div>
      </div>
      <div>
        <h2 className="text-green text-6xl  mb-2">Contactez-nous !</h2>
        <p className="text-5xl mb-16 text-white leading-tight">
          Nous sommes toujours en quête de nouveautés et de nouvelles
          rencontres.
        </p>
        {contactText.map((desc, index) => (
          <div
            className="grid grid-cols-90/10 p-10 h-48 w-full bg-grayDark justify-center rounded-3xl group relative mb-4"
            key={index}
          >
            <div className="bg-[rgb(95,103,114)] opacity-0 rounded-3xl w-full h-full absolute top-0 left-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
            <div className="grid grid-cols-20/80 gap-8 group-hover:translate-x-5 duration-500 ease-in-out z-10">
              <div className="bg-[rgba(30,30,30,0.4)] rounded-3xl h-full w-full flex items-center justify-center ">
                <img
                  className="w-2/3"
                  src={desc.icon}
                  alt={`icon : ${index}`}
                />
              </div>
              <div className="flex items-center ">
                <p className="text-whiteGray text-3xl ">{desc.text}</p>
              </div>
            </div>
            <div className="flex items-center justify-end z-10">
              <button
                className="bg-green pt-3 pb-3 pr-5 pl-5 rounded-full opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out hover:brightness-90 hover:scale-110 "
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
