import React, {useState, useRef} from "react";
import ProfileImg from '../..-img/ProfileImg.jpg'
import './PostShare.css'
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"


const PostShare=() =>{
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage ({
                image: URL.createObjectURL(img),
            });
        }
    };
return (
        <div className="PostShare">
            <img src={ProfileImg} alt="" />
            <div>
                <input type="text" placeholder="What's Happering"/>            
                <div className="postOptions">
                    <div className="option" style={{color :"var (--photo)"}} >
                            <UilScenery/>
                            Photo
                    </div>
                    <div className="option"style={{color :"var (--Video)"}} >
                            <UilPlayCircle/>
                            Video
                    </div>
                    <div className="option" style={{color :"var (--Location)"}} >               
                            <UilLocationPoint/>
                            Location
                    </div> {"  "}
                    <div className="option" style={{color :"var (--Shedule)"}} >
                            <UilSchedule/>
                            Shedule
                    </div>
                    <button className="button ps-button">
                        Share
                    </button >
                    <div style={ {display: "none"} } >
                        <input 
                        type="file" 
                        name="myImage" 
                        ref={imageRef} 
                        onChange={onImageChange} 
                        />
                    </div>
                </div>
            {image && (
            
            <div className="previewImage">
                <UilTimes onClick={()=>setImage(null)} />
                <img src={image.image} alt="" />
            </div>
           
            )}

                
            </div>
        </div>
    );
};

export default PostShare;