(() => {
    class Worker {
        static country: string = 'GE';
        static getCountry() {
            return this.country;
        }

        constructor(
            private workplace: string = 'home', 
            private team: string, 
            public name?: string
        ) {}

        public bio() {
            return `${this.name} ${this.team}`
        }

    }

    const worker1: Worker = new Worker('IT Consultant', 'Computer', 'Alexander');
    console.log(worker1);
    console.log(Worker.country);
})()