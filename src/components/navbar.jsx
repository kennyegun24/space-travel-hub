import { Link } from 'react-router-dom';
import logo from '../assets/saturn.png';

const Navbar = () => (
  <div className="nav">
    <img src={logo} alt="icon" className="logoimg" />
    <div className="nav-sec">
      <Link className="Link" to="./">Rockets</Link>
      <Link className="Link" to="./missions">Missions</Link>
    </div>
  </div>
);

export default Navbar;
