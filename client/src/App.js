import Navbar from './components/navbar.js';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Details from './components/pages/details'
import Index from './components/pages/index'
import DevRanking from './components/pages/devranking';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>
            <Route index element={<Index />} />
            <Route path="details">
                <Route path=":id" element={<Details />} />
                <Route index element={<Navigate to="/"/>} />
            </Route>
            <Route path="devranking" element={ <DevRanking />} />
        </Routes>

        <footer style={{fontSize: '0.5em'}}>
            francodml 2022
        </footer>
    </div>
  );
}

export default App;
