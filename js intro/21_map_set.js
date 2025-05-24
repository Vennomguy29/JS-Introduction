// 21. Map and Set
// Map is a collection of key-value pairs. Keys can be any type.
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set(2, "value2");
console.log("Map value for 'key1':", myMap.get("key1"));
console.log("Map has key 2?", myMap.has(2));
myMap.delete("key1");
console.log("Map after delete:", myMap);

// Set is a collection of unique values.
let mySet = new Set([1, 2, 2, 3]); // Duplicates are removed
mySet.add(4);
console.log("Set contents:", mySet);
console.log("Set has 2?", mySet.has(2));
mySet.delete(1);
console.log("Set after delete:", mySet);
