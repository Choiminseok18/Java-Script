var person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello My Name is ${this.name}`);
  }
};

console.log(typeof person); // Object
console.log(person); // {name: 'Lee', sayHello: ƒ}

var person = {
  'last-name': 'Lee',
  1: 10
};

// Uncaught SyntaxError: Unexpected string
person.last-name;