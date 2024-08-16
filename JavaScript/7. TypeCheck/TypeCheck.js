/*
    typeof
*/
typeof '';              // string
typeof 1;               // number
typeof NaN;             // number
typeof true;            // boolean
typeof [];              // object
typeof {};              // object
typeof new String();    // object
typeof new Date();      // object
typeof /test/gi;        // object
typeof function() {};  // function
typeof undefined;       // undefined
typeof null;            // object (설계적 결함)
typeof undeclared;      // undefined (설계적 결함)



/*
    Object.prototype.toString
*/
Object.prototype.toString.call('');             // [object String]
Object.prototype.toString.call(new String());   // [object String]
Object.prototype.toString.call(1);              // [object Number]
Object.prototype.toString.call(new Number());   // [object Number]
Object.prototype.toString.call(NaN);            // [object Number]
Object.prototype.toString.call(Infinity);       // [object Number]
Object.prototype.toString.call(true);           // [object Boolean]
Object.prototype.toString.call(undefined);      // [object Undefined]
Object.prototype.toString.call();               // [object Undefined]
Object.prototype.toString.call(null);           // [object Null]
Object.prototype.toString.call([]);             // [object Array]
Object.prototype.toString.call({});             // [object Object]
Object.prototype.toString.call(new Date());     // [object Date]
Object.prototype.toString.call(Math);           // [object Math]
Object.prototype.toString.call(/test/i);        // [object RegExp]
Object.prototype.toString.call(function() {});  // [object Function]
Object.prototype.toString.call(document);       // [object HTMLDocument]
Object.prototype.toString.call(argument);       // [object Arguments]
Object.prototype.toString.call(undeclared);     // ReferenceError



/*
    instanceof
*/
function Person() {}
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true



/*
    Array.isArray
*/
console.log(Array.isArray([]));    // true
console.log(Array.isArray({}));    // false
