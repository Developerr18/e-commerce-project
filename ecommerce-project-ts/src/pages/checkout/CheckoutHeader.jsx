import { Link } from "react-router";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo.png";
import checkoutLockIcon from "../../assets/images/icons/checkout-lock-icon.png";

export default function CheckoutHeader({ cart }) {
    const cartQuantity = cart.reduce((total, cartItem) => {
        return total + cartItem.quantity;
    }, 0);

    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src={logo} />
                        <img className="mobile-logo" src={mobileLogo} />
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (
                    <Link className="return-to-home-link" to="/">
                        {cartQuantity} items
                    </Link>
                    )
                </div>

                <div className="checkout-header-right-section">
                    <img src={checkoutLockIcon} />
                </div>
            </div>
        </div>
    );
}
