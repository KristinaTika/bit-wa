

    import { fetchUsers } from "./data.js";
    import { displayUsers, displayNoResults } from "./ui.js";
    
    export const init = () => {
        
        fetchUsers()
            .then((users) => {
                displayUsers(users);
            })
   }

   

   


  


