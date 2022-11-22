// import { useSelector } from 'react-redux';

const singleMission = (mission) => {
  const hello = () => 'hello';

  return (
    <tr className="mission-details">
      <td>{mission.name}</td>
      <td>{mission.description}</td>
      <td>
        <div className="member-badge">Not a Member</div>
      </td>
      <td>
        <button type="button" className="join-btn">
          Join Mission
        </button>
      </td>
      <div>{hello()}</div>
    </tr>
  );
};

export default singleMission;
