import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import {saveBooleanToAsyncStorage} from '../../Helper/AsyncStorage';
import {
	IsEnabledHighlightChainlinkContext,
	IsEnabledUseEURContext,
} from '../../Helper/Context';

const settingsPage = () => {
	const {isEnabledHighlightChainlink, setIsEnabledHighlightChainlink}
		= useContext(IsEnabledHighlightChainlinkContext);
	const toggleSwitchHighlightChainlink = () =>
		setIsEnabledHighlightChainlink(previousState => !previousState);
	const {isEnabledUseEUR, setIsEnabledUseEUR} = useContext(
		IsEnabledUseEURContext,
	);
	const toggleSwitchUseEUR = () => {
		setIsEnabledUseEUR(previousState => !previousState);
	};

	useEffect(() => {
		saveBooleanToAsyncStorage('ValutaEUR', isEnabledUseEUR);
	}, [isEnabledUseEUR]);

	useEffect(() => {
		saveBooleanToAsyncStorage('ChainlinkHighlighted', isEnabledHighlightChainlink);
	}, [isEnabledHighlightChainlink]);

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

export default settingsPage;

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
