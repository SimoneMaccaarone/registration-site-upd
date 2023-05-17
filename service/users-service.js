// fetch finale:

class UsersService{

    static BASE_URL = 'https://my-first-api-devops-nrj0fgwn8-sunshinemocha.vercel.app/users';

    static getUsersServive(){
        return fetch(this.BASE_URL).then(resp => resp.json());
    }

    static postUser(user){ 
        const jsonUser = JSON.stringify(user.toDbModel());
        return fetch(this.BASE_URL,{method: 'POST', headers: {'content-type':'application/json'}, body: jsonUser});
    }

}

// fetch di prova:

// class UsersService{

//     static BASE_URL = './mock-data/mock-users.json';

//     static getUsersServive(){
//         return fetch(this.BASE_URL).then(resp => resp.json());
//     };

//}

