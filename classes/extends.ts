( ()=> {
    class Worker {
        constructor(
            public name: string,
            public workplace: string
        ) {
            console.log('Build Worker!!')
        }

        protected getFullName() {
            return `${this.name}`;
        }
    }

    class Freelancer extends Worker {
        constructor(
            name: string,
            workplace: string,
            public isWorker: boolean
        ){
            super(name, workplace);
            super.getFullName();
            console.log('Constructor Freelancer');
        }

        get fullName() {
            return `${this.name} - ${this.workplace}`;
        }
        set fullName( name: string) {
            if( name.length > 3 ) {
                throw new Error('Error name: < three characters')
            }
            this.name = name;
        }
    }  

    const frontendDeveloper = new Freelancer('Logan', 'Full Stack', true);

    console.log(frontendDeveloper.fullName);
    frontendDeveloper.fullName = 'Alexander';
 
})()