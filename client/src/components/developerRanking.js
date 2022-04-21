import styles from './styles/developerRanking.module.scss'
import UserDetail from "./userdetail";

export default function DeveloperRanking({entry})
{
    return (
    <div className={styles.DeveloperRanking}>
        <span className={styles.UserDetail}><UserDetail user={entry.developerId} /></span>
        <p className={styles.subtitle}>known for</p>
        <p>{entry.name}</p>
        <p className={styles.subtitle}>ranked {entry.ranking.toFixed(1)}/10.0</p>
    </div>
    );
}