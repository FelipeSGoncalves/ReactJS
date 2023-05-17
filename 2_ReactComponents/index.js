function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <h1 className=""> Hello World </h1>
        </main>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)

/** Um componente é uma unidade isolada e reutilizável de código em React, que encapsula uma parte específica da interface do usuário. Em outras palavras, é uma forma de organizar e estruturar o código em pedaços menores e independentes, cada um com sua própria funcionalidade e propósito.
 * Em React, existem dois tipos principais de componentes: componentes de classe e componentes de função. 
 * 
 * Componentes de Classe: são definidos como classes do JavaScript estendendo a classe React.Component. 
 * Eles possuem um método obrigatório chamado render() que retorna a representação do componente na forma de elementos React. 
 * Os componentes de classe têm recursos adicionais, como gerenciamento de estado e ciclos de vida.
 * 
 * Componentes de Função: são definidos como funções JavaScript que retornam elementos React. 
 * Eles são uma forma mais simples de definir componentes e não possuem recursos de estado ou ciclos de vida. 
 * A partir do React 16.8, esses componentes podem usar hooks para adicionar recursos de estado e outros recursos anteriormente disponíveis apenas em componentes de classe.
 */