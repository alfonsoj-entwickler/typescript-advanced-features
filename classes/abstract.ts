(()=> {

    abstract class Worker {
        constructor(
            public name: String,
            public team: String
        ) {}
    }

    class FrontendDeveloper extends Worker {
        whatToDo () {
            return 'nice animation';
        }
    }

    class BackendDeveloper extends Worker {
        whatTodo () {
            return 'build a database'; 
        }
    }

    const frontend = new FrontendDeveloper('Alex', 'Team2');
    const backend = new BackendDeveloper('Victor', 'Team Alpha');

    const printName = ( character: Worker) => {
        console.log(character.name);
    }

    printName(frontend);
    printName(backend);
})()