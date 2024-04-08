const Footer = () => {
  return (
    <div className="bg-grayLight flex flex-col gap-16 lg:gap-0 lg:grid lg:grid-cols-30/70 pt-5 pb-16">
      <div className="text-5xl text-white flex items-center justify-center">
        <h2>MINO</h2>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2  ">
        <div className="flex items-center justify-start sm:justify-center ml-5 sm:m-0">
          <div>
            <h3 className="text-white text-lg sm:text-xl mb-4">
              A propos de Mino
            </h3>
            <ul>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="">Entreprise française</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#contact">Rejoignez-nous</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="">Mentions légales</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-end sm:justify-center mr-10 sm:m-0">
          <div>
            <h3 className="text-white text-lg sm:text-xl mb-4">Offres</h3>
            <ul>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#offre">Basic</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#offre">Advanced</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#offre">Pro</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#offre">Ultra</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-start sm:justify-center ml-5 mt-5 sm:m-0">
          <div>
            <h3 className="text-white text-lg sm:text-xl mb-4">Spécialités</h3>
            <ul>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#service">Blog</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#service">Site vitrine</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                {" "}
                <a href="#service">Hébergement</a>
              </li>
              <li className="text-whiteGray text-sm sm:text-md hover:scale-110 hover:translate-x-2 duration-300">
                <a href="#service">E-commerce</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-center justify-end sm:justify-center mr-10 mt-6 sm:mt-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-green text-lg text-center sm:text-xl">Votre premier site web <strong className="text-green text-xl sm:text-2xl inline-block">GRATUIT</strong> !</h2>
            <button className="pb-3 pt-3 pl-5 pr-5 bg-green rounded-full"><a href="#offre">C'est gratuit !</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
