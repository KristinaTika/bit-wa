import { User } from "../entities/User";

export const fetchUsers = () => {

    return fetch("https://randomuser.me/api/?results=15")
        .then((response) => {
            response.json()
        })

        .then((res) => {
            const userData = res.results;
            userData.map((user) => {
                return new User(user.name.first, user.email, user.dob, user.picture.large)
                console.log(user);
            })
            
        })
        .catch((error) => {
            console.log(error)

        })
}
