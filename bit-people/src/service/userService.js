import { User } from "../entities/User";

export const fetchUsers = () => {

    return fetch("https://randomuser.me/api/?results=15")
        .then((response) => {
            return response.json()
        })
        .then((res) => {
            const userData = res.results;
            return userData.map((user) => {
                return new User(user.name.first, user.email, user.dob, user.picture.large, user.gender)
            })
        })
        .catch((error) => {
            console.log(error)

        })
}
