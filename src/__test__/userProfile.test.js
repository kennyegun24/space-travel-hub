import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';

import Profile from '../pages/userProfile';

describe('Tests for the missions component/pag', () => {
  const renderElement = () => render(
    <Provider store={store}>
      <Router>
        <Profile />
      </Router>
    </Provider>,
  );

  it('Should render The userProfile page properly', () => {
    const profile = renderElement();
    expect(profile).toMatchSnapshot();
  });
});
