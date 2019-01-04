export class User {
    constructor(
        public id: number,
        public name: string,
        public place: string
    ) { }
}
export class Users {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
    ) { }
}