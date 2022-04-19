import UserDetail from "./userdetail";

export default function Development ({ entry }) {
    return (
        <div className='entry'>
            {entry.name}
            <p className='title'>{entry.name}</p>
            <p className='subtitle'>ranked {entry.ranking.toFixed(1)}/10.0</p>
            <UserDetail user={entry.developerId} compact />
        </div>
    )
}