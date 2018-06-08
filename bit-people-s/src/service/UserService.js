import { usersEndpoint } from "../shared/Constants";
import { storageService } from "../shared/StorageService"
import { fetchService } from "../shared/FetchService";
import User from "../models/User";



class UserService {

    getUsers() {
        return !!storageService.read("allUsers")
            ? this.loadUsers()
            : this.fetchUsers()
    }

    fetchUsers() {
        return fetchService.get(usersEndpoint)
            .then((usersData) => {
                // adaptUserData
                const userList = this.adaptData(usersData.results);
                storageService.save("allUsers", userList);
                return userList
            })

    }


    loadUsers() {   // ne vraca promise, zato moramo da vratimo novi Promise;
        const myUsers = storageService.read("allUsers"); //nase user instance koje nemaju picture.medium, vec samo picture
        return new Promise((resolve, reject) => {
            resolve(this.adaptData(myUsers))
        })
    }

    adaptData(usersList) {
        return usersList.map((user) => {
            const {name, email, picture, dob, gender} = user
            return new User( name,email, picture, dob, gender);
        })
    }

}
export const userService = new UserService();