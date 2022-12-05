import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragonBooking, fetchDragons } from '../Redux/draons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragon, status } = useSelector((state) => state.dragons);
  useEffect(() => {
    if (status === null) {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  const handleBookings = (id) => {
    dispatch(dragonBooking(id));
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
          {dragon.map((
            {
              dragonName, dragonType, id, dragonImage, reserved,
            },
          ) => (
            <div className="rocketDiv" key={id}>
              <div>
                <img src={dragonImage} className="rocketImg" alt="" />
              </div>
              <div className="rocketDivSm">
                <h2>
                  {dragonName}
                </h2>
                {reserved ? <span className="reserved blue">Reserved </span> : ''}
                <p>
                  {dragonType}
                </p>
                {reserved
                  ? (
                    <button
                      type="submit"
                      onClick={() => { handleBookings(id); }}
                      className="dull"
                    >
                      Cancel Reservations
                    </button>
                  )
                  : (
                    <button
                      type="submit"
                      onClick={() => { handleBookings(id); }}
                      className="rocketBtn"
                    >
                      Reserve Rocket
                    </button>
                  )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Dragons;
