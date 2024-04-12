import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Realisation =()=>{
    return (
        <div className="bg-white">
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-500 to-white"></div>
            <Header/>
            <div className=" p-12 relative">
                <h1 className="mt-10 text-center text-6xl text-black">Nos Réalisations</h1>
            <p className="text-center max-w-[1100px] m-auto mt-20 text-black text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet accusamus a sapiente, cupiditate libero exercitationem, eligendi voluptatem ipsum minima officia</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-8 pl-3 pr-3 md:pl-10 md:pr-10 pb-32">
                {
                    ScreenShotSite.map((site , index)=>(
                        <div className={`relative group rounded-3xl overflow-hidden mt-20 shadow-xl shadow-[rgba(0,0,0,0.3)]`} style={{ transform: `translateY(${Math.random()*90+5 + "px"})`}} key={`site numéro : ${index}`}>
                            <div className="absolute w-full h-full top-0 left-0 z-10 rounded-3xl backdrop-blur-[2px] bg-[rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 duration-300 ease-in-out"></div>
                            <img className="rounded-3xl group-hover:scale-110 duration-300 ease-out objectif-cover" src={site.img} alt={site.title} />
                            <div className="absolute z-20 flex flex-col items-center jusitfy-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 invisible opacity-0 group-hover:opacity-100 group-hover:visible duration-300 ease-out">
                                <h4 className="text-sm md:text-xl  lg:text-2xl text-white text-center">
                                    {site.title}
                                </h4>
                                <Link className="text-whiteGray text-[0.8rem] md:text-[1rem] lg:text-lg" to={site.url} target="_blank">Visiter le site</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Realisation

const ScreenShotSite=[
    {
        title:"Lurex",
        img:"./screen-shot-site/lurex.netlify.app_(Nest Hub Max).png",
        url:"https://lurex.netlify.app"
    },
    {
        title:"Ultralight",
        img:"./screen-shot-site/ultralight-cycling.netlify.app_(Nest Hub Max).png",
        url:"https://ultralight-cycling.netlify.app"
    },
    {
        title:"Ty Klouyou",
        img:"./screen-shot-site/villa-tyklouyou.netlify.app_(Nest Hub Max).png",
        url:"https://villa-tyklouyou.netlify.app"
    },
    {
        title:"AppBank",
        img:"public/screen-shot-site/app-banque.netlify.app_(Nest Hub Max).png",
        url:"https://app-banque.netlify.app"
    },
    {
        title:"Crypto watch",
        img:"./screen-shot-site/tower-watch.netlify.app_(Nest Hub Max).png",
        url:"https://tower-watch.netlify.app"
    },
    {
        title:"La Montagne",
        img:"./screen-shot-site/l-montagne.netlify.app_(Nest Hub Max) (1).png",
        url:"https://l-montagne.netlify.app"
    },
    {
        title:"Le resto",
        img:"public/screen-shot-site/6614180db57c0210e3c0a99b--verdant-snickerdoodle-8aa581.netlify.app_(Nest Hub Max).png",
        url:"https://le-resto.netlify.app"
    },
    {
        title:"MINO AI",
        img:"",
        url:"https://mino-ai.netlify.app"
    },
    {
        title:"",
        img:"",
        url:"",
    },
    
]