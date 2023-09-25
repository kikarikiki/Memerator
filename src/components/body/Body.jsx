import React from 'react';
import './body.scss'
import memesData from '../../memesData.js';

export default function Body() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
}

  return (
    <main className='container'>
      <div className="row mt-4">
        <form className="row">
            <input type="text" className="form-control form-control-dark col-6" placeholder="Top Text" aria-label="Search" />
            <input type="text" className="form-control form-control-dark col-6" placeholder="Bottom Text" aria-label="Search" />
            <button type="button" className="col-12 btn btn-dark my-3" onClick={getMemeImage}>Search</button>
        </form>
        <div className="row">
          <img src={meme.randomImage} className="p-0" alt="" />
        </div>
      </div>
    </main>
  )
}
