/*
    선언
*/

const isDone: null = null;

const n: null = null;

const u: undefined = undefined;

const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

let color: string = 'blue';
color = 'red';
const myName: string = 'Lee'; // ES6 템플릿 문자열
const greeting: string = `Hello, my name is ${myName}.`; // ES6 템플릿 대입문

// object
const obj: object = {};

// array
const list1: any[] = [1, 'two', true];
const list2: number[] = [1, 2, 3];
const list3: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

let tuple: [string, number];
tuple = ['hello', 10]; // OK

enum Color3 {
	Red = 1,
	Green = 2,
	Blue = 4,
}
const c3: Color3 = Color3.Blue;
console.log(c3); // 4

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

function warnUser(): void {
  // void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
  console.log('This is my warning message');
}

function infiniteLoop(): never {
  // never : 결코 발생하지 않는 값
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}

/*
    정적 타이핑
*/

let foo: string; // 문자열 타입
let bar: number; // 숫자 타입
let baz: boolean; // 불리언 타입

foo = 'Hello';
bar = 123;
// baz = 'true'; // error: Type '"true"' is not assignable to type 'boolean'.

/*
    타입 추론
*/

const foo1 = 123; // foo는 number 타입

let foo2; // let foo: any와 동치
foo2 = 'Hello';
console.log(typeof foo2); // string
foo2 = true;
console.log(typeof foo2); // boolean
