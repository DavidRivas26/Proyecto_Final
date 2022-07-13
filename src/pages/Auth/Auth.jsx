import React from "react";
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return(
       <div className="Auth">
           <div className="a-left">
               <img src={Logo} alt="" />
               <div className="Webname">
                   <h1>ZKC Media</h1>
                   <h6>Explore the ideas throughout the world</h6>
               </div>
           </div>

           <LogIn/>
       </div>
    );
};

function LogIn(){
    return(
        <div className="a-right">
            <form className="inForm authform">
                <h3>Log In</h3>

                <div>
                    <input 
                    type="text" 
                    placeholder="Username"
                    className="InfoInput" 
                    name="username" 
                    />
                </div>

                <div>
                <input 
                    type="password" 
                    placeholder="InfoInput"
                    className="Password" 
                    name="password" 
                    />
                </div>

                <div>
                    <span style={{ fontSize: "12px" }}>
                        Don't have an account Sign up
                    </span>
                    <button className="button InfoButton">Login</button>
                </div>
            </form>
        </div>
    )
}

function SignUp(){
    return(
        <div className="a-right">
            <form action="" className="infoForm">
                <h3>Sign up</h3>
                <div>
                    <input 
                    type="text" placeholder='First Name' 
                    className='infoImput' name='firstname'
                    />
                     <input 
                     type="text" placeholder='Last Name' 
                    className='infoImput' name='lastname'
                    />
                </div>

                <div>
                    <input 
                    type="text" 
                    className="infoInput" 
                    name='username'
                    placeholder="Usernames"
                    />
                </div>

                <div>
                <input 
                    type="text" 
                    className="infoInput" 
                    name="password"
                    placeholder="Password"
                    />
                    <input 
                    type="text" 
                    className="infoInput" 
                    name="confirmpass"
                    placeholder="Confirm Password"
                    />
                </div>

                <div>
                    <span style={{fontSize: '12px' }}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Auth