

import React, { Component } from "react";


export class UserCard extends Component {
    constructor(props) {

        super(props);

        this.state = {
            msg: "bla"
        };

        setTimeout(() => {
            this.setState({
                msg: "cao",
                moreMsg: "blablabla"
            })
        }, 2000)
    }

    render() {
        const { msg, moreMsg } = this.state;
        const { name } = this.props;
        return <h1> {msg} {name} {moreMsg}</h1>
    }
}

const root = document.querySelector(".root");
ReactDom.render(<UserCard name="BIT" />, root);

/*
const Hello = () => {   isto zapisano

    return <div> proba </div>
}

*/

class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false }
    }

    onClick = () => {
        this.setState({ selected: true })
    }

    render() {
        const cName = (this.state.selected) ? "star selected" : "star"
        return (
            <div className={cName} onClick={this.onClick}>
            </div>
        )
    }
}


///////////////////////////////////////////////////
//////////////////////////////////////////////////


import React, { Component } from "react";
import { fetchUsers } from "../../services/userService"

export class UserCard extends Component {
    constructor() {
        super();

        this.state = {
            user: { //prazan objekat, hocemo da dovucemo vrednosti sa API-ja
                //  name: "ime neko",
                // email: "pera.peric@gmail.com"
            }
        };
    }

    componentDidMount() { //iskoristicemo da pozovemo API i dovucemo podatke
        fetchUsers();
    }
}



const root = document.querySelector(".root");
ReactDom.render(<UserCard name="BIT" />, root);


// u servisu dodatna funkcija :

export const fetchUsers = () => {

    return fetch("https://randomuser.me/api/?results=1") //mozda treba return, mozda ne 
        .then((responseBrowserObject) => {
            response.json()
        })
        .then((responseJSONObject) => {
            const user = responseJSONObject.results[0]; // this.setUser(responseJSONObject.results[0])
            const email = user.email;
            const name = user.name.first;  // umesto const mozemo direktno da pisemo u state-u

            this.serState({ // stavljamo u state da bi se renderovala stranica
                user: {
                    name: name, //umesto value name mozemo da pisemo user.name.first       name: user.name.first,
                    email: email // user.email                                             email: user.email
                }
            })
            console.log(name, email);
        })
        .catch((error) => {
            console.error(error)

        })
}
/////////////////////////////////////////////////
///////////////////////////////////////////////////


export const fetchUsers = () => {

    return fetch("https://randomuser.me/api/?results=10")
        .then((response) => {
            response.json()
        })
        .then((responseData) => {
            const userResultat = responseData.results;
            return userResultat.map((userData) => {
                const { name, email, picture, dob } = userData;
                return new User(name.first, dob, picture.medium)
            })
        })
}

/////////////////////////

// novi fajl searchBar.js u partials
//ukljucuje se u App


import React from "react";




export class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ""
        }
    }

    handleChange = (event) => {
        const inputText = event.target.value;   // ako zelimo da sacuvamo vrednos inputa, moramo da sacuvamo u state-u
        console.log(inputText);

        this.setState({
            inputText
        })
    }



    render() {
        return <input type="text"
            onChange={this.handleChange}
            value={this.state.inputText}

        />
    }
}
////////////////////////////////////////////////
//////////////////////////////////////////////////

class UserCard extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this); //bind vraca novu funkciju
    }
    state = {
        inputValue: ""
    };

    users = ["pera", "zika", "mika", "laza"];

    handleChange = (event) => {
        console.log(this);

        console.log(event.target.value);

        this.setState({
            inputValue: event.target.value
        });
    }


    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />

                <div> first comp. </div>
                <div> second comp. </div>

                {this.users
                    .filter((userName) => {
                        userName.includes(inputValue) !== -1
                    })
                    .map((user) => {
                        return (
                            <h3 key={user}> {user} </h3>
                        )
                    })}
            </div>
        )
    }
}

/////////////////////
//////////////////////



export class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ""
        }
    }

    handleChange = (event) => {
        const inputText = event.target.value;   // ako zelimo da sacuvamo vrednos inputa, moramo da sacuvamo u state-u
        console.log(inputText);

        this.setState({
            inputText
        })
    }



    render() {
        return <input type="text"
            onChange={this.handleChange}
            value={this.state.inputText}

        />
    }
}
////////////////////////////////////////////////
//////////////////////////////////////////////////

class UserCard extends Component {

    state = {
        listView: true
    };


    handleChange = (event) => {
        console.log(this);

        console.log(event.target.value);

        this.setState({
            inputValue: event.target.value
        });
    }
    renderUsers = () => {
        if (this.state.listView) {
            return < div> list. </div>
        }
        return < div> grid. </div>
    }

    setLayOut = (view) => {    // moze i ovako da se radi...
        if (view === "list") {
            this.setState({ listView: true })
        } else {
            this.setState({ listView: false })
        }
    }
    setListView("grid");

    render() {
        const { inputValue } = this.state;
        return (
            <div>
                {this.renderUsers()}  // ili renderUsers ili listView

                {
                    listView
                        ? < div> list. </div>
                        : <div> grid</div>
                }


                {this.users
                    .filter((userName) => {
                        userName.includes(inputValue) !== -1
                    })
                    .map((user) => {
                        return (
                            <h3 key={user}> {user} </h3>
                        )
                    })}
            </div>
        )
        ///////////////////////////////////////////
        /////////////////////////////////////////////

        const Button = (props) => {

            return <button onCLick={() => { props.whenClicked(props.text) }}> {props.text}</button>
        }



        //novi nacin, ide posle setLayOut-a

        render = () => {
            const { listView } = this.state;

            return (
                <div>

                    <Button text="list" whenClicked={this.setLayOut} />
                    <Button text="list" whenClicked={this.setLayOut} />
                </div>
            )
        }

        ///////////////////////////
        ////////////////////////
        this.setState({ [event.target.name]: event.target.value }); // evaluira se na name ili content, u zavisnosti na sta smo kliknuli;


        /////////////////////////////////////////////
        /////////////////////////////////////////////
        // udjemo u index.js fajl

        import { HashRouter } from "react-router-dom";

        ReeacDom.render(
            <HashRouter>
                <App />
            </HashRouter >,
            document.getElementById("root")
        );
        registerServiceWorker();

////////////////////////////////
////////////////////////
//udjemo u applicationCache.js fajl

import {Route} from "react-router-dom";

return (
    <React.Fragment>
        <Header />
        <Route path="/" component={SearchBar} />


        </React.Fragment>

)