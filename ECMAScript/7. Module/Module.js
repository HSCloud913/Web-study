/*
    export
    - 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게함
*/

// 직접 하나하나 지정
// Value
export const PI = Math.PI;

// Function
export function square(x) {
    return x * x;
}

// Class
export class Person {
    constructor(name) {
        this.name = name;
    }
}

// 묶어서 한번에 지정
export {
    PI
    , square
    , Person
};



/*
    import
    - export한 항목들을 load하여 사용할 수 있게함
*/

// lib라는 이름으로 import
import * as lib from './Module.js';

import {
    PI
    , square
    , Person
} from './lib';

// 이름을 변경하여 import
import {
    PI as PI_
    , square as sq
    , Person as P
} from './lib';


// 모듈에서 하나만을 export할 때는 default 키워드를 사용 (위아래는 같은 구문)
function Avg(x) {
    return x * x;
}
export default Avg;

export default function Avg(x) {
    return x * x;
}