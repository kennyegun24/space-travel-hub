import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../Redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, status } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div className="rocket">
      {status === 'pending' ? (
        <div className="pending">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {rockets.map((rocket) => (
            <div className="rocketDiv" key={rocket.rocket_id}>
              <div>
                <img src={rocket.flickr_images[0]} className="rocketImg" alt="" />
              </div>
              <div className="rocketDivSm">
                <h2>
                  {rocket.rocket_name}
                </h2>
                <p>
                  {rocket.description}
                </p>
                <button type="button" className="rocketBtn">Reserve Rocket</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Rockets;
