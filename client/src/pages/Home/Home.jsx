import React from "react";
import PostSide from "../../components/PostSide/PostSide.jsx";
import ProfileSide from '../../components/profileSide/ProfileSide.jsx'
import RightSide from '../../components/RightSide/RightSide.jsx'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide small={true}/>
      <PostSide small={true}/>
      <RightSide small={true}/>
    </div>
  )
}

export default Home