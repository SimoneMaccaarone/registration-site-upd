
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
    const name=document.getElementById("name-input");
    const surname=document.getElementById("surname-input");
    //const gender=document.getElementById("gender-input").checked; if checkbox, always value if text or radio
    const gendermale=document.getElementById("male-input");
    const genderfemale=document.getElementById("female-input");
    const genderother=document.getElementById("other-input");
    const yob=document.getElementById("yob-input");
    const username=document.getElementById("user-name-input");
    const password=document.getElementById("password-input");
    const password_check=document.getElementById("confirm-password-input");
    const email=document.getElementById("email-input");
    const phonenumber=document.getElementById("phone-input");
    const _newsletter=document.getElementById("news-letter-input");
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
    if(password.value !== password_check.value){
       errorStr+=`${errorStr === ''?'Caro utente,':''} la password non è confermata correttamente. `;
   }
    if(password.value.length<8){
       errorStr+=`${errorStr === ''?'Caro utente, l':'L'}a password deve essere almeno lunga 8 caratteri `;
    }
    if(name.value.length<3 || surname.value.length<3 || username.value.length<3 ){
       errorStr+=`${errorStr === ''?'Caro utente, l':'L'}a informiamo che il nome, cognome e username richiedono un minimo di 3 caratteri per essere validi `;
    }
    const emailRegex = new RegExp('^(.+)@(.+)$')
    if(!emailRegex.test(email.value)){
       errorStr+=`${errorStr === '' ? 'Caro utente, l' : 'L'}a mail è incorretta `
    }
   
    if (gendermale.checked) {
        if(genderfemale.checked || genderother.checked){
            errorStr+=`${errorStr === ''?'Caro utente, i':'I'}l genere selezionato può essere solo uno`
        }
    }

    if (genderfemale.checked) {
        if(gendermale.checked || genderother.checked){
            errorStr+=`${errorStr === ''?'Caro utente, i':'I'}l genere selezionato può essere solo uno`
        }
    }

    if (genderother.checked) {
        if(genderfemale.checked || gendermale.checked){
            errorStr+=`${errorStr === ''?'Caro utente, i':'I'}l genere selezionato può essere solo uno`
        }
    }

    if(errorStr===''){
        const gender= gendermale.checked ? 'male': genderfemale.checked? 'female' : 'other';
       const newUser = new User(username.value, name.value, surname.value, email.value, password.value, yob.value, _newsletter.checked, gender, phonenumber.value);
       newListOfUsers.addUser(newUser);
       console.log('newUser', newUser);
       console.log(newListOfUsers);
       UsersService.postUser(newUser);
   
 
    }
     else
     {
       errorStr += 'Riprova inserendo i dati corretti, grazie!';
       displayError.style.display = 'block';
       displayError.innerHTML = errorStr;
     }
          
    name.value= '';
    surname.value= '';
    if(gendermale.checked) {
        gendermale.checked = !gendermale.checked;
    } else if(genderfemale.checked){
        genderfemale.checked = !genderfemale.checked;
    } else if(genderother.checked){
        genderother.checked = !genderother.checked;
    }
    yob.value= '';
    username.value= '';
    password.value= '';
    password_check.value= '';
    email.value= '';
    phonenumber.value= '';
   
}
   

   // /* * AGGIUNTE CHERUBINI **/
   // #error-display{
   //     display: none;
   //     text-shadow: 2px 2px 12px rgba(248, 248, 255, 0.8);
   //     color: rgb(197, 0, 0);
   // }  E DIV CON ID displayError
