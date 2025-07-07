import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductsGrid from "./Productsgrid";
import Checkout from "./Checkoutpage";
import Orderpage from "./Orderpage";
import Tracking from "./Trackingpage";

export default function Homepage() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductsGrid />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order" element={<Orderpage />} />
                <Route path="tracking" element={<Tracking />} />
            </Routes>
        </BrowserRouter>
    );
}
