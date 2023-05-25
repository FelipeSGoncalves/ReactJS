const root = ReactDOM.createRoot(document.getElementById("root"))
const header = (
    <div>
        <img src="react-logo.png"></img>
    </div>
)

const main = (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li> Was first released in 2013</li>
            <li> Was originally created by Jordan Walke</li>
            <li> Has well over 100K stars on Github</li>
            <li> Is maintained by Facebook</li>
            <li> Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const page = (
    <div>
        {header}
        {main}
    </div>
)

root.render(page)
