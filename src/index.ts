// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average();
// average(1, 2);
// average('1', 2, '3');
// average(2, 2, 3, 4);
// const result: number = average(1, 2, 3);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average();
// average(1);
// average(1, 2);
// average('1', 2, '3');
// average(2, 2, 3, 4);
// const result: number = average(1, 2, 3);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average();
// average(1);
// average(1, 2);
// average('1', 2, '3');
// average(2, 2, 3,  4);
// const result: number = average(1, 2, 3);
// type sn = string | number
//
// function isString(item: sn): item is string {
//     return typeof item === 'string';
// }
//
// function average(...args: sn[]): string {
//     let total: number = 0;
//     for (const arg of args) {
//         // if (typeof arg === 'string') {
//         if (isString(arg)) {
//             total += Number(arg);
//             continue;
//         }
//         total += arg;
//     }
//     const avg: number = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average();
// average(1);
// average(1, 2);
// average('1', 2, '3');
// average(2, 2, 3, 4);
// const result: number = average(1, 2, 3);

// let a: IUser | null

// interface Options {
//     [key: string]: number | string | boolean | object
// }
//
// let opts: Options = {
//     key1: 1,
// }
// let poll: Options = {}; // object of key:string, val: number|string|date|boolean|object
// for (const key in opts) {
//     if (key === 'notApoll') {
//         continue
//     }
//     poll[key] = opts[key]
// }
let a: Array
type sn = string | number

function isString(item: sn): item is string {
    return typeof item === 'string';
}

function average(a: string, b: number): string;
function average(a: number, b: string): string;
function average(a: number, b: number, c: number): string;
function average(...args: sn[]): string {
    let total: number = 0;
    for (const arg of args) {
        // if (typeof arg === 'string') {
        if (isString(arg)) {
            total += Number(arg);
            continue;
        }
        total += arg;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}

average();
average(1);
average(1, 2);
average(1, '2');
average('1', 2);
average('1', 2, '3');
average(3, 2, 3);
average(2, 2, 3, 4);
const result: number = average(1, 2, 3);
