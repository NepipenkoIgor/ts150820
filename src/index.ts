// class Point {
//     // public readonly x!: number;
//     // public readonly y!: number;
//     // public constructor(x: number, y: string);
//     // public constructor(x: string, y: number);
//     public constructor(
//         public readonly x: string | number,
//         protected readonly y: string | number,
//         private readonly z: string | number,
//     ) {
//         // this.x = x;
//         // this.y = y;
//     }
//
//     // public onInit() {
//     //     this.x = 1;
//     //     this.y = 2;
//     // }
//
//     public sumCoords(): number {
//         return Number(this.x) + Number(this.y) + Number(this.z);
//     }
// }
//
// const p = new Point(1, '2');
// const p1 = new Point('1', 2);

// type sn = string | number;
//
// interface IX {
//     readonly  x: sn;
// }
//
// interface ISum {
//     sumCoords(): number;
// }
//
// class BasePoint {
//
//     #e: number
//
//     public constructor(
//         public readonly x: string | number,
//         protected readonly y: string | number,
//         private readonly z: string | number,
//         e: number,
//     ) {
//         this.#e = e;
//     }
//
//     public sumCoords(): number {
//         return Number(this.x) + Number(this.y) + Number(this.z) + Number(this.#e);
//     }
// }
//
// class Point extends BasePoint implements IX, ISum {
//     public constructor(x: sn, y: sn, z: sn, e: number) {
//         super(x, y, z, e);
//     }
// }
//
// const p = new Point(1, 1, 2, 3);

//
// class Singleton {
//     private static _instance: Singleton;
//
//     private constructor() {
//     }
//
//     public static get instance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }
//
// const inst1 = Singleton.instance;
// const inst2 = Singleton.instance;
// const inst3 = Singleton.instance;
// const inst4 = Singleton.instance;
// const inst5 = Singleton.instance;
//
// console.log(inst1 === inst5);
// console.log(inst3 === inst4);

// type Constructable = new (...args: any[]) => any;
//
// function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
//     return class extends BC {
//         public timestamp = new Date();
//     }
// }
//
// function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
//     return class extends BC {
//         public tags = ['ts', 'js'];
//     }
// }
//
// class Subject {
//     public constructor(
//         public readonly teacher: string
//     ) {
//     }
// }
//
// class User extends Timestamped(Tagged(Subject)) {
//
// }
//
// let u = new User('Ihor Nepipenko');
// console.log(u.tags);
// console.log(u.timestamp);
// console.log(u.teacher);


// abstract class AbstractControl<T> {
//     public abstract model: T[];
//
//     public abstract getValue(): T[];
//
//     public onFocus() {
//
//     }
//
//     public onBlur() {
//
//     }
// }
//
// class MHDropDown extends AbstractControl<{ name: string, value: string }> {
//     public model = [];
//
//     public getValue(): { name: string; value: string }[] {
//         return [];
//     }
// }

// class C {
//     doSome1(): this {
//         return this;
//     }
//
//     doSome2(): this {
//         return this;
//     }
// }
//
// let c = new C();
// c.doSome1().doSome2();

// function getFullName(this: { name: string, surname: string }) {
//     return `${this.name} ${this.surname}`
// }
//
// let account = {
//     name: 'Ihor',
//     surname: 'Nepipenko',
//     getFullName
// }
//
// const fullName = account.getFullName();
//
//
// class UIElement {
//     public addClickListener(_onclick: (this: this, event: Event) => void) {
//
//     }
// }
//
// class Handler {
//     info: string = '';
//
//     onClick(this: this, _e: Event) {
//         this.info = 'some text';
//     }
// }
//
// const h = new Handler();
// const el = new UIElement();
//
// el.addClickListener(h.onClick)
