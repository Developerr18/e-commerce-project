import Header from "../../components/Header";
import { Link, useParams } from "react-router";
import "./TrackingPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function TrackingPage({ cart }) {
    const [order, setOrder] = useState(null);
    const { orderId, productId } = useParams();

    useEffect(() => {
        const fetchTrackingPageData = async () => {
            const response = await axios.get(
                `/api/orders/${orderId}?expand=products`
            );
            setOrder(response.data);
        };

        fetchTrackingPageData();
    }, [orderId]);

    if (!order) return null;

    // get selected product tracking
    const trackingProduct = order.products.find(
        (product) => product.productId === productId
    );

    ///////////////////////////////////////
    // const currentTime = Date.now().toLocaleString();
    // const tomorrow = Date.now() + 1 * 24 * 60 * 60 * 1000;
    // const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    // const weekLater = Date.now() + 7 * 24 * 60 * 60 * 1000;

    // const totalDeliveryTimeMs = tomorrow - weekAgo;
    // const timePassedMs = currentTime - weekAgo;

    // get delivery progress time
    const totalDeliveryTimeMs =
        trackingProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 1000;

    // delivery status
    const isPreparing = deliveryPercent < 33;
    const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
    const isDelivered = deliveryPercent === 100;

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
            <title>Tracking</title>

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link
                        className="back-to-orders-link link-primary"
                        to="/orders"
                    >
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        {deliveryPercent >= 100
                            ? "Delivered on "
                            : "Arriving on "}
                        {dayjs(trackingProduct.estimatedDeliveryTimeMs).format(
                            "dddd, MMMM D"
                        )}
                    </div>

                    <div className="product-info">
                        {trackingProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {trackingProduct.quantity}
                    </div>

                    <img
                        className="product-image"
                        src={trackingProduct.product.image}
                    />

                    <div className="progress-labels-container">
                        <div
                            className={`progress-label ${
                                isPreparing && "current-status"
                            }`}
                        >
                            Preparing
                        </div>
                        <div
                            className={`progress-label ${
                                isShipped && "current-status"
                            }`}
                        >
                            Shipped
                        </div>
                        <div
                            className={`progress-label ${
                                isDelivered && "current-status"
                            }`}
                        >
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${deliveryPercent}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}
