'use client'

import React from 'react'
import Navbar from "./Navbar";
import '../css/Login.css';
// import img from "./img/logo.png"
// import galochka from "./img/Group 62.png"
// import google from "./img/Group 61.png"
// import galoch from "./img/Group 63.png"
// import fon from "./img/image 22.png"
// import fon1 from "./img/image 22 (1).png"

export default function Login () {
 const [ data, setData ] = React.useState(0)

    const plus = () => {
        setData(data + 1)
    }
    const minus = () => {
        if (data > 0) {
            setData(data-1)
        }
    }

  return (
    <div>
        <Navbar />
        

                <div className="form">
                    <div className="all-button">
                        <button style={data === 1 ? { background: '#C2EDF4', border: '1px solid gray;' } : { background: 'white' }} onClick={()=>{setData(1)}}>Вход</button>
                        <button style={data === 2 ? { background: '#C2EDF4', border: '10px solid gray ;' } : { background:'white'}} onClick={()=>{setData(2)}}>Регистратсия</button>
                    </div>
                    <div className="asos_form">
                        {data===1?(<div className='login'>
                            <div className="inputs">
                            <input  type="text" placeholder='Email or Username' />
                            <input type="text" placeholder='Password' />
                            </div>
                            <div className="checkbox">
                                <div className="check2">
                            <input id='cb1' type="checkbox" />
                            <p>Remember</p>
                            </div>
                            <a href="#">Forgotten password?</a>
                            </div>
                            <button>Login</button>
                           
                            </div>):(<div className='registratsiya'>
                                <div className="inputs">
                                <input type="text" placeholder='Username*' />
                            <input type="text" placeholder='Email*' />
                            <input type="text" placeholder='Phone*' />
                            <input type="text" placeholder='Password*' />
                            <div className="checkbox">
                                <div className="check">
                                <input id='cb1' type="radio" name="radio" />
                                <p>Private seller</p>
                            </div>
                            <div className="check">
                                <input id='cb1' type="radio" name="radio" />
                                <p>Business seller</p>
                                </div>
                            </div>
                            
                               </div>
                               <div className="checkbox">
                                <div className="check2">
                            <input id='cb1' type="checkbox" />
                            <p>Remember</p>
                            </div>
                            <a href="#">Forgotten password?</a>
                            </div>
                            </div>)}
                    </div>
                </div>
            </div>

  )
}