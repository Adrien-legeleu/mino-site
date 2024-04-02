import { useState } from "react";
import Form from "./Form";

const Contact = () => {

    const [isVisibleForm , setIsVisibleForm] =useState(false)
    const openForm=()=>{
        setIsVisibleForm(true)
    }

  return (
    <div className="bg-grayLight shadow-contact_shadow pt-48 grid grid-cols-30/70 pl-10 pr-10 pb-32">
      <div className="flex items-start">
        <div className="flex gap-2 items-center">
          <div className="h-[1px] w-16 bg-white rounded-full"></div>
          <h5 className="text-white">Contact</h5>
        </div>
      </div>
      <div>
        <h2 className="text-green text-6xl  mb-2">
          Contactez-nous !
        </h2>
        <p className="text-5xl mb-16 text-white leading-tight">Nous sommes toujours en quête de nouveautés et de nouvelles rencontres.</p>
        {contactText.map((desc, index) => (
          <div
            className="grid grid-cols-90/10 p-10 h-48 w-full bg-grayDark  justify-center rounded-3xl group relative mb-4"
            key={index}
          >
            <div className="bg-[rgb(95,103,114)] opacity-0 rounded-3xl w-full h-full absolute top-0 left-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
            <div className="grid grid-cols-20/80 gap-8 group-hover:translate-x-5 duration-500 ease-in-out z-10">
              <div className="bg-[rgba(30,30,30,0.4)] rounded-3xl h-full w-full flex items-center justify-center ">
                <img className="w-2/3" src={desc.icon} alt={`icon : ${index}`} />
              </div>
              <div className="flex items-center ">
                <p className="text-whiteGray text-3xl ">
                  {desc.text}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end z-10">
              <button className="bg-green  pt-3 pb-3 pr-5 pl-5 rounded-full opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out hover:brightness-90 hover:scale-110 duration-500 ease-in-out" onClick={openForm}>
                <img
                  className="w-4"
                  src="./icon/right-arrow.png"
                  alt="right arrow"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Form setIsVisibleForm={setIsVisibleForm} isVisibleForm={isVisibleForm}/>
    </div>
  );
};
export default Contact;

const contactText = [
  {
    text: "J'ai un projet précis, je souhaite obtenir un devis.",
    icon:"./icon/file (1).png"
  },
  {
    text: "J'ai besoin de plus d'informations sur Mino.",
    icon:"./icon/info.png"
  },
  {
    text: "Votre agence m'intéresse et je souhaite postuler.",
    icon:"./icon/user.png"
  },
];
