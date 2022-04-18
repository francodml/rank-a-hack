import './styles/hackathonList.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Hackathon({ hackathon }) {

    const formattedDate = new Date(hackathon.startDate).toLocaleDateString("es-AR");

    let nav = useNavigate();

    return (
        <div className="Hackathon" onClick={ event => { event.preventDefault(); nav(`/details/${hackathon.id}`)}}>
            <p className='Hackathon__title'>{hackathon.name}</p>
            <p className='Hackathon__date'>{formattedDate}</p>
            <p className='Hackathon__description'>{hackathon.description}</p>
        </div>
    );
}