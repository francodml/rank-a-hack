import './styles/developers.scss'

export default function UserDetail({ user }) {
  console.log(user);
    return (
        <div className="userCard">
            <img className='profilePic' src={user.avatarUrl} alt={user.name} />
            <p className='name'>{user.username}</p>
        </div>
    );
}