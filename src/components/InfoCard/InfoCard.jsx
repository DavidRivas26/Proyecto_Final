import React, { useState } from 'react'
import './InfoCard.css'
import ProfileModal from '../ProfileModal.jsx/ProfileModal'
import {UilPen} from '@iconscout/react-unicons'
const InfoCard = () => {


    const[modalOpened , setModalOpened] = useState(false)
    return(
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                <UilPen widt='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/> 
                </div>
            </div>

            <div className="info" >
                <span>
                    <b>Status </b>
                </span>
                <span> in Relationship</span>
            </div>

            <div className="info" >
                <span>
                    <b>Lives in </b>
                </span>
                <span>Multan</span>
            </div>

            <div className="info" >
                <span>
                    <b>Works at </b>
                </span>
                <span>Zainkeepsconde inst</span>
            </div>

            <button className="button logout-button">Logout</button>
        </div>
    )
}

export default InfoCard