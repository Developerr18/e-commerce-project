import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import axios from "axios";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios
            .get("/api/cart-items?expand=product")
            .then((response) => setCart(response.data));
    }, []);

    return (
        <Routes>
            <Route index element={<HomePage cart={cart} />} />
            <Route path="checkout" element={<CheckoutPage cart={cart} />} />
            <Route path="orders" element={<OrdersPage cart={cart} />} />
            <Route path="tracking" element={<TrackingPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
