const Footer =()=>{
    return(
        <div className="bg-grayLight flex flex-col gap-16 lg:gap-0 lg:grid lg:grid-cols-30/70 pt-5 pb-16">
            <div className="text-5xl text-white flex items-center justify-center">
                <h2>MINO</h2>
            </div>
            <div className="grid grid-cols-3 ">
                <div className="flex items-center justify-center">
                    <div>
                        <h3 className="text-white text-xl mb-4">Offres</h3>
                    <ul>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#offre">Basic</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#offre">Advanced</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#offre">Pro</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#offre">Ultra</a></li>
                    </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <h3 className="text-white text-xl mb-4">Spécialités</h3>
                    <ul>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#service">Blog</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#service">Site vitrine</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"> <a href="#service">Hébergement</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#service">E-commerce</a></li>
                    </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <h3 className="text-white text-xl mb-4">A propos de Mino</h3>
                    <ul>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="">Entreprise française</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#contact">Rejoignez-nous</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="">Mentions légales</a></li>
                        <li className="text-whiteGray hover:scale-110 hover:translate-x-2 duration-300"><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer