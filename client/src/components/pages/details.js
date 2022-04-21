import styles from './styles/details.module.scss';
import { useParams, Navigate } from "react-router-dom";
import { useGetHackathonQuery } from "../../redux/mainAPI";
import DevelopmentRanking from '../developmentranking';

export default function Details() {
    let urlParams = useParams();
    const { data, loading, error } = useGetHackathonQuery(urlParams.id); //No way to pass the hackathon directly to the page with React Router :\

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

    if (data)
    {    const formattedDate = new Date(data.startDate).toLocaleDateString("es-AR");

        return (
            data ? 
                <div className={styles.Details}>
                    <p className={styles.title}>{data.name}</p>
                    <p className={styles.subtitle}>{formattedDate} - {data.location}</p>
                    <p className={styles.description}>
                        {data.description}
                    </p>
                    <div className={styles.entriesList}>
                        <DevelopmentRanking hackathon={data} />
                    </div>
                </div>
            : null
        );
    }
}