const Footer =()=>{
    return(
        <div className="bg-grayLight grid grid-cols-30/70 pt-5 pb-16">
            <div>
                <h2>MINO</h2>
            </div>
            <div className="grid grid-cols-3 ">
                <div className="flex items-center justify-center">
                    <div>
                        <h3>Offres</h3>
                    <ul>
                        <li>Basic</li>
                        <li>Advanced</li>
                        <li>Pro</li>
                        <li>Ultra</li>
                    </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <h3>Spécialités</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Site vitrine</li>
                        <li>Hébergement</li>
                        <li>E-commerce</li>
                    </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <h3>A propos de Mino</h3>
                    <ul>
                        <li>Entreprise française</li>
                        <li>Rejoignez-nous</li>
                        <li>Mentions légales</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer