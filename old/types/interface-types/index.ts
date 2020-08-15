/****implementation in class**/
// interface IX {
//     x: number;
// }
//
// type IY = {
//     y: number;
// }
//
// class Point implements IX, IY {
//     x: number = 1;
//     y: number = 1;
// }

/****Object / Functions**/

// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
// let p: TPoint = {
//     x: 10,
//     y: 20
// }
//
// interface SetPoint {
//     (x: number, y: number): number
// }
//
// type spt1 = (x: number, y: number) => number
// type spt2 = { (x: number, y: number): number }
//
// const sp: spt2 = (_a, _b) => {
//     return 1;
// }
// type CB = (x: number, y: number) => number
//
// function calc(a: number, b: string, cb: CB) {
//     return cb(a, Number(b));
// }
//
// function fn(x: number) {
//     return x;
// }
//
// calc(1, '2', fn);

/**** extends **/
// type TX = {
//     x: number;
// }
//
// type TY = {
//     y: number;
// }
//
// type TP = TX & TY;
// interface IX {
//     x: number;
// }
//
// interface IY {
//     y: number;
// }
//
// interface IPoint extends IX, TY {
//
// }
//
// type TPoint = TX & IY;
//
// let p: TPoint = {
//     x: 1,
//     y: 2
// }

// type TPoint = { x: number };
// type TPoint = { y: number };
// type LitType = 'x' | 'y'
//
// class Point implements IPoint {
//     x: number = 1;
//     y: number = 2;
// }
//
// interface IPoint {
//     x: number
// };
//
//
// interface IPoint {
//     y: number
// };

interface User {
    name: string;
    surname: string;

    getFullName(): string;
}

let u1: User = {
    name: 'Ihor',
    surname: 'Nepipenko',
    getFullName(): string {
        return `${this.name} ${this.surname}`
    }
}

type snb = string | number | boolean;
