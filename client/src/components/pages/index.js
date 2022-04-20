import { Fragment } from 'react';
import HackathonList from '../hackathonList.js';

export default function Index () {
    return (
        <Fragment>
            <h1>Hackathons</h1>
            <HackathonList />
        </Fragment>
    );
}