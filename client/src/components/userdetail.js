import './styles/developers.scss'

export default function UserDetail({ user, compact }) {

    return (
        <div className={`userCard ${compact ? 'small' : ''}`}>
            <img className='profilePic' src={user.avatarUrl} alt={user.name} />
            <p className='name'>{user.username}</p>
        </div>
    );
}