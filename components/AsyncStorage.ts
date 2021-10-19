// import { useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const KeyList = ({ data }: never[] | null) => {
//     const [favoriteIDs, setFavIDs] = useState([])

//     async function fetchAllItems() {
//         try {
//             await AsyncStorage.getAllKeys().then(async keys => {
//                 if (keys.length !== 0) {
//                     {
//                         await AsyncStorage.multiGet(keys).then(key => {
//                             let ids: number[] = []
//                             key.forEach(data => {
//                                 ids.push(parseInt(data[1]));
//                             });
//                             setFavIDs(ids);
//                         });
//                     }
//                 }
//                 else {
//                     setFavIDs([]);
//                 }
//             });
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     fetchAllItems();

//     return data.filter(item => favoriteIDs.includes(item.id));

// }