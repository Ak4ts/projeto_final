import React from "react";
import "./style.css";
import Header from "../../components/Header/Header";
import Location from "../../components/Places/Places"
import cafe from "../../img/cafe.jpg"
function Locations() {
  return (
    <>
      <div className="left">
        <Header/>
      </div>
      <div className="right">
        <div className="locations">
        <Location description="A wonderful cafe for you and your friends!" image={cafe}/>
        <Location description="A wonderful cafe for you and your friends!" image={cafe}/>
        </div>
      </div>
    </>
    
  )
}

export default Locations;