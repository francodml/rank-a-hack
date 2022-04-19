import './styles/hackathonList.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetUserQuery } from '../redux/mainAPI';
import UserDetail from './userdetail';

export default function Hackathon({ hackathon }) {

    const formattedDate = new Date(hackathon.startDate).toLocaleDateString("es-AR");

    let nav = useNavigate();

    var entries = [...hackathon.entries];
    entries.sort((a, b) => { return b.ranking - a.ranking });

    const topEntries = entries.slice(0, 3);

    const topDevs = []

    topEntries.forEach(e => { 
        topDevs.push()
    });

    return (
        <div className="Hackathon" onClick={ event => { event.preventDefault(); nav(`/details/${hackathon.id}`)}}>
            <p className='title'>{hackathon.name}</p>
            <p className='subtitle'>{formattedDate}</p>
            <p className='description'>{hackathon.description}</p>
            <h1 className='subtitle'>Top entries</h1>
            <div className='entries'>
                {topEntries.map(entry => {
                    return (
                        <div className='entry' key={entry._id}>
                            <p className='title'>{entry.name}</p>
                            <p className='subtitle'>{entry.ranking.toFixed(1)}</p>
                            <UserDetail user={entry.developerId} compact />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}