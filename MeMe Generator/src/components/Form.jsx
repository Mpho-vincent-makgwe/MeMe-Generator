import "../styles/Form.css"

function Form() {
    return (
        <form className="NewForm">
            <input type="text"></input>
            <input type="readonly" placeholder="Enter"></input>
            <button className="GetNewMeme" type="submit" 
            >Get a New Image<img src="../Images/"></img></button>
        </form>
    )
}
export default Form;