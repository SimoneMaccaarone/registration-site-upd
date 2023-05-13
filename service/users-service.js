class UsersService{

    static BASE_URL = './mock-data/mock-users.json';

    static getUsersServive(){
        return fetch(this.BASE_URL).then(resp => resp.json());
    };

}