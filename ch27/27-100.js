class Numbers {
  numberArray = [];
  multiply(arr) {
    arr.forEach(function (item) {
      // TypeError: Cannot read properties of undefined (reading 'numberArray')
      this.numberArray.push(item * item);
    });
  }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);