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


//<button id="save-btn" onclick=" createUser()">SAVE</button>

function createUser(){
    const name=document.getElementById("name-input").value;
    const surname=document.getElementById("surname-input").value;
    //const gender=document.getElementById("gender-input").checked; if checkbox, always value if text or radio
    const gender=document.getElementById("gender-input").value;
    const yob=document.getElementById("yob-input").value;
    const username=document.getElementById("user-name-input").value;
    const password=document.getElementById("password-input").value;
    const password_check=document.getElementById("confirm-password-input").value;
    const email=document.getElementById("email-input").value;
    const phonenumber=document.getElementById("phone-input").value;
    const _newsletter=document.getElementById("news-letter-input").checked;
    //ADD A HIDDEN DIV!! <div id="error-display"></div> after REGISTRATION BOX in registration page, css display hidden
    const displayError=document.getElementById("error-display");
    displayError.style.display = "none";
   //  console.log(name);
   //  console.log(surname);
   //  console.log(gender);
   //  console.log(yob);
   //  console.log(username);
   //  console.log(password);
   //  console.log(password_check);
   //  console.log(email);
   //  console.log(phonenumber);
   //  console.log(_newsletter);
   
    console.log('test');
    displayError.innerHTML=``;
       let errorStr='';
    if(password !== password_check){
       errorStr+=`${errorStr === ''?'Caro utente,':''} la password non è confermata correttamente. `;
   }
    if(password.length<8){
       errorStr+=`${errorStr === ''?'Caro utente, l':'L'}a password deve essere almeno lunga 8 caratteri `;
    }
    if(name.length<3 || surname.length<3 || username.length<3 ){
       errorStr+=`${errorStr === ''?'Caro utente, l':'L'}a informiamo che il nome, cognome e username richiedono un minimo di 3 caratteri per essere validi `;
    }
    const emailRegex = new RegExp('^(.+)@(.+)$')
    if(!emailRegex.test(email)){
       errorStr+=`${errorStr === '' ? 'Caro utente, l' : 'L'}a mail è incorretta `
    }
   
    if(errorStr===''){
       const newUser = new User(username, name, surname, email, password, yob, _newsletter, gender, phonenumber);
       newListOfUsers.addUser(newUser);
       console.log(newUser);
       console.log(newListOfUsers);
       displayListOfUsers();
   
       name.value= '';
       surname.value= '';
       gender.value= '';
       yob.value= '';
       username.value= '';
       password.value= '';
       password_check.value= '';
       email.value= '';
       phonenumber.value= '';
       _newsletter.checked= false;
    }
     else
     {
       errorStr += 'Riprova inserendo i dati corretti, grazie!';
       displayError.style.display = 'block';
       displayError.innerHTML = errorStr;
     }
   
   
   }
   
   // /* * AGGIUNTE CHERUBINI **/
   // #error-display{
   //     display: none;
   //     text-shadow: 2px 2px 12px rgba(248, 248, 255, 0.8);
   //     color: rgb(197, 0, 0);
   // }  E DIV CON ID displayError
