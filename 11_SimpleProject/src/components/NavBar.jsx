import icon from '../assets/reactjs-icon.png'

export function Navbar() {
    return (
        <nav className="navbar">
            <img src={icon} className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav >
    )
}