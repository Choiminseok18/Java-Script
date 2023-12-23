class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(function (item) {
      return this.prefix + ' ' + item;
    }, this); // this에 바인딩 된 값이 콜백 함수 내부의 this에 바인딩 된다.
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));