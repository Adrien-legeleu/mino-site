import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Select from "../Shared/Select";
import "dotenv/config";

interface FormProps {
  isVisibleForm: boolean;
  setIsVisibleForm: React.Dispatch<React.SetStateAction<boolean>>;
  desc: {
    text: string;
    text2: string;
    under_text2: string;
    icon: string;
    id: string;
  };
}

const Form: React.FC<FormProps> = ({
  isVisibleForm,
  setIsVisibleForm,
  desc,
}) => {
  const form = useRef<HTMLFormElement>(null);

  const closeForm = () => {
    setIsVisibleForm(false);
  };
  require("dotenv").config();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  console.log(serviceId, templateId);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);

    if (form.current) {
      emailjs
        .sendForm("eee", "templateId", form.current, {
          publicKey: "pWAcAsrQSZclcV8NK",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Email envoyé !");
          },
          (error: any) => {
            console.log("FAILED...", error.text);
            toast.error("Aie , réessayer!");
          }
        );
    } else {
      console.error("La référence form.current est undefined.");
    }
  };

  return (
    <div>
      <div
        className={`h-screen w-screen fixed top-0 left-0  z-[100] duration-500 ease-in-out ${
          isVisibleForm ? "visible" : "invisible"
        }`}
      >
        <div
          className={`h-full w-full bg-[rgba(0,0,0,0.14)] backdrop-blur-md duration-300 ease-in-out ${
            isVisibleForm ? " opacity-100 " : " opacity-0 "
          }`}
          onClick={closeForm}
        ></div>
        <div
          className={`h-[95%] lg:w-[45%] md:w-[70%] w-[100%] bg-grayDark absolute top-1/2 md:right-10   rounded-3xl -translate-y-1/2 flex flex-col pb-20 pt-24 pl-16 pr-16 shadow-containerService duration-500 ease-in-out overflow-y-auto ${
            isVisibleForm ? "translate-x-0" : "translate-x-[150%] right-0"
          }`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "green",
          }}
        >
          <div
            className="absolute top-10 right-10 w-14 p-2 cursor-pointer hover:scale-110 duration-300 ease-in-out brightness-125"
            onClick={closeForm}
          >
            <img className="w-full" src="./icon/close-white.png" alt="fermer" />
          </div>
          <div className="bg-[rgba(30,30,30,0.4)] rounded-3xl flex min-h-24 min-w-24 w-24 items-center justify-center mb-8">
            <img className="w-14" src={desc.icon} alt="icon" />
          </div>
          <div className=" mb-10 flex flex-col gap-4">
            <p className="text-2xl text-white">{desc.text2}</p>
            <p className="text-whiteGray">{desc.under_text2}</p>
          </div>
          <div>
            <p className="text-end text-white">* champs obligatoires</p>
          </div>
          <form
            className="mt-16 flex flex-col gap-8"
            ref={form}
            onSubmit={(e) => sendEmail(e)}
          >
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="firstname"
                required
                placeholder="Standard"
                className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-whiteGray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green peer-focus:after:scale-x-100 peer-focus:after:border-green peer-focus:after:rounded-full peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white duration-300 ease-in-out">
                Prénom
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="name"
                placeholder="Standard"
                className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-whiteGray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green peer-focus:after:scale-x-100 peer-focus:after:border-green peer-focus:after:rounded-full peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white duration-300 ease-in-out">
                Nom
              </label>
            </div>
            {desc.id === "1" && <Select />}
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                placeholder="Standard"
                name="society"
                className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-whiteGray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green peer-focus:after:scale-x-100 peer-focus:after:border-green peer-focus:after:rounded-full peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white duration-300 ease-in-out">
                Société
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                required
                name="email"
                autoComplete="email"
                placeholder="Standard"
                className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-whiteGray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green peer-focus:after:scale-x-100 peer-focus:after:border-green peer-focus:after:rounded-full peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white duration-300 ease-in-out">
                Email *
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="tel"
                required
                name="tel"
                autoComplete="tel"
                placeholder="Standard"
                className="peer h-full w-full border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-whiteGra focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-whiteGray placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-whiteGray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green peer-focus:after:scale-x-100 peer-focus:after:border-green peer-focus:after:rounded-full peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white duration-300 ease-in-out">
                Téléphone
              </label>
            </div>
            <div className="relative w-full min-w-[200px]">
              <textarea
                className="peer h-full min-h-[80px] w-full resize-none border-b border-whiteGray bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-whiteGray focus:border-grayWhite focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-whiteGray"
                placeholder=""
                required
                name="message"
              ></textarea>
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2  after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-whiteGray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green peer-focus:after:scale-x-100 peer-focus:after:border-green peer-focus:after:rounded-full peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-whiteGray duration-300 ease-in-out">
                Message
              </label>
            </div>
            <div className=" mt-8">
              <button className=" w-full bg-green p-3 rounded-full text-xl hover:scale-90 duration-300 ease-in-out hover:brightness-90">
                Valider & envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
