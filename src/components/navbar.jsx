import { NavLink } from 'react-router-dom';
import logo from '../assets/saturn.png';

const Navbar = () => (
  <div className="nav">
    <div className="navFst">
      <img src={logo} alt="icon" className="logoimg" />
      <h1>Space Hub</h1>
    </div>
    <div className="nav-sec">
      <NavLink className="nav-link" to="./">
        Rockets
      </NavLink>
      <NavLink className="nav-link" to="./missions">
        Missions
      </NavLink>
      <p className="horizontal" />
      <NavLink className="nav-link" to="./profile">
        My Profile
      </NavLink>
    </div>
  </div>
);

export default Navbar;
