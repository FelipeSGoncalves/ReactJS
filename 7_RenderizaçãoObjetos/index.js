/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const main = (
    <main>
        <h1>Main</h1>
        <h3>This is a React application</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ipsum odio et error quos ab, aut harum soluta nisi saepe sunt. Eum culpa cumque officiis aliquam similique quam repudiandae aperiam.</p>
        <h1>Main</h1>
    </main>
)

/** const root = document.getElementById("root")
 * root.append(JSON.stringify(main))
 * O código acima retorna um objeto porque está usando a sintaxe JSX para criar um elemento React
 * Porém apenas o ReactDOM pode traduzir e renderizar esse objeto.
 */

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(main)

// ReactDOM.render(main, document.getElementById("root"))

