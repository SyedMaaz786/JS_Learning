let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,   //protype = Property used by constructor functions
};
let tomHardware = {};

// console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);        //here set and get are the builtin object methods.

console.log(`tesla `, Object.getPrototypeOf(tesla));
