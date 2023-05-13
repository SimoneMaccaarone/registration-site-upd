const newListOfUsers = new ListOfUsers()

UsersService.getUsersServive().then(data => {
    fillUsersToList(data);
    displayListOfUsers();
});

function fillUsersToList(data){
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const newUser = new User(user.userName, user.name, user.surname, user.email, user.password, user.yob, user.newsletterSub, user.gender, user.phone, user.id);
        newListOfUsers.addUser(newUser);
    };
};

function displayListOfUsers(){

    const boxList = document.getElementById('box-list');
    boxList.innerHTML = '';
    const usersArray = newListOfUsers.usersArray;
    for (let i = 0; i < usersArray.length; i++) {
        const user = usersArray[i];
        boxList.innerHTML += `<div class='user-box'>
                                <h2>${user.userName}</h2>
                                <ul class='user-list'>
                                    <li class='user'>Name: ${user.name}</li>
                                    <li class='user'>Surname: ${user.surname}</li>
                                    <li class='user'>E-Mail: ${user.email}</li>
                                    <li class='user'>Newsletter: ${user.ifIsSubToNewsletter}</li>
                                    ${(user.yob)? `<li class='user'>Year of birth: ${user.yob}</li>` : ''}
                                    ${(user.gender)? `<li class='user'>Gender: ${user.gender}</li>` : ''}
                                    ${(user.phone)? `<li class='user'>Phone number: ${user.phone}</li>` : ''}
                                </ul>  
                              </div>`;
    };

}

