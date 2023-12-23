function foo(param, ...rest) {
  console.log(param); //1
  console.log(rest); // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(rest);
}

bar(1, 2, 3, 4, 5);