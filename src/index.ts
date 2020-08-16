import { Debounce, LogErrorToServe, LogEvent, SavePersistence } from './decorators';

class Search {

    @SavePersistence
    public initValue!: string;

    public constructor(
        private readonly inputElement: HTMLInputElement
    ) {
        this.inputElement.addEventListener('input', this.onSearch.bind(this))
        console.log('Send to server ===>', this.initValue)
    }

    @Debounce(300)
    @LogEvent
    @LogErrorToServe
    private onSearch(_event: Event) {
        this.initValue = (_event.target as HTMLInputElement).value;
    }
}

const inputElem: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
new Search(inputElem);
