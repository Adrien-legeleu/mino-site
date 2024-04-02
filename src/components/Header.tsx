import { useEffect, useState } from "react";

const Header = () => {
const [isHeader , setIsHeader]=useState(false)

let recentScroll=0

const scrollHeader=()=>{
    let currentScroll = window.scrollY
    if ( currentScroll-recentScroll > 0) {
        setIsHeader(true)
    }else{
        setIsHeader(false)
    }
    recentScroll=currentScroll        
    
}
useEffect(()=>{
    window.addEventListener("scroll" , scrollHeader)
},[])


  return (
    <div className={`z-50  h-20 w-full grid grid-cols-3 justify-between items-center fixed top-2 left-0 ease-in-out duration-200 ${isHeader ? "-translate-y-full" : "transform-none"}`} >
      <div className="flex items-center justify-start ml-24">
        <h1 className="text-white text-3xl tracking-wide">MINO</h1>
      </div>
      <ul className="flex items-center justify-evenly backdrop-blur-lg rounded-full pt-2 pb-2 ">
        <li className="text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-in-out">Offre</li>
        <li className="text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-in">Réalisations</li>
        <li className="text-white rounded-full hover:bg-blackTransparent pt-2 pb-2 pl-6 pr-6 cursor-pointer ease-out">Contact</li>
      </ul>
      <div className=" flex items-center justify-end mr-24 ">
        <button className="p-4 bg-green rounded-full">Une besoin ?</button>
      </div>
    </div>
  );
};

export default Header;
