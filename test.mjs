import mySingletonInstance from "./singleton.mjs";

console.log(mySingletonInstance._data);

const fetchedInstance = await mySingletonInstance.loadFetchedInstance();
console.log(fetchedInstance._data);

const tryToFetchAgainInstance = await mySingletonInstance.loadFetchedInstance();
console.log(tryToFetchAgainInstance._data);

