import React from "react";
import { useState, useEffect } from "react";

export default function MemeGenerator() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        imageURL: "https://i.imgflip.com/1bij.jpg"
    });
    
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            imageURL: newMemeUrl
        }))
    }

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
                <div className="inputRow">
                    <label>Top Text
                        <input type="text" name="topText" onChange={handleChange}/>
                    </label>

                    <label>Bottom Text
                        <input type="text" name="bottomText" onChange={handleChange}/>
                    </label>
                </div>

                    <button className="generateMemeButton" onClick={getMemeImage}>Get a new meme</button>

                    <div className="meme">
                        <img src={memeImage.imageURL} alt="Meme" />
                        <h2 className="top">{memeImage.topText}</h2>
                        <h2 className="bottom">{memeImage.bottomText}</h2>
                    </div>
            </div>
        </main>
    )
}