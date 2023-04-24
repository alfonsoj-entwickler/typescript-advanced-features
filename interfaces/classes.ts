(()=> {
    interface Worker {
        name: string;
        fullName: string;
        team(id:number): string;
    }

    interface Person {
        age: number;
    }

    class Frontend implements Worker, Person {
        public name: string;
        public fullName: string;
        public age: number;

        team( id: number) {
            return this.name + ' ' + this.age;
        }
    }
})()