import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export default function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>

            {deliveryOptions.map((deliveryOption) => {
                const priceString =
                    deliveryOption.priceCents > 0
                        ? `${formatMoney(deliveryOption.priceCents)} - Shipping`
                        : "FREE Shipping";

                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input
                            type="radio"
                            checked={
                                deliveryOption.id === cartItem.deliveryOptionId
                            }
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`}
                        />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(
                                    deliveryOption.estimatedDeliveryTimeMs
                                ).format("dddd, MMMM D")}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
