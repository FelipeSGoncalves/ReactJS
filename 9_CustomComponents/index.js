const root = ReactDOM.createRoot(document.getElementById("root"))

/** Os componentes são a base da construção de interfaces de usuário reutilizáveis e modulares. 
 * Crie a função que representará o seu componente(Importante sempre ter a primeira letra maiúscula)
 * No código JSX retornado pela função, você pode usar elementos HTML, outros componentes e expressões JavaScript
 * Em um componente pai, dentro do retorno da função render() ou da função de um componente baseado em função
 * utilize o nome do componente criado como um elemento JSX.
 * */

function Header() {
    return (
        <nav className="nav-bar">
            <img src="./react-logo.png" className="nav-logo"></img>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Motivos para aprender React</h1>
            <ol>
                <li>Popularidade e demanda no mercado</li>
                <li>Reutilização de componentes</li>
                <li>Performance otimizada</li>
                <li>Ecossistema rico</li>
                <li>Compatibilidade com outras tecnologias</li>
                <li>Curva de aprendizado suave</li>
                <li>Desenvolvimento de aplicativos móveis</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <div>
            <h3>© 2023 Gonçalves. Todos os direitos reservados."</h3>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

root.render(<Page />)