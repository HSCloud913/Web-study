/*
    Class Definition
*/

class Person {
	constructor (name) {
		this._name = name;
	}

	say() {
		console.log(`${this._name}`);
	}
}

const Student = new Person('Lee');
Student.say();
console.log(Student instanceof Person);



/*
    Create Instance
*/

// new 연산자와 함께 constructor를 호출
const Teacher = new Person();
console.log(Person === Person.prototype.constructor); // true



/*
    Constructor
    - 생략 가능 (default 생성자)
*/

class Empty { }

const e = new Empty();
console.log(e); // Empty {}

// 클래스 프로퍼티의 동적 할당 및 초기화
e.num = 1;
console.log(e); // Empty&nbsp;{ num: 1 }



/*
    Property
        - 메소드만 선언 가능
*/

class Foo {
	constructor (name = '') {
		this.name = name;
	}
}

const foo = new Foo('Lee');
console.log(foo.name); // 클래스 외부에서 참조 가능 (public)



/*
    Hoisting
    - 모든 선언(var, let, const, function, function*, class)을 호이스팅
    - class 선언문 이전에 class를 참조하면 참조 에러가 발생 (TDZ)
*/

const foo1 = new Foo1(); // ReferenceError: Foo1 is not defined
class Foo1 { }



/*
    getter, setter
*/
class GetSet {
	constructor (arr = []) {
		this._arr = arr;
	}

	// getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용된다.
	get firstElem() {
		// getter는 반드시 무언가를 반환해야 한다.
		return this._arr.length ? this._arr[0] : null;
	}

	// setter: set 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용된다.
	set firstElem(elem) {
		// ...this._arr은 this._arr를 개별 요소로 분리한다
		this._arr = [elem, ...this._arr];
	}
}



/*
    static method
    - 정적 메소드는 this를 사용할 수 없음
    - 정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킴
*/

class cStaticMethod {
	constructor (prop) {
		this.prop = prop;
	}

	static staticMethod() {
		return 'staticMethod';
	}

	prototypeMethod() {
		return this.prop;
	}
}

// 정적 메소드는 클래스 이름으로 호출 가능
console.log(cStaticMethod.staticMethod());

const staticMethod = new cStaticMethod(123);
console.log(Foo.staticMethod()); // 정적 메소드는 인스턴스로 호출 불가능



/*
    상속
*/

/* extend keyword */
class cCircle {
	constructor (radius) {
		this.radius = radius;
	}

	getDiameter() {
		return 2 * this.radius;
	}

	getPerimeter() {
		return 2 * Math.PI * this.radius;
	}

	getArea() {
		return Math.PI * Math.pow(this.radius, 2);
	}
}

class cCylinder extends cCircle {
	constructor (radius, height) {
		super(radius); // 호출하지 않을 시 참조에러 발생
		this.height = height;
	}

	getArea() // overriding
	{
		return (this.height * super.getPerimeter()) + (2 * super.getArea());
	}

	getVolume() {
		return super.getArea() * this.height;
	}
}

const cylinder = new cCylinder(2, 10); // radius: 2, height: 10

console.log(cylinder.getDiameter());  // 4
console.log(cylinder.getPerimeter()); // 12.566370614359172
console.log(cylinder.getArea());      // 150.79644737231007
console.log(cylinder.getVolume());    // 125.66370614359172



/* super keyword */
//- 부모 클래스를 참조(Reference)할 때 또는 부모 클래스의 constructor를 호출할 때 사용

/*
class cCylinder extends cCircle
{
    constructor(radius, height)
    {
        super(radius); // 호출하지 않을 시 참조에러 발생 (super)
        this.height = height;
    }
}
*/


/* static 메소드와 prototype 메소드의 상속 */

// Prototype chain에 의해 부모 클래스의 정적 메소드도 상속됨
class Parent1 {
	static staticMethod() {
		return 'staticMethod';
	}
}

class Child1 extends Parent {

}
console.log(Parent1.staticMethod()); // 'staticMethod'
console.log(Child1.staticMethod());  // 'staticMethod'


// 자식 클래스의 정적 메소드 내부에서도 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 있음
//     -> 일반 메소드 내부에서는 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 없음
//         -> 자식 클래스의 인스턴스는 프로토타입 체인에 의해 부모 클래스의 정적 메소드를 참조할 수 없기 때문
class parent2 {
	static staticmethod() {
		return 'hello';
	}
}

class Child2 extends Parent2 {
	static staticMethod() {
		return `${super.staticMethod()} world`; // OK
	}

	prototypeMethod() {
		return `${super.staticMethod()} world`; // Bad
	}
}

console.log(Parent2.staticMethod()); // 'Hello'
console.log(Child2.staticMethod());  // 'Hello world'
console.log(new Child2().prototypeMethod()); // TypeError: (intermediate value).staticMethod is not a function