import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from './LogoSearch/LogoSearch';

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide