import React from "react";
import "./style.css";
import Header from "../../components/Header/Header";
import Location from "../../components/Places/Places"
import cafe from "../../img/cafe1.jpg"
import museum from "../../img/museum.jpg"
import library from "../../img/library.jpg"
import park from "../../img/park1.jpg"
import mountain from "../../img/hike.jpg"
import bar from "../../img/bar.jpg"
import restaurant from "../../img/restaurants.jpg"

function Locations() {
  return (
    <>
      <div className="left">
        <Header/>
      </div>
      <div className="right">
        <div className="locations">
        <Location place="Restaurants" description="What better way to form a close friendship?" location="https://www.tripadvisor.com/Restaurants-g1598550-Sao_Lourenco_State_of_Minas_Gerais.html" image={restaurant}/>
        <Location place="Cafés" description="Break the ice with a hot cup of coffee" location="https://www.tripadvisor.com/Restaurants-g1598550-zfg9900-Sao_Lourenco_State_of_Minas_Gerais.html" image={cafe}/>
        <Location place="Parks" description="Being outdoors is even better with friends" location="https://www.tripadvisor.com/Attraction_Review-g1598550-d10642373-Reviews-Parque_das_Aguas_em_Sao_Lourenco-Sao_Lourenco_State_of_Minas_Gerais.html" image={park}/>
        <Location place="Museums & Art Galleries" description="Are you both art lovers? Find one near you" image={museum}/>
        <Location place="Libraries & Books stores" description="Books can be great conversation starters" location="" image={library}/>
        <Location place="Mountains" description="What better way to form a close friendship?" image={mountain}/>
        <Location place="Bars" description="Enjoy drinking? Find one near you" image={bar}/>
        </div>
      </div>
    </>
    
  )
}

export default Locations;