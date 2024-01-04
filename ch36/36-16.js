const { firstName = 'minseok', lastName } = { lastName: 'choi' };
console.log(firstName, lastName); // minseok choi

const { firstName: fn = 'minseok', lastName: ln } = { lastName: 'choi' };
console.log(fn, ln);