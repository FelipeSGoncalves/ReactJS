
const navbar = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

/**
 * A partir do React 18, uma nova API foi introduzida chamada "Concurrent Mode". 
 * Essa API traz melhorias de desempenho e recursos aprimorados para lidar com renderizações assíncronas e suspensas.
 * Uma das mudanças significativas é a introdução do método ReactDOM.createRoot(), que substitui o ReactDOM.render() em certos cenários.
 * A função ReactDOM.createRoot() é usada para criar uma raiz de renderização em um elemento do DOM com o ID "root".
 * O método render() é chamado na raiz criada, com o componente "navbar" passado como argumento.
 * Isso inicia a renderização do componente no elemento do DOM fornecido.
 * Essa nova abordagem com ReactDOM.createRoot() e root.render() permite o uso do Concurrent Mode e suas otimizações associadas.
 */