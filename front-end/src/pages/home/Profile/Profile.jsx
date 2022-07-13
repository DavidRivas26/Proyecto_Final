import React from "react";
import RightSide from "../../../components/RightSide/RightSide";
import ProfileLeft from "../../../components/ProfileLeft/ProfileLeft"
import PostSide from "../../../components/PostSide/PostSide";
import './Profile.css'
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import FollowersCard from "../../../components/FollowersCard/FollowersCard";
const Profile = () => {
    return (
        <div className="Profile">
            <ProfileLeft/>

            <div className="Profile-center">
                <ProfileCard/>
                <PostSide/>
            </div>

            <RightSide/>
        </div>
    )
}

export default Profile