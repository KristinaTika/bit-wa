import {fetchData} from "./data.js";
import {displayData} from "./ui.js";
export const init = () => {

    fetchData()
    .then((data) =>{
        console.log(data)
        displayData(data);
    })
}