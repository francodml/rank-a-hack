import { Fragment } from 'react';
import HackathonList from '../components/hackathonList.js';

export default function Index () {
    return (
        <Fragment>
            <h1>Hackathons</h1>
            <HackathonList />
        </Fragment>
    );
}