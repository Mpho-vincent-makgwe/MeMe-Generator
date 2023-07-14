

import data from "../data/memesData.jsx"
import Memes from "../components/memeDisplay.jsx"


function Meme(){
    const RandomMemes = data.map(meme => {
        return (

            <Memes 

                name={meme.name}
                img={meme.url}
            />
        )
    })
    return (
        <div>
            {memes}
        </div>
    )
}

