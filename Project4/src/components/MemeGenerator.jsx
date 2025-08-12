import React from "react";

export default function MemeGenerator() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        imageURL: "https://i.imgflip.com/1bij.jpg"
    });
    
    function handleChange(event) {
        const {value, name} = event.target;

        setMemeImage(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <main>
            <div className="form">
                
                <label>Top Text
                    <input type="text" name="topText" onChange={handleChange}/>
                </label>

                <label>Bottom Text
                    <input type="text" name="bottomText" onChange={handleChange}/>
                </label>

                <button>Get a new meme imageURL</button>

                <div className="meme">
                    <img src={memeImage.image} alt="Meme" />
                    <h2 className="top">{memeImage.topText}</h2>
                    <h2 className="bottom">{memeImage.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}