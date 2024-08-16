/*
    Value
*/

interface Todo {
	id: number;
	content: string;
	completed: boolean;
}

let todo: Todo; // 타입으로 사용
todo = { id: 1, content: "typescript", completed: false };

/*
    Function
*/

interface SquareFunc {
	(num: number): number; // param type, return type
}

const squareFunc: SquareFunc = function(num: number) {
	return num * num;
};

/*
    Class
    - 클래스는 지정된 인터페이스를 반드시 구현하여야 함
*/

interface ITodo {
	id: number;
	content: string;
	completed: boolean;
	sayHello(): void; // 추상 method
}

class cTodo implements ITodo {
	constructor(
		public id: number,
		public content: string,
		public completed: boolean
	) {}

	sayHello() {
		console.log(`Hello ${this.content}`);
	}
}

/*
    Duck Typing
*/

interface IDuck {
	quack(): void;
}

class MallardDuck implements IDuck {
	quack() {
		console.log("Quack!");
	}
}

class RedheadDuck {
	quack() {
		// IDuck의 quack을 구현한 것으로 인정됨
		console.log("q~uack!");
	}
}

function makeNoise(duck: IDuck): void {
	duck.quack();
}

makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());

/*
    선택적 Property
*/

interface UserInfo {
	username: string;
	password: string;
	age?: number; // 생략가능
	address?: string; // 생략가능
}

const userInfo: UserInfo = {
	username: "ungmo2@gmail.com",
	password: "123456"
};
