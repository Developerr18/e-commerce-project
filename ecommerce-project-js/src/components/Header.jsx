import { NavLink, useNavigate, useSearchParams } from "react-router";
import "./Header.css";
import whiteLogo from "../assets/images/logo-white.png";
import mobileWhiteLogo from "../assets/images/mobile-logo-white.png";
import cartIcon from "../assets/images/icons/cart-icon.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import { useState } from "react";

export default function Header({ cart }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("search");

    const [search, setSearch] = useState(searchText || "");

    // handle search-bar and 'search' button
    const updateSearchInput = (e) => {
        setSearch(e.target.value);
    };

    const searchProducts = () => {
        navigate(`/?search=${search}`);
    };

    // get total cart quantity
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo" src={whiteLogo} />
                    <img className="mobile-logo" src={mobileWhiteLogo} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={updateSearchInput}
                />

                <button className="search-button" onClick={searchProducts}>
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">
                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}
