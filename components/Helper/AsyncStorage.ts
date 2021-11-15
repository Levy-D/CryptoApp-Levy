import AsyncStorage from '@react-native-async-storage/async-storage';

export const deleteIDFromAsyncStorage = async (storageId: string): Promise<void> => {
	try {
		await AsyncStorage.removeItem(storageId);
		console.log(storageId, 'deleted');
		console.log('Remaining Keys', await AsyncStorage.getAllKeys());
	} catch (e) {
		console.log(e);
	}
};

export const saveIDtoAsyncStorage = async (storageId: string, value: number): Promise<void> => {
	try {
		await AsyncStorage.setItem(storageId, value.toString());
		console.log(storageId, 'added');
		console.log('All Keys', await AsyncStorage.getAllKeys());
	} catch (e) {
		console.log(e);
	}
};

export async function fetchAllItemsFromAsyncStorage(): Promise<number[] | undefined> {
	try {
		return AsyncStorage.getAllKeys().then(async keys => {
			if (keys.length !== 0) {
				return AsyncStorage.multiGet(keys).then(key => {
					const ids: number[] = [];
					key.forEach(data => {
						if (data[1] !== null) {
							ids.push(parseInt(data[1].toString(), 10));
						}
					});
					return ids;
				});
			}

			return [];
		});
	} catch (error) {
		console.log(error);
	}
}
