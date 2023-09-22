import React from 'react';
import './body.scss'

export default function Body() {

  return (
    <main className='container'>
      <div className="row">
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="text" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          <input type="text" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          <button type="button" className="btn btn-outline me-2">Login</button>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outlineme-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>

      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2">Login</button>
        <button type="button" className="btn btn-warning">Sign-up</button>
      </div>
    </main>
  )
}
