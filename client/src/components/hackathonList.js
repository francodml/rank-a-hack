import './styles/hackathonList.scss';
import Hackathon from './hackathon';
import { useGetHackathonsQuery } from '../redux/mainAPI';

export default function HackathonList() {

    const {data, loading, error} = useGetHackathonsQuery();

    return (
        <div className="List">
            { error ? <p>Error: {error.message}</p> :
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