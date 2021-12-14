import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface UserSettingsState{
	highlightChainlink: boolean,
	displayEUR: boolean,
}

const initialState: UserSettingsState = {
	highlightChainlink: false,
	displayEUR: false,
};

const UserSettings = createSlice({
	name: 'UserSettings',
	initialState,
	reducers: {
		toggleHighlightChainlink: state => {
			state.highlightChainlink = !state.highlightChainlink;
		},
		toggleDisplayEUR: state => {
			state.displayEUR = !state.displayEUR;
		},
	},
});

export const {toggleHighlightChainlink, toggleDisplayEUR} = UserSettings.actions;

export const selectStateHighlightChainlink = (state: RootState) => state.userSettings.highlightChainlink;
export const selectStateDisplayEUR = (state: RootState) => state.userSettings.displayEUR;

export default UserSettings.reducer;
