import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMember } from '../Redux/missions/missions';

const SingleMission = ({
  id, name, description, member,
}) => {
  const dispatch = useDispatch();

  const handleClick = (missionId) => dispatch(toggleMember(missionId));

  return (
    <tr className="mission-details" id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <div
          className={`member-badge ${
            member ? 'active-member' : 'not-active-member'
          }`}
        >
          {member ? 'Active Member' : 'NOT A MEMBER'}
        </div>
      </td>
      <td>
        <button
          type="button"
          className={`mission-btn ${
            member ? 'leave-action' : 'join-action'
          }`}
          onClick={() => handleClick(id)}
        >
          {member ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};

export default SingleMission;
