import "../styles/header.css"

/**
 * Challenge: Build the Header component
 */
function Header() {
    return(
        <>
        <header className="header">
            <img  src="../src/Images/troll-face.png" className="header--image" alt="memeProfile"/>
            <h2 className="header--title">MeMe Gen by Mpho</h2>
            <h4 className="header--project">React Course - 3rd Project</h4>
        </header>
        </>
    ) 
}
export default Header