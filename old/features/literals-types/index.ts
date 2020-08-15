// const a = 10;
// let c: typeof a = 1;

// let num: 1 | 2 | 3 | 4 | 5 = 20
// interface AnimationOptions {
//     delay: number;
//     animation: 'ease-in' | 'ease-out';
// }
//
// function animate(options: AnimationOptions) {
//     if (options.animation === 'ease-in') {
//
//     }
// }
//
// animate({delay: 2000, animation: 'asdasdasd'})
interface IFact {
    factId: number,
    userId: number,
    description: string
}
let id: IFact['factId'] = '12';


// type FactAction =  { action: string, data: IFact };
interface IFactAction { action: string, data: IFact };
const dataList: IFactAction[] = [];

const uniqueValue = (): keyof IFact => { // 'factId' |  'userId' | 'description'
    return 'factId';
}

dataList.map((item) => {
    if (item.data[uniqueValue()] === 2) {

    }
    return item;
})
