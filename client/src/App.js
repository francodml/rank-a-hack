import Navbar from './components/navbar.js';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Outlet />
    </div>
  );
}

export default App;
