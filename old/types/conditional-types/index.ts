// T extends U ? X: Y;

// type noUndefined<T> = T extends undefined ? never : T;
// type nu = number | undefined
// let sn: noUndefined<nu> = 's'  // number
//
//
// const arr: [number, () => number | null];
//
// type FirstElReturnType<T> =
//     T extends [infer U, ...unknown[]]
//         ? U extends (...args: any[]) => infer R ? R : T
//         : T
//
// let a: FirstElReturnType<number> = 's'
//
// let a: Exclude<any, any>

function fn(_a: string, _b: number): boolean[] {
    return [true];
}

type  NonFunction<T> = T extends Function ? never : T;
type FnReturnAndParam<T> = T extends (...args: infer Args) => infer R
    ? NonFunction<Args[keyof Args]> | R
    : never;

const c: FnReturnAndParam<typeof fn> = null;

interface Person {
    name: string;
    age: number;
}

let p: Person[keyof Person] = true;
