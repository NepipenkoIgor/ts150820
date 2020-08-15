// interface UserAccount {
//     firstName: string;
//     age: number;
// }

// let p = UserAccount;


// let userAccount = {
//     firstName: 'Ihor',
//     age: 34
// };
//
// let p: typeof userAccount = 1;

// class Person {
//     name!: string;
// }
//
// let p: Person = new Person();

let a: string = '1';
a = `hey ${a}`;

let num: number = 1;
num = NaN;
num = 0x0101;
num = 1.3;

let bool: boolean = true;
bool = false;

let nill: null = null;
let undef: undefined = undefined;

let bignum: bigint = 4n;


const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key3');

let strictObj = {
    [key1]: 'value1',
    [key2]: 'value2',
    [key3]: 'value3',
}

let v1 = strictObj[key3];
