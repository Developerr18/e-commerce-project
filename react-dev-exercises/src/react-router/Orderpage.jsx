import { useNavigate } from "react-router-dom";

export default function Orderpage() {
    const navigate = useNavigate();

    return (
        <div>
            <div>This is order page</div>;
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
}
