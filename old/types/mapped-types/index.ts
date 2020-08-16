// type NotReadonly<T> = {
//     -readonly [P in keyof T]?: number;
// }
//
// type TAccount = {
//     readonly  name: string;
//     readonly  age: number;
// }
//
// let u1: Partial<TAccount> = {
//     name: 32,
//     age: 34,
// }
// u1.age = 25;
// keyof T  'name' | 'age'

type Person = {
    name: string;
    age: number;
    info: { male: boolean }
    subject: string[]
}

type RemoveByType<T, E> = {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T]

const p: RemoveByType<Person, {male: boolean, salary: number}> = 'name'
const p1: keyof Person = 'info';
