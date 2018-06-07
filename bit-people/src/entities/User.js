class User {
    constructor(name, email, dob, photo, gender) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.photo = photo;
        this.gender = gender;
    }

    getUserEmail() {
        const emailArr = this.email.split('@');
        emailArr[0] = emailArr[0].slice(0, 3) + '...';
        return emailArr.join('@');
    }
    getDate() {
        const date = new Date(this.dob).toDateString().split(" ");
        const newDate =`${date[1]} ${date[2]} ${date[3].slice(2)}`;
        return newDate; 
    }
}

export { User };

