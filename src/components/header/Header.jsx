import React from 'react';
import './header.scss';

export default function Header() {

  return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              Memerator
            </a>
          </div>
        </div>
      </header>
  )
}
