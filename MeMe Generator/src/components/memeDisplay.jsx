
export default function Memes(props) {
    return (
        <div className="meme">
            <img src={`../data/memesData.jsx/${props.url}`} className="meme--image" />
        </div>
    )
}