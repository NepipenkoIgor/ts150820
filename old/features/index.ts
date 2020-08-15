let c = 1;
const baseUrl = 'http://localhost';

/**object */
let firstName = 'Ihor';

let account = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/** spred  */
let person = {...account};
let dates = [...[1, 2, 3]]

/**** */
let {firstName: username} = account;
let [firstDate] = dates;

/***for of */
for (const date of dates) {
    console.log(date);
}

/*** */
class Person {
    #myname = 'Ihor';

    get myName() {
        return this.#myname;
    }
}

/*** */
let sum = (a: number, b: number) => a + b;

/**template  */
function userMessage([star, end]: TemplateStringsArray, {firstName}: typeof person) {
    return `${star}${firstName}${end}`
}

console.log(userMessage`Good day ${person} !!!`)

/** */
let user: any = {};
let x = user?.info?.getAge()

/** */
let admin;
let p = admin ?? user;


let a = [1, 2].includes(1);
