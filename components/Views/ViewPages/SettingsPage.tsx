import React from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectStateDisplayEUR, selectStateHighlightChainlink, toggleDisplayEUR, toggleHighlightChainlink} from '../../Redux/Slices/UserSettings';

const SettingsPage = () => {
	const dispatch = useDispatch();
	const isEnabledHighlightChainlink = useSelector(selectStateHighlightChainlink);
	const isEnabledUseEUR = useSelector(selectStateDisplayEUR);

	const toggleSwitchHighlightChainlink = () => {
		dispatch(toggleHighlightChainlink());
	};

	const toggleSwitchUseEUR = () => {
		dispatch(toggleDisplayEUR());
	};

	return (
		<View style={styles.view}>
			<View style={styles.settingOption}>
				<Text style={styles.settingText}>Highlight ChainLink</Text>
				<Switch
					trackColor={{false: '#9e9e9e', true: '#81b0ff'}}
					thumbColor={isEnabledHighlightChainlink ? '#307cfc' : '#f4f3f4'}
					onValueChange={toggleSwitchHighlightChainlink}
					value={isEnabledHighlightChainlink}
				/>
			</View>
			<View style={styles.settingOption}>
				<Text style={styles.settingText}>Use EUR instead of USD</Text>
				<Switch
					trackColor={{false: '#9e9e9e', true: '#81b0ff'}}
					thumbColor={isEnabledUseEUR ? '#307cfc' : '#f4f3f4'}
					onValueChange={toggleSwitchUseEUR}
					value={isEnabledUseEUR}
				/>
			</View>
		</View>
	);
};

export default SettingsPage;

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: 'center',
	},
	settingOption: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
	},
	settingText: {
		textAlignVertical: 'center',
	},
});
