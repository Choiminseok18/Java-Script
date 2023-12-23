class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    // this를 일단 회피 시킨다.
    const that = this;
    return arr.map(function (item) {
      // this 대신 that을 참조한다.
      return that.prefix + ' ' + item;
    });
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));