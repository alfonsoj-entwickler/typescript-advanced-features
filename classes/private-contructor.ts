(()=> {
    class Company {
        static instance: Company;

        private constructor(
            public name: string
        ) {

        }

        static callCompany(): Company {
            if( !Company.instance ) {
                Company.instance = new Company('A new company ...');
            }
            return Company.instance;
        }

        changeName( newName: string): void {
            this.name = newName;
        }
    }

    const company1 = Company.callCompany();
    const company2 = Company.callCompany();
    const company3 = Company.callCompany();
    const company4 = Company.callCompany();

    company1.changeName('company1');

    console.log(company1, company2, company3, company4);
})()