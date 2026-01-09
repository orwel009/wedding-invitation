import Countdown from "../components/Countdown";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import OurStory from "../components/OurStory";
import RSVP from "../components/RSVP";
import WeddingDetails from "../components/WeddingDetails";


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WeddingDetails/>
      <OurStory/>
      <Gallery/>
      <Location/>
      <Countdown/>
      <RSVP/>
      <Footer/>
    </>
  );
};

export default Home;