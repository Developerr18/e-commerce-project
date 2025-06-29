import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";
import "./HomePage.css";

export default function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");

    useEffect(() => {
        const getHomeProductsData = async () => {
            const urlPath = search
                ? `/api/products?search=${search}`
                : "/api/products";
            const response = await axios.get(urlPath);
            setProducts(response.data);
        };

        getHomeProductsData();
    }, [search]);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}
