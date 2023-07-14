import "../styles/Form.css"
import memesData from "../data/memesData.jsx"


function ButtonClickHamdle(event){
    void
        console.log("Created")
}


function MeMeForm() {
    let url
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    
    return (
        
        <main className="NewForm">
            <p className="NewForm">{url}</p>
            <div>
            <input
                onMouseOver ={ButtonClickHamdle }
                placeholder="Top text"
                className="Form__input"
                type="text"
                />
            <input 
                type="text" 
                className="Form__input"
                placeholder="Bottom Text"></input>
            <button 
            
                className="GetNewMeme"
                type="submit"
                onClick={getMemeImage}
                >
                    📋Get a New MeMe🖼.
            </button>
            </div>
        </main>
    )
}
export default MeMeForm;