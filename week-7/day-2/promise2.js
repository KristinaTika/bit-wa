const p1 = new Promise((resolve, reject) => {
    $.get("http://thecatapi.com/api/images/get?format=xml")
    .done((response) => {
       const src = $(response).find("url").text();
        resolve(src); // src prosledjeno preko resolve-a p1;
    
    })

});

const p2 = new Promise((success, fail) => {
    $.get("http://thecatapi.com/api/images/get?format=xml")
    .done((response) => {
       const src = $(response).find("url").text();
       success(src); // src prosledjeno preko success-a p2;
    
    
    })
});

const p3 = new Promise((res, rej) => {
    $.get("http://thecatapi.com/api/images/get?format=xml")
    .done((response) => {
       const src = $(response).find("url").text();
       res(src);   // src prosledjeno preko res-a p3;
    
    }).fail(() => {
        rej(err)
    })
});


Promise.all([p1, p2, p3])
    .then((cats) => { // cats predstavlja niz [p1, p2, p3]
        cats.forEach((cat) =>{ 

            let image = $("<img>");
            image.attr("src", cat); // cat ima vrednost src-a preko callback funkcije resolve/success/res;
            const body = $("body");
            body.append(image);
        })
    })
    .catch((err) => console.log(err));


