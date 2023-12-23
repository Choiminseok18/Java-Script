const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

//생성된 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); // Symbol()