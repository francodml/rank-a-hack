import './styles/details.scss';
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useGetHackathonQuery } from "../redux/mainAPI";
import Developers from "../components/developers";

export default function Details() {
    let urlParams = useParams();
    const { data, loading, error } = useGetHackathonQuery(urlParams.id);

    if (error){
        return (
            <Navigate to="/" />
        )
    }

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        data ? 
            <div className="Details">
                <p className="title">{data.name}</p>
                <p className="description">
                    {data.description}
                </p>
                <div className="entries">
                    <Developers hackathonId={data.id} />
                </div>
            </div>
         : null
    );
}