export function createProfile() {
    return {
        name: 'Aki'
        , age: 24
    };
}

export class Profile {
    name;
    age;

    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    greetings() {
        return "Hello My name is " + this.name +" I'm "+this.age +' year old';
    }
}

