// Good
function Person(name) {
  this.name = name;
}

person.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`); };

const person = new Person('Lee');
person.sayHi(); // Hi Lee