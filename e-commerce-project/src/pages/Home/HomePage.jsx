import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export default function HomePage({ cart, fetchCartData }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeProductsData = async () => {
            const response = await axios.get("/api/products");
            setProducts(response.data);
        };

        getHomeProductsData();
    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid
                    products={products}
                    fetchCartData={fetchCartData}
                />
            </div>
        </>
    );
}
