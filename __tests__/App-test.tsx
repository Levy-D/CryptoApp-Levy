/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

jest.mock('redux-persist', () => {
	const real = jest.requireActual('redux-persist');
	return {
		...real,
		persistReducer: jest
			.fn()
			.mockImplementation((config, reducers) => reducers),
	};
});

it('renders correctly', () => {
	const tree = render(<App />).toJSON;
	expect(tree).toMatchSnapshot();
});
