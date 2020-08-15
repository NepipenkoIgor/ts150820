let anyType: any = {};
anyType.a = 1;
anyType();
anyType = 2;
anyType['a'] = 2;

let unkType: unknown = {};
unkType.a = 1;
unkType();
unkType = 2;
unkType['a'] = 2;
unkType = () => {
};

let v: void = undefined;

function fn(): never {
    throw new Error();
}

// let objType: Object = {};
// objType.a = 1;
// objType();
// objType = 2;
// objType['a'] = 2;
//
// Object.create(objType);
//
// let obj1Type: object = {};
// obj1Type.a = 1;
// obj1Type();
// obj1Type = 2;
// obj1Type['a'] = 2;
// Object.create(obj1Type);
