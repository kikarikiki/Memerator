import React from 'react';
import './body.scss'
import './meme.scss'
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

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme =>({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main className='container'>
      <div className="row mt-4">
        <form className="row">
          <div className="form-group col-6">
            <input
              type="text"
              className="form-control form-control-dark col-6 mb-3"
              placeholder="Top Text"
              aria-label="Search"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control form-control-dark col-6"
              placeholder="Bottom Text"
              aria-label="Search"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="col-12 btn btn-dark my-3"
              onClick={getMemeImage}>Search
            </button>
          </div>
          <div className="meme col-6">
            <img
              src={meme.randomImage}
              className="img-fluid p-0"
              alt=""
            />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
        </form>
      </div>
    </main>
  )
}
