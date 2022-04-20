import styles from  './styles/hackathonList.module.scss';
import Hackathon from './hackathon';
import { useGetHackathonsQuery } from '../redux/mainAPI';

export default function HackathonList() {

    const {data, loading, error} = useGetHackathonsQuery();

    return (
        <div className={styles.List}>
            { error ? <p>Error: {error.status}</p> :
            loading? <p>Loading...</p> :
            data? <>{
                data.map(hackathon => {
                    return (
                        <Hackathon key={hackathon.id} hackathon={hackathon} />
                    );
                })}
            </> : null }
        </div>
    );
}