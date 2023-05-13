class ListOfUsers{

    constructor(usersArray = []){
        this.usersArray = usersArray;
    };

    addUser(newUser){
        this.usersArray.push(newUser);
    };

    removeUser(user){
        this.usersArray.filter((element) => element !== user);
    };

    static newListOfUsersFromObject(objectArray){
        const newArray = new ListOfUsers();
        for (let i = 0; i < objectArray.length; i++) {
            const user = objectArray[i];
            const newUser = new User.newUserFromObject(user);
            newArray.addUser(newUser);
        };
        return newArray;
    };

}