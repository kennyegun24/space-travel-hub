import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/saturn.png';

const Navbar = () => {
  const { rocket } = useSelector((state) => state.rockets);
  const rocketReserved = rocket.filter((stat) => stat.reserved);
  return (
    <div className="nav">
      <div className="navFst">
        <img src={logo} alt="icon" className="logoimg" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <div className="nav-sec">
        <NavLink className="nav-link" to="./">
          Rockets
          {` ${rocketReserved.length}`}
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
};
export default Navbar;
