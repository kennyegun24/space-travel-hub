import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, rocketBooking } from '../Redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocket, status } = useSelector((state) => state.rockets);
  useEffect(() => {
    if (status === null) {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const handleBookings = (id) => {
    dispatch(rocketBooking(id));
  };

  return (
    <div className="rocket">
      {status === 'pending' ? (
        <div className="pending">
          <p className="round" />
          <h3>LOADING...</h3>
        </div>
      ) : (
        <>
          {rocket.map((
            {
              rocketName, rocketDesc, id, rocketImages, reserved,
            },
          ) => (
            <div className="rocketDiv" key={id}>
              <div>
                <img src={rocketImages} className="rocketImg" alt="" />
              </div>
              <div className="rocketDivSm">
                <h2>
                  {rocketName}
                </h2>
                {reserved ? <span className="reserved blue">Reserved </span> : ''}
                <p>
                  {rocketDesc}
                </p>
                {reserved ?
                  <button
                    type="submit"
                    onClick={() => { handleBookings(id); }}
                    className="dull"
                  >
                    Cancel Reservations
                  </button>
                  :
                  <button
                    type="submit"
                    onClick={() => { handleBookings(id); }}
                    className="rocketBtn"
                  >
                    Reserve Rocket
                  </button>
                  }
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Rockets;
