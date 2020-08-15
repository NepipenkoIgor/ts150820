// const user: {
//     readonly name: string,
//     readonly age?: number
// } = {
//     name: 'Ihor',
//     age: 34,
// };
//
// user.age = 25;
// user.name = 'Vanya';
//
//
// let nameAge: keyof typeof user = 1;
// let v1: (typeof user)['name'] = 1;
//
// let hashMap: {
//     [id: string]: typeof user;
// } = {
//     '1231asdas121':  {
//         name: 'Ihor',
//         age: 34,
//     },
//     '14564as2355': {
//         name: 'Vanya',
//     }
// }

// let arr: readonly (typeof user)[] = [
//     {
//         name: 'Ihor',
//         age: 34,
//     },
//     {
//         name: 'Ihor',
//         age: 34,
//     },
// ]
//
// arr[100] = {
//     name: 'Ihor',
//     age: 34,
// };
// arr.push({
//     name: 'Ihor',
//     age: 34,
// })
//
// let pair: readonly [string, number] = ['id', 1]
//
// pair.push(100);
// pair[100] = 1;

let x = 10 as const;
x = 10;

let tuple  = ['id', 1] as const;
tuple = ['id', 1];
tuple.push(1);

let obj = {name: 'Ihor', age: 34} as const

obj = {name: 'Ihor', age: 25};
