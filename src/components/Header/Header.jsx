import React from "react";
import "./Header.css"
function Header() {
  return (
    <>
        <ul>
          <li><a href="/"><i className="fas fa-home"></i></a></li>
          <li><a href="/profile"><i className="fas fa-user-circle"></i></a></li>
          <li><a href="/chat"><i className='far fa-comment-dots'></i></a></li>
          <li><a href="/cards"><i className="fas fa-heart"></i></a></li>
          <li><a href="/locations"><i className="fas fa-map-marker-alt"></i></a></li>
          <li><a href="/settings"><i className="fas fa-cogs"></i></a></li>

        </ul>
    </>
  )
}

export default Header;