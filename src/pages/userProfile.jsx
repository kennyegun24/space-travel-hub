import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { rocket } = useSelector((state) => state.rockets);
  const rocketReserved = rocket.filter((stat) => stat.reserved);
  const { missionsArray } = useSelector((state) => state.missions);
  const missionsMember = missionsArray.filter((mission) => mission.member);

  return (
    <section className="missions-container">
      <div className="missions-column">
        <header>My Missions</header>
        {missionsMember.length === 0 ? (
          <div className="no__reservations">
            <p>No Reservations Made</p>
            <Link className="reserve-link" to="/missions">
              Click to make Reservations
            </Link>
          </div>
        ) : (
          <ul className="column-items">
            {missionsMember.map(({ name, id }) => (
              <li className="column-item" key={id}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="rockets-column">
        <header>My Rockets</header>
        {rocketReserved.length === 0 ? (
          <div className="no__reservations">
            <p>No Reservations Made</p>
            <Link className="reserve-link" to="/">
              Click to make Reservations
            </Link>
          </div>
        ) : (
          <ul className="column-items">
            {rocketReserved.map(({ id, rocketName }) => (
              <li className="column-item" key={id}>
                {rocketName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;
