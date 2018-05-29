import * as data from "./data.js"
import * as ui from './ui.js'

// import { adaptData } from './data';
// import { displayError, displayUsers, showLoading } from './ui';

console.log(data);

const init = () => {
    ui.showLoading()
    data.fetchGitHubUsers()
        .then((users) => {
            console.log("users", users);
            ui.displayUsers(users)
            ui.showLoading(false)
        })
        .catch((error) => {
            ui.displayError(error)
            ui.showLoading(false)
        })
}

export { init }
