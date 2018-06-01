const myVegetables = ['carrot', 'tomato', 'cucumber', 'bean']
const Header = (props) => {

    return (
        <footer> moj prvi footer u React-u </footer>
    )
}



const ProductItem = (props) => {
    return <li>{props.product}</li>
}

const ProductList = (props) => {
    const productList = props.products;
    return (
        <ul>
            {productList.map(ing => {
              return <ProductItem product={ing} />  
            })}
        </ul>
    )
}


const Content = (props) => {

    return (
        <main>
            <h1> Moj prvi naslov u React-u </h1>
            <ProductList products={myVegetables} />
        </main>
    )
}

const App = (props) => {

    return (
        <div>
            <Header />
            <Content />
        </div>
    )

}

const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement);






/*const Kristina = () => {

    return <header>kristina &#9762; steva - project</header>
}
const Steva = () => {
    return <article>tralalalalala</article>
}



const App = () => {


    return (
        <div>
            <Kristina />
            <Steva />
        </div>
    )
}


const root = document.querySelector('.root');

ReactDOM.render(<App />, root);*/

