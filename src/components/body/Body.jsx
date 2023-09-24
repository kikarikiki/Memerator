import React from 'react';
import './body.scss'
import '../../memesData';
import memesData from '../../memesData';

export default function Body() {

  const [memeImgUrl, imgUrlUpdate] = React.useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    imgUrlUpdate(memesArray[randomNumber].url)
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
          <img src={memeImgUrl} className="p-0" alt="" />
        </div>
      </div>
    </main>
  )
}
