(()=> {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ):void;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Mario',
        age: 27,
        address: {
            id: 124,
            zip: 'WI WEST',
            city: 'Ottawa'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Maria',
        age: 45,
        address: {
            id: 124,
            zip: 'TO NO',
            city: 'Toronto'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }
})()