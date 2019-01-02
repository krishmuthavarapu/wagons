export class Details {
    constructor(
        public name: string,
        public marks: {
            Maths: number,
            English: number,
            Science: number
        },
        public rollNumber: string
    ) { }
}