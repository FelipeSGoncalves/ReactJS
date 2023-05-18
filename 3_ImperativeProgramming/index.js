// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

const root = document.getElementById('root')
const h1 = document.createElement('h1')

h1.textContent = "Hello, React!"
h1.className = "header"

root.appendChild(h1)

/** O modo imperativo é um estilo de programação que enfatiza o controle explícito do fluxo de execução e a manipulação direta dos estados e das operações.
 * Em vez de usar abstrações de alto nível, como componentes e frameworks, o modo imperativo se concentra em detalhes de implementação
 * requer uma sequência específica de instruções para realizar uma tarefa. */
