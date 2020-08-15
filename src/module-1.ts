function sleep(ms: number) {
    return new Promise((resoleve) => {
        setTimeout(resoleve, ms);
    })
}

async function* getItemsReallySlowly(items: Iterable<any>): AsyncIterableIterator<any> {
    for (const item of items) {
        await sleep(500);
        yield  item;
    }
}

export async function speakLikeSloth1(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}


