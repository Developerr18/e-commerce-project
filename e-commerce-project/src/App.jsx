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

    const fetchCartData = async () => {
        const response = await axios.get("/api/cart-items?expand=product");
        setCart(response.data);
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    return (
        <Routes>
            <Route
                index
                element={<HomePage cart={cart} fetchCartData={fetchCartData} />}
            />
            <Route path="checkout" element={<CheckoutPage cart={cart} />} />
            <Route path="orders" element={<OrdersPage cart={cart} />} />
            <Route
                path="tracking/:orderId/:productId"
                element={<TrackingPage cart={cart} />}
            />
            <Route path="*" element={<ErrorPage cart={cart} />} />
        </Routes>
    );
}

export default App;
