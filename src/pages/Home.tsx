import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Offers from "../components/Offers";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <div className=" hidden md:block absolute rounded-[26px] h-[200px] w-[320px]  top-[80%] left-20 -rotate-6 shadow-2xl shadow-blackTransparent">
        <img className="rounded-[35px]" src="./screen-shot-site/lurex.netlify.app_(Nest Hub Max).png" alt="img site" />
      </div>
      <div className="absolute rounded-[35px] h-[200px] w-[300px]  top-[75%] md:top-[85%]  right-1/3 md:right-20 rotate-12 shadow-2xl shadow-blackTransparent">
        <img className="rounded-[35px] w-full h-full" src="./screen-shot-site/app-banque.netlify.app_(Nest Hub Max).png" alt="img site" />
      </div>
      <div className="h-full pt-10 flex items-center justify-center bg-grayLight z-10 ">
        <video
          className="w-[95%] aspect-video rounded-3xl z-10"
          autoPlay
          loop
          muted
          src="./Web Design Agency Promo Video - After Effects Template.mp4"
        ></video>
      </div>
      <AboutUs/>
      <Services/>
      <Offers/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
