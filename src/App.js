import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Rockets from './components/rockets';
import Missions from './pages/missions';
import Profile from './pages/userProfile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
