import { Typewriter } from "react-simple-typewriter";

const LandingPage = () => {

  return (
    <div className="h-screen w-full grid lg:grid-cols-2 bg-[url('../src/assets/Untitled.svg')] bg-cover z-10">
      <div className="pb-16 pl-8 flex items-end justify-start w-full h-full">
        <h2 className="lg:text-7xl xl:text-8xl 2xl:text-9xl text-[3.4rem] md:text-7xl text-white z-10">
          <span className="text-green">We make</span> <br /> digital <br />{" "}
         [ <Typewriter  words={['innovations', 'products', 'great again' , "strategy"]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />]
        </h2>
      </div>
      <div className="pr-8 pb-16 flex items-end justify-end w-full h-full ">
        <p className="text-white lg:text-lg text-xl sm:text-2xl z-10 backdrop-blur-[3px]">
          Agence Digitale surmesure. slogan...
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
