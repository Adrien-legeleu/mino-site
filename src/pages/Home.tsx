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
      <div className="h-screen w-full flex items-center justify-center bg-grayLight ">
        <video
          className="w-auto h-[100%] aspect-video rounded-3xl"
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
