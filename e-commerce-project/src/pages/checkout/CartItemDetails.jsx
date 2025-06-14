import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export default function CartItemDetails({ cartItem, loadCart }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const handleUpdateLink = async () => {
        if (isUpdating) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity),
            });
            await loadCart();
        }

        setIsUpdating(!isUpdating);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleUpdateLink();
        } else if (e.key === "Escape") {
            setQuantity(cartItem.quantity);
            setIsUpdating(false);
        }
    };

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    return (
        <>
            <img className="product-image" src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">{cartItem.product.name}</div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity:{" "}
                        {isUpdating ? (
                            <input
                                type="text"
                                className="update-input-quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        ) : (
                            <span className="quantity-label">
                                {cartItem.quantity}
                            </span>
                        )}
                    </span>
                    <span
                        className="update-quantity-link link-primary"
                        onClick={handleUpdateLink}
                    >
                        {isUpdating ? "Save" : "Update"}
                    </span>
                    <span
                        className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}
