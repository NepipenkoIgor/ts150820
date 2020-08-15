// interface/types/functions/class
interface IAccount<Info extends { male: boolean }, Id = number> {
    id: Id;
    name: string;
    info: Info
}

let user: IAccount<{ male: boolean }> = {
    id: 1,
    name: 'Ihor',
    info: {
        male: true
    }
}

interface IAdminInfo {
    male: boolean;
    subjects: string[];
}

let admin: IAccount<IAdminInfo, string> = {
    id: 'asdasdasd1231',
    name: 'Ihor',
    info: {
        male: true,
        subjects: ['ts', 'js']
    }
}
// let a: Array<number> = [1, 2, 3]
// let c: number = a.pop() as number;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const k = 'key1';
let a: number = getProperty(user, 'info');
