import styles from './styles/userdetail.module.scss';

export default function UserDetail({ user, compact }) {

    const cardstyles = [styles.userCard, compact ? styles.small : ''].join(' ');

    return (
        <div className={cardstyles}>
            <img className={styles.profilePic} src={user.avatarUrl} alt={user.name} />
            <p className={styles.name}>{user.username}</p>
        </div>
    );
}