import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
import checkmarkIcon from "../../assets/images/icons/checkmark.png";

export default function Product({ product, loadCart }) {
    const [quantity, setQuantity] = useState(1);
    const [showAddedMsg, setShowAddedMsg] = useState(false);

    const addToCart = async () => {
        await axios.post("/api/cart-items", {
            productId: product.id,
            quantity,
        });
        await loadCart();
        setShowAddedMsg(true);

        setTimeout(() => {
            setShowAddedMsg(false);
        }, 2000);
    };

    const selectQuantity = (e) => {
        const selectedQuantity = Number(e.target.value);
        setQuantity(selectedQuantity);
    };

    return (
        <div className="product-container">
            <div className="product-image-container">
                <img
                    className="product-image"
                    src={product.image}
                    data-testid="product-image"
                />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img
                    className="product-rating-stars"
                    data-testid="product-rating-stars-images"
                    src={`images/ratings/rating-${
                        product.rating.stars * 10
                    }.png`}
                />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {formatMoney(product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select value={quantity} onChange={selectQuantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div
                className="added-to-cart"
                style={{ opacity: showAddedMsg ? 1 : 0 }}
            >
                <img src={checkmarkIcon} />
                Added
            </div>

            <button
                className="add-to-cart-button button-primary"
                onClick={addToCart}
                data-testid="add-to-cart-button"
            >
                Add to Cart
            </button>
        </div>
    );
}
