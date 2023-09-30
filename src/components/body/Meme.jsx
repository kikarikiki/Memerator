import React from 'react';
import './meme.scss'

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = React.useState([])

 /**
   useEffect takes a function as its parameter. If that function
   returns something, it needs to be a cleanup function. Otherwise,
   it should return nothing. If we make it an async function, it
   automatically retuns a promise instead of a function or nothing.
   Therefore, if I want to use async operations inside of useEffect,
   I need to define the function separately inside of the callback
   function, as seen below:
   */

  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
}, [])


  function getMemeImage() {
    const memesArray = allMemes
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
      <div className="row justify-content-center mt-4">
        <form className="col-md-8 row">
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
              type="button"
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
