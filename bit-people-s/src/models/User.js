export default class User {
    constructor(name, email, picture, dob, gender) {
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.dob = dob;
        this.gender = gender;
    }

    getHiddenMail () {
        // to do: hide mail

        return this.email
    }
}