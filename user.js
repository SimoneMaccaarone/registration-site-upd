class User{

    constructor(userName, name, surname, email, password, yob, newsletterSub = false, gender, phone){
        this.userName = userName;
        this.name = name;
        this.surname = surname;
        this._email = email;
        this._password = password;
        this._yob = yob;
        this.newsletterSub = newsletterSub;
        this.gender = gender;
        this_phone = phone;
    };

}