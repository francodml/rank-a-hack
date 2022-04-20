import styles from './styles/hackathon.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetUserQuery } from '../redux/mainAPI';
import UserDetail from './userdetail';
import Development from './development';

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
        <div className={styles.Hackathon} onClick={ event => { event.preventDefault(); nav(`/details/${hackathon.id}`)}}>
            <p className={styles.title}>{hackathon.name}</p>
            <p className={styles.subtitle}>{formattedDate} - {hackathon.location}</p>
            <p className={styles.description}>{hackathon.description}</p>
            <h1 className={styles.subtitle}>Top entries</h1>
            <div className={styles.entries}>
                {topEntries.map(entry => {
                    return (
                        <Development key={entry._id} entry={entry} compact />
                    )
                })}
            </div>
        </div>
    );
}