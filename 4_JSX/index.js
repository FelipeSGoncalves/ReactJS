/** const h1 = document.createElement("h1")
 * h1.textContent = "Hello, React!"
 * h1.className = "header"
 * console.log(h1)
 * console: 
 * <h1 className="header">Hello, React!</h1> */

/**
 * const element = <h1 className="header">Hello, React!</h1>
 * console.log(element)
 * console: 
 * { $$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {… }, … }
 * $$typeof: Symbol(react.element)
 * key: null
 * props: { className: 'header', children: 'Hello, React!' }
 * ref: null
 * type: "h1"
*/

const element =
    (<div>
        <h1 className="header">Hello, React!</h1>
        <p>This is a paragraph</p>
    </div>)

// JSX
ReactDOM.render(element, document.getElementById("root"))

/** JSX é uma extensão de sintaxe utilizada no React para escrever elementos e componentes em uma sintaxe similar ao HTML dentro do JavaScript. 
 * Essa sintaxe permite que você misture código JavaScript com a estrutura do seu código HTML, facilitando a criação de componentes e a renderização de elementos na interface do usuário. */
