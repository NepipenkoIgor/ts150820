// import { CheckTypeInRuntime, Debounce, LogErrorToServe, LogEvent } from './decorators';
//
// class Search {
//
//     // @SavePersistence
//     @CheckTypeInRuntime
//     public initValue: string = '';
//
//     public constructor(
//         private readonly inputElement: HTMLInputElement
//     ) {
//         this.inputElement.addEventListener('input', this.onSearch.bind(this))
//         console.log('Send to server ===>', this.initValue)
//     }
//
//     @Debounce(300)
//     @LogEvent
//     @LogErrorToServe
//     private onSearch(_event: Event) {
//         this.initValue = (_event.target as HTMLInputElement).value;
//     }
//    
// }
//
// const inputElem: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
// const s = new Search(inputElem);
//
//
// setTimeout(() => {
//     (s.initValue as any) = 1;
// }, 5000)


import { Validate, Range } from './utils';

class Calculator {
    @Validate
    public updatePercentage(
        _oldValue: number,
        @Range(30, 70)  _newValue: number
    ) {
    }
}

const calc = new Calculator();
calc.updatePercentage(0, 50);

setTimeout(() => {
    console.log('set errored value')
    calc.updatePercentage(50, 90);
}, 5000)
