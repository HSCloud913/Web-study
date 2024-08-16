// 배열
for (const item of ['a', 'b', 'c']) {
    console.log(item);
}

// 문자열
for (const letter of 'abc') {
    console.log(letter);
}

// Map
for (const [key, value] of new Map([['a', '1'], ['b', '2'], ['c', '3']])) {
    console.log(`key : ${key} value : ${value}`); // key : a value : 1 ...
}

// Set
for (const val of new Set([1, 2, 3])) {
    console.log(val);
}

// 이터러블
const iterable = [1, 2, 3];

// 이터레이터
const iterator = iterable[Symbol.iterator]();

for (; ;) {
    // 이터레이터의 next 메소드를 호출하여 이터러블을 순회한다.
    const res = iterator.next();

    // next 메소드가 반환하는 이터레이터 리절트 객체의 done 프로퍼티가 true가 될 때까지 반복한다.
    if (res.done) break;

    console.log(res);
}


/*
    커스텀 이터러블
    - https://poiemaweb.com/es6-iteration-for-of 참조
*/