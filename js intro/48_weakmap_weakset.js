/* 48. WeakMap and WeakSet */
// WeakMap and WeakSet hold weak references to objects (not primitive values).
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "some value");
console.log("WeakMap has obj?", weakMap.has(obj));
// If obj is no longer referenced elsewhere, it can be garbage collected.

let weakSet = new WeakSet();
weakSet.add(obj);
console.log("WeakSet has obj?", weakSet.has(obj));
