class User{

    constructor(userName, name, surname, email, password, yob, newsletterSub = false, gender, phone, id){
        this._userName = userName;
        this.name = name;
        this.surname = surname;
        this._email = email;
        this._password = password;
        this._newsletterSub = newsletterSub;
        if(yob){
            this._yob = yob;
        };
        if(gender){
            this.gender = gender;
        };
        if(phone){
            this._phone = phone;
        };
        if(id !== undefined){
            this.id = id;
        };
    };

    get userName(){
        return this._userName;
    };

    set userName(newUserName){
        return this._userName = newUserName;
    }

    get email(){
        return this._email;
    };

    set email(newEmail){
        return this._email = newEmail;
    }

    get password(){
        return this._password;
    };

    set password(newPassword){
        return this._password = newPassword;
    };

    get yob(){
        return this._yob;
    };

    set yob(newYob){
        return this._yob = newYob;
    }

    get newsletterSub(){
        return this._newsletterSub;
    };

    set newsletterSub (status){
        if(typeof status === "boolean"){
            this.newsletterSub === status;
            return this.newsletterSub;
        };
        return this.newsletterSub;
    }

    get phone(){
        return this._phone;
    };

    set phone(newPhone){
        return this._phone = newPhone;
    };

    static newUserFromObject(userObject){
        const newUser = new User(userObject.userName, userObject.name, userObject.surname, userObject.email, userObject.password, userObject.yob, userObject.newsletterSub = false, userObject.gender, userObject.phone, userObject.id);
        return newUser;
    };

    get ifIsSubToNewsletter(){
        if(this._newsletterSub === true){
            return "User subscribed";
        }else if(this._newsletterSub === false) {
            return "Not subscribed user";
        };
    };

    tiDbModel() {
        const dbModel = {
            userName: this._userName,
            name: this.name,
            surname: this.surname,
            email: this._email,
            password: this._password,
            yob: this._yob,
            newsletterSub: this._newsletterSub,
            gender: this.gender,
            phone: this._phone,
            id: this.id
        };
        return dbModel;
    };

}