import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";

const RouteSwitch = ({addOn, removeOn}) => {    
    return(
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shopPage" element={<ShopPage addOn={addOn} removeOn={removeOn} />} />
            </Routes>
    );
};

export default RouteSwitch;