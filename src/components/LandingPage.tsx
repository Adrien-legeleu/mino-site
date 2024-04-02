const LandingPage = () => {
  return (
    <div className="h-screen w-full grid grid-cols-2  bg-grayLight"> 
      <div className=" pb-16 pl-8 flex items-end justify-start w-full h-full"  >
        <h2 className="text-8xl text-white">
             <span className="text-green">We make</span> <br /> digital <br /> [innovations]
        </h2>
      </div>
      <div className=" pr-8 pb-16 flex items-end justify-end w-full h-full bg-[url('../assets/Instagram Post Mockup Mosaic.png')] bg-cover">
        <p className="text-white text-lg">Agence Digitale surmesure. slogan...</p>
      </div>
    </div>
  );
};

export default LandingPage;
