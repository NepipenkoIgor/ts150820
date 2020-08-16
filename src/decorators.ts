export function LogEvent(
    _target: object,
    _key: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    // console.log('dec LogEvent init')
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value: function (e: Event) {
            // console.log('dec LogEvent')
            const inputRef = e.target as HTMLInputElement;
            console.log(inputRef.value);
            originalValue.call(this, e);
        }
    }
}

export function LogErrorToServe(
    _target: object,
    _key: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    // console.log('dec LogErrorToServe init')
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value: function (e: Event) {
            try {
                // console.log('dec LogErrorToServe')
                originalValue.call(this, e);
            } catch (err) {
                // http send error stack trace
                console.log(err);
            }
        }
    }
}

export function Debounce(ms: number) {
    let timeId: number | null;
    return (
        _target: object,
        _key: string,
        descriptor: PropertyDescriptor
    ) => {
        // console.log('dec Debounce init')
        const originalValue = descriptor.value;
        descriptor.value = function (this, ...args: unknown[]) {
            // console.log('dec Debounce')
            if (timeId) {
                clearTimeout(timeId);
            }
            timeId = setTimeout(() => {
                originalValue.call(this, ...args);
            }, ms)
        }
    }
}

export function SavePersistence(target: any, key: string) {
    const locaLKey = `${target.constructor.name}_${key}`;

    const getter = () => {
        return localStorage.getItem(locaLKey);
    }

    const setter = (newValue: string) => {
        localStorage.setItem(locaLKey, newValue);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
};
