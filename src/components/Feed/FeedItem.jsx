import React from "react";
import "./FeedItem.css"

function FeedItem(props) {
  return (
    <>
      <div class="event">
                <div class="label">
                  <img src={props.img}/>
                </div>
                <div class="content">
                  <div class="summary">
                    <a class="user">
                      {props.user}
                    </a> {props.desc}
                    <div class="date">
                      {props.date}
                    </div>
                  </div>
                  <div class="extra text">
                    {props.txt}
                  </div>
                </div>
              </div>
    </>
  )
}

export default FeedItem;