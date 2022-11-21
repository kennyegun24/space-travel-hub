import { Link } from 'react-router-dom';
import logo from '../assets/saturn.png';

const Navbar = () => (
  <div className="nav">
    <div className="navFst">
      <img src={logo} alt="icon" className="logoimg" />
      <h1>Space Hub</h1>
    </div>
    <div className="nav-sec">
      <Link className="Link" to="./">Rockets</Link>
      <Link className="Link" to="./missions">Missions</Link>
      <p className="horizontal" />
      <Link className="Link" to="./profile">User-Profile</Link>
    </div>
  </div>
);

export default Navbar;
