import { useParams } from "react-router-dom";

export default function Details() {
    let urlParams = useParams();
    return (
        <div className="Details">
        <h1>Details</h1>
        <p>
            This is the details page.
            {urlParams.id}
        </p>
        </div>
    );
}