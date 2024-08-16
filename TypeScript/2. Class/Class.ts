/*
    정의
*/

class cPerson {
	name: string;

	constructor(name) {
		this.name = name;
	}

	walk() {
		console.log(`${this.name} is walking`);
	}
}

/*
    접근 제한자
*/

class c3DCoord {
	public x: string;
	protected y: string;
	private z: string;

	constructor(x: string, y: string, z: string) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

const Coordinate = new c3DCoord("x", "y", "z");
console.log(Coordinate.x);
//console.log(Coordinate.y); // error
//console.log(Coordinate.z); // error

class c3DCoord_Child extends c3DCoord {
	constructor(x: string, y: string, z: string) {
		super(x, y, z);

		console.log(this.x);
		console.log(this.y);
		// console.log(this.z); // error
	}
}

/*
    생성자 Paramenter에 접근 제한자 부여
*/

class CustomString {
	/*
        접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 자동으로 초기화됨
        public이 선언되었으므로 x는 클래스 외부에서도 참조가 가능 | protected, priavte는 불가능
    */
	constructor(public x: string) {}
}

const customString = new CustomString("Hello");
console.log(customString); // CustomString { x: 'Hello' }
console.log(customString.x); // Hello

/*
    readonly
*/

class cReadOnly {
	private readonly MAX_LEN: number = 5;
	private readonly MSG: string;

	constructor() {
		this.MSG = "hello";
	}

	log() {
		// this.MAX_LEN = 10; // error
		// this.MSG = "Hi"; // error

		console.log(`MAX_LEN: ${this.MAX_LEN}`); // MAX_LEN: 5
		console.log(`MSG: ${this.MSG}`); // MSG: hello
	}
}

/*
    static
*/

class cStatic {
	static instanceCounter = 0;

	constructor() {
		cStatic.instanceCounter++;
	}
}

/*
    추상 클래스
*/

abstract class Animal {
	// 추상 method
	abstract makeSound(): void;

	// 일반 method
	move(): void {
		console.log("roaming the earth... ");
	}
}

class Dog extends Animal {
	makeSound() {
		console.log("bowwow~~");
	}
}
