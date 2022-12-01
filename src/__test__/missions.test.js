import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';

import { fetchMissions, toggleMember } from '../Redux/missions/missions';

import Missions from '../pages/missions';

describe('Tests for the missions component/pag', () => {
  const renderElement = () => render(
    <Provider store={store}>
      <Router>
        <Missions />
      </Router>
    </Provider>,
  );

  it('Should render the missions page properly', () => {
    const mission = renderElement();
    expect(mission).toMatchSnapshot();
  });

  it('Should return an array of 10 element', async () => {
    await store.dispatch(fetchMissions());
    expect(store.getState().missions.missionsArray).toHaveLength(10);
  });

  it('Should properly reserve a mission', () => {
    store.dispatch(toggleMember('9D1B7E0'));
    expect(store.getState().missions.missionsArray[0].member).toBe(true);
  });

  it('Should contain an button with text Leave Mission', () => {
    renderElement();
    const button = screen.getByRole('button', { name: 'Leave Mission' });
    expect(button).toBeInTheDocument();
  });
});
