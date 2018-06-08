 class FetchService {

    get(url) {
        return fetch(url)                 
            .then((response) =>{
               return response.json()
            })
    }

    post() {

        
    }




}


export const fetchService = new FetchService()