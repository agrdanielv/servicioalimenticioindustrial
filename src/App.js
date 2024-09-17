import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header";
import MainMenu from "./Components/MainMenu/MainMenu";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import whatsapp from "./assets/whatsapp.png";

function App() {
  return (
    <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="whatsapp-bubble">
          <a href="http://wa.me/+523334888873" target="_blank">
            <img src={whatsapp} alt="whatsapp" className="whatsapp-bubble-btn"></img>
          </a>
        </div>
        <MainMenu />
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/catalog/:category" element={<ProductPage />}/>
          <Route path="/subcatalog/:subcategory" element={<ProductPage />}/>
          <Route path="/details/:productId" element={<DetailsPage />}/>
          <Route path="/contact" element={<ContactUsPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
