
const p1 = new Promise((resolve, reject) => {

    setTimeout(resolve, 2000);

});

p1.then(() => {
    console.log("success");
});

p1.catch(() => {
    console.log("failed");
});


///////////////////// moze da se zapise i ovako:

const p1 = new Promise((resolve, reject) => {

}).then(() => console.log("success")).catch(() => console.log("failed"));

//////////////////////////////////////////////////////////

const a = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);

});

const b = new Promise((resolve, reject) => {
    setTimeout(reject, 1000);

});

const c = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);

});

Promise.all([a, b, c])

    .then(() => console.log("all done"))  // izvrsice se tek nakon 3 sekunde
    .catch(() => console.log("all failed")); // izvrsice se nakon sekunde 

Promise.race([a, b, c])
    .then(() => console.log("all done")) // ako zelimo da se prvi promise izvrsi, pisemo race
    .catch(() => console.log("all failed"));

/////////////////////////////////////////////////////////////
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hey");
    }, 3000);
})
    .then((msg) => console.log(msg))
    .catch(() => console.log("all is rejected"));


//////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("message for error(catch)"); // ne mora da bude string, moze biti bilo sta, objekat, bilo koji tip poadatka podrzan u JS-u;
    }, 3000);
})
    .then((msg) => console.log(msg)) // then je isto kao done u ajax-u kada saljemo request serveru;
    .catch(() => console.log(error));

////////////////////////////////////////////////////////////


new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("eeee");
    }, 3000);
})
    .then((msg) => console.log(msg))
    .catch(() => console.log(error))
    .finally(() => console.log("sdasdadad")); // u ovom slucaju izvrsice se i reject i finally;

////////////////////////////////////////////////////

// lancanje promisa

new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
})
    .then((msg) => new Promise((success, fail) => {
        setTimeout(success, 1000);
    }))
    .then(() => console.log("after first two"))
    .catch(() => console.log(error))
    .finally(() => console.log("sdasdadad"));   // ukupno vremena koliko treba da prodje pre nego sto se izvrse promisi je 3 sekunde;

/////////////////////////////////////

new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
})
    .then((msg) => new Promise((success, fail) => {
        setTimeout(success, 1000);
    }))
    .then((msg) => new Promise((res, rej) => {
        setTimeout(res, 3000);
    }))
    .then(() => console.log("after first three"))
    .catch(() => console.log(error))
    .finally(() => console.log("tralalala"));  // izvrsice se posle 6 sekundi;

////////////////////////////////////////

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

const p2 = new Promise((success, fail) => {
    setTimeout(() => success("second"), 1000);
});

const p3 = new Promise((resolve, rej) => {
    setTimeout(() => resolve(3), 3000);
});

Promise.all([p1, p2, p3])
    .then((resolvedData) => console.log(resolvedData))
    .catch(() => console.log(error)) // dobijamo u konzoli Array sa vrednostima koje smo resolve-ovali;

//////////////////////////////////////////////////////

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

const p2 = new Promise((success, fail) => {
    setTimeout(() => success(), 1000);
});

const p3 = new Promise((resolve, rej) => {
    setTimeout(() => resolve(3), 3000);
});

Promise.all([p1, p2, p3])
    .then((resolvedData) => console.log(resolvedData))
    .catch(() => console.log(error)) // dobicemo u konzoli Array sa vrednostima koje smo resolve-ovali (za drugi promise pisace undefined jer nismo napisali argumente);

/////////////////////////////////////////////////


const p1 = new Promise((resolve, reject) => {
    //async

    $.get("http://thecatapi.com/api/images/get")
    .done((response) => resolve(response))

});

const p2 = new Promise((success, fail) => {
    $.get("http://thecatapi.com/api/images/get")
    .done((response) => success(response))
});

const p3 = new Promise((res, rej) => {
    $.get("http://thecatapi.com/api/images/get")
    .done((response) => res(response))
});

const cats = Promise.all([p1, p2, p3])
    .then((response) => {
        cats.forEach((cat) =>{

            let p = $("<p>");
            p.html("response");
            const body = $("body");
            body.append(p);
        })
    })
    .catch(() => console.log(error))



















