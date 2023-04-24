(()=> {

    interface Worker {
        name: string;
        age?: number;
        teams: number [];
        getName?: () => string;
    }

    let frontend: Worker = {
        name: 'Barry Torr',
        age: 24,
        teams: [3, 67]
    }

    let backend: Worker = {
        name: 'Ken Maxi',
        age: 456,
        teams: [34, 59],
        getName () {
            return this.name;
        }
    }
})()