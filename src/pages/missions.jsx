import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uniqueId } from 'uuid';

import { fetchMissions } from '../Redux/missions/missions';
import SingleMission from '../components/singleMission';

const Missions = () => {
  const { missionsArray, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current && loading === null) {
      shouldFetch.current = false;
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <section className="missions-section">
      {loading ? (
        <div className="pending">
          <p className="round" />
          <p>LOADING...</p>
        </div>
      ) : (
        <table className="missions-table">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {missionsArray.map((element) => (
              <SingleMission
                key={uniqueId()}
                id={element.id}
                name={element.name}
                description={element.description}
                member={element.member}
              />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
export default Missions;
