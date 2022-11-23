import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { rocket } = useSelector((state) => state.rockets);
  const rocketReserved = rocket.filter((stat) => stat.reserved);

  return (
    <section className="missions-container">
      <div className="missions-column">
        <header>My Missions</header>
        <ul className="column-items">
          <li className="column-item">Mission</li>
          <li className="column-item">Mission</li>
          <li className="column-item">Mission</li>
          <li className="column-item">Mission</li>
        </ul>
      </div>
      <div className="rockets-column">
        <header>My Rockets</header>
        {rocketReserved.length === 0 ? (
          <div className="no__reservations">
            <p>No Reservations Made</p>
            <Link className="reserve-rockets-link" to="/">Click to make Reservations</Link>
          </div>
        ) : (
          <ul className="column-items">
            {rocketReserved.map(({ id, rocketName }) => (
              <li className="column-item" key={id}>{rocketName}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;
