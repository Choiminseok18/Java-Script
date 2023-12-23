const arr = [0];
arr[1] = 1;

arr[100] = 100;

console.log(arr); // [ 0, 1, <98 empty items>, 100 ]
console.log(arr.length); // 101

console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': { value: 0, writable: true, enumerable: true, configurable: true },
  '1': { value: 1, writable: true, enumerable: true, configurable: true },
  '100': { value: 100, writable: true, enumerable: true, configurable: true },
  length: {
    value: 101,
    writable: true,
    enumerable: false,
    configurable: false
  }
}
 */

arr[1] = 10;

console.log(arr); // [ 0, 10, <98 empty items>, 100 ]
