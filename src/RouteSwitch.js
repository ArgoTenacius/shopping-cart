import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shopPage" element={<ShopPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;