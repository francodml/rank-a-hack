import styles from './styles/devranking.module.scss';
import { useGetHackathonsQuery } from '../../redux/mainAPI';
import DevelopmentRanking from '../developmentranking';
import DeveloperRanking from '../developerRanking';

export default function DevRanking() {

    const { data, loading, error } = useGetHackathonsQuery();

    
    let elm = null;
    
    if (error) {
        elm = <p>Error</p>
    } else if (loading) {
        elm = <p>Loading...</p>
    } else if (data) {
        const entries = data.map(hackathon => {
            return hackathon.entries.slice(0,5);
        }).flat();
        entries.sort((a,b) => b.ranking - a.ranking);
        console.log(entries);
        elm = (
            <>
                <h1 className={styles.title}>Top devs</h1>
                <p className={styles.subtitle}>Showing the top 5 devs from each hackathon</p>
                <div className={styles.entriesList}>
                    {/* <DevelopmentRanking developments={entries} /> */}
                    {entries.map(entry => {
                        return (
                            <DeveloperRanking key={entry._id} entry={entry} />
                        )
                    })}
                </div>
            </>
        )
    }

    return elm;

}