import React from 'react';
import './body.scss'

export default function Body() {

  return (
    <main className='container'>
      <div className="row mt-4">
        <form className="row">
            <input type="text" className="form-control form-control-dark col-6" placeholder="Top Text" aria-label="Search" />
            <input type="text" className="form-control form-control-dark col-6" placeholder="Bottom Text" aria-label="Search" />
            <button type="button" className="col-12 btn btn-dark my-3">Search</button>
        </form>
      </div>
    </main>
  )
}
