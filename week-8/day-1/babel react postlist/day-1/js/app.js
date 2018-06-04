/*
App --> Header
        UserList
        PostItem
<App>
    <Header />
        <UserList>
            <UserItem />
        </UserList>
    </Footer>
</App>
*/


const Header = (props) => {
    const headline = props.myTitle;
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">{headline}</a>
                </div>
            </nav>
        </header>
    )
}

const UserItem = (props) => {
    const singleUser = props.myUser;
    const {picture, name,email,dob} = props.myUser;
    return (
        <div>
            <li>
                <div className="col s12 ">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <img src={picture.thumbnail}></img>
                            <span className="card-title"> {name.first}</span>
                            <p> {email}</p>
                            <p> {dob}</p>
                        </div>
                        
                    </div>
                </div>
            </li>
        </div>
    )
}

const UserList = (props) => {
    const userList = props.myUsers;
    return (

        <ul>
            {userList.map((user) => {
                return <UserItem key={user.name.first} myUser={user} />
            })}
        </ul>
    )
}

const Footer = (props) => {

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright Bit
                </div>
            </div>
        </footer>
    )
}

const App = (props) => {
    const users = props.data; //data iz App-a, niz my posts;

    return (
        <React.Fragment>
            <Header myTitle={"React Users"} />
            <UserList myUsers={users} />
            <Footer />
        </React.Fragment>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App data={usersData} />, root);



/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

