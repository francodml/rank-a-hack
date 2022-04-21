import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

/* top level app layout */
import App from './App';

/* redux and redux toolkit */
import { store } from './redux/store';
import { Provider } from 'react-redux';


import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);

