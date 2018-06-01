const Header = (props) => {
    return (
        <header>
            <h2>props.appName</h2>
        </header>
    )
}

const Content = (props) => {
    return (
        <main>
            <h1> this is my app content </h1>
        </main>
    )
}

const App = (props) => {

    return (
        <div>
            <Header appName="app name"/>
            <Content />
        </div>
    )
}

const rootElement = document.querySelector(".root");

ReactDOM.render(<App />, rootElement);