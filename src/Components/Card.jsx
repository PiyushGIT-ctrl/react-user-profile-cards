import React from 'react'
import { UserRound, CopyCheck, BadgeCheck } from "lucide-react";

const Card = (props) => {
  return (
    <div className="Card">
        <div className="Image">
          <img src={props.profilephoto}/>
        </div>
        <div className="ImageContent">
          <div className="ImageName">
            <span>{props.name}</span>
            <BadgeCheck size={29} fill='lime'/>
          </div>
          <div className="ImageDesc">
            <p>{props.userdesc}</p>
          </div>
        </div>
        <div className="ImageFooter">
          <div className="ImageStats">
            <div className="Followers">
            <UserRound size={15} color='gray'/>
            <span>{props.follow}</span>
            </div>
            <div className="TasksDone">
            <CopyCheck size={17} color='gray'/>
            <span>{props.tasks}</span>
            </div>
          </div>
          <button className='FollowBtn'>Follow +</button>
        </div>
      </div>
  )
}

export default Card