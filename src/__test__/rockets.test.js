import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/configureStore';
import Rockets from '../components/rockets'

describe('Tests for the missions component/pag', () => {
    const nav = () => render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    test('Does the navbar match the snapshot', () => {
      const mission = nav();
      expect(mission).toMatchSnapshot();
  });

  it('Should contain a heading with text LOADING... while fetching data from api', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent("LOADING...")
  });
})
