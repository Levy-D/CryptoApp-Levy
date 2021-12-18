import AsyncStorage from '@react-native-async-storage/async-storage';

export const deleteFromAsyncStorage = async (
	storageId: string,
): Promise<void> => {
	try {
		await AsyncStorage.removeItem(storageId);
		console.log('Remaining Keys', await AsyncStorage.getAllKeys());
	} catch (e) {
		console.log(e);
	}
};

export const saveObjectToAsyncStorage = async (
	storageId: string,
	value: any,
): Promise<void> => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(storageId, jsonValue);
		console.log('Remaining Keys', await AsyncStorage.getAllKeys());
	} catch (e) {
		console.log(e);
	}
};

export const saveValueToAsyncStorage = async (
	storageId: string,
	value: any,
): Promise<void> => {
	try {
		await AsyncStorage.setItem(storageId, value.toString());
		console.log('Remaining Keys', await AsyncStorage.getAllKeys());
	} catch (e) {
		console.log(e);
	}
};

export const getValueFromAsyncStorage = async (
	storageId: string,
): Promise<string | undefined> => {
	try {
		const value = await AsyncStorage.getItem(storageId);
		console.log('Remaining Keys', await AsyncStorage.getAllKeys());
		if (value !== null) {
			return value;
		}
	} catch (e) {
		console.log(e);
	}
};

export const getObjectFromAsyncStorage = async (
	storageId: string,
): Promise<any | undefined> => {
	try {
		const jsonValue = await AsyncStorage.getItem(storageId);
		return jsonValue === null ? null : JSON.parse(jsonValue);
	} catch (e) {
		console.log(e);
	}
};
