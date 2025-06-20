import axios from "axios";
import buyAgainIcon from "../../assets/images/icons/buy-again.png";
import dayjs from "dayjs";
import { Fragment } from "react";

export default function OrderDetailsGrid({ order, loadCart }) {
    return (
        <div className="order-details-grid">
            {order.products.map((orderProduct) => {
                const handleBuyAgain = async () => {
                    await axios.post("/api/cart-items", {
                        productId: orderProduct.productId,
                        quantity: 1,
                    });
                    await loadCart();
                };

                return (
                    <Fragment key={orderProduct.productId}>
                        <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on:{" "}
                                {dayjs(
                                    orderProduct.estimatedDeliveryTimeMs
                                ).format("MMMM D")}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.quantity}
                            </div>
                            <button
                                className="buy-again-button button-primary"
                                onClick={handleBuyAgain}
                            >
                                <img
                                    className="buy-again-icon"
                                    src={buyAgainIcon}
                                />
                                <span className="buy-again-message">
                                    Add to Cart
                                </span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <a
                                href={`/tracking/${order.id}/${orderProduct.product.id}`}
                            >
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </a>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
}
