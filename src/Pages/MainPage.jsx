import AboutSection from "../Components/AboutSection/AboutSection";
import MainImageSlider from "../Components/MainImageSlider/MainImageSlider";
import ContactTile from "../Components/ContactTile/ContactTile";
import MiniSlider from "../Components/MiniSlider/MiniSlider";
import Footer from "../Components/Footer/Footer";
import ProductsOverview from "../Components/ProductsOverview/ProductsOverview";
import GoogleMap from "../Components/GoogleMap/GoogleMap";

const MainPage = () => {
  return (
    <div className="full-height full-width">
      <MainImageSlider />
      <AboutSection />
      <ProductsOverview />
      <ContactTile />
      <GoogleMap />
      <Footer />
    </div>
  );
};

export default MainPage;
