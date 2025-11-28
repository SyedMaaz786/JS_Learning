const person = {
  name: "Syed",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Maaz" });
boundGreet();

//bind, call and apply
