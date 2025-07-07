import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ margin: "20px" }}>
            <NavLink to="/">Home</NavLink>
            <br />
            <NavLink to="checkout">Checkout</NavLink>
            <br />
            <NavLink to="order">Orders</NavLink>
            <br />
            <NavLink to="tracking">Tracking</NavLink>
        </nav>
    );
}
