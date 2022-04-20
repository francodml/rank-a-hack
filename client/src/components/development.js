import styles from './styles/development.module.scss';
import UserDetail from "./userdetail";

export default function Development ({ entry, compact }) {
    return (
        <div className={styles.Development}>
            <p className={styles.Title}>{entry.name}</p>
            <p className={styles.Subtitle}>ranked {entry.ranking.toFixed(1)}/10.0</p>
            {!compact ? <p className={styles.Description}>{entry.description}</p> : null}
            <div className={styles.UserDetail}>
                <UserDetail user={entry.developerId} compact />
            </div>
        </div>
    )
}