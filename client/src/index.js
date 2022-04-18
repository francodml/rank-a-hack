import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './index.css';

/* pages and top level app layout */
import App from './App';
import Details from './pages/details';
import Index from './pages/index';
/* end pages and top level app layout */

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
                <Route path="/" element={<App />}>
                    <Route index element={<Index />} />
                    <Route path="details">
                        <Route path=":id" element={<Details />} />
                        <Route index element={<Navigate to="/"/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);

