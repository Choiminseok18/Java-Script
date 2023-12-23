class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi ${this.name}`;
  }
}

class Derived extends Base {
  // 최상위 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
  satHi = () => `${super.sayHi()} how are you doung?`;
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); // Hi! Lee how are you doing?