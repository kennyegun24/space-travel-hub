import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Rockets from './components/rockets';
import Missions from './components/missions';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
