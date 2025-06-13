import Header from "../components/Header";

export default function ErrorPage({ cart }) {
    return (
        <>
            <Header cart={cart} />
            <h2 className="not-found-page">Page not found</h2>
        </>
    );
}
