'use client'
import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../css/Loginpage.css';
import { FaUserAlt } from 'react-icons/fa'

export default function Loginpage() {


    return (
        <div>
            <Navbar /><div className="kata">
                <div className="katta">
                    <div className="form1">
                        <div className="inputla">
                            <h2>Your contact details</h2>

                            <div className="inputs1">

                                <div className="input1">
                                    <h2>Name*</h2>
                                    <input type="text" />
                                    <h2>Phone</h2>
                                    <input type="text" />

                                </div>

                                <div className="input1">
                                    <h2>
                                        Location: </h2>
                                    <input type="text" />
                                    <h2>Email</h2>
                                    <input type="text" />

                                </div>



                            </div>
                            <div className="check2">
                                <input id='cb1' type="checkbox" />
                                <p>WhatsApp (require country code for mobile numbers)</p>
                            </div>
                            <div className="inputs111">
                                <h2>Type</h2>
                                <input type="text" placeholder='Private seller' />
                                <h2>Description</h2>
                                <input className='a1' type="text" />
                                <button>Save</button>
                            </div>


                        </div>
                    </div>

                    <div className="profil">
                        <h2>Your photo</h2>
                        <div className="profil1">
                            <input type="file" />
                            <FaUserAlt className='icon1' />
                        </div>
                        <h2 className='bb1'>Upload profile photo</h2>
                    </div>
                </div><h2 className='delete1'>Delete account</h2></div>

            <Footer />
        </div>
    )
}