import React from 'react'
import Navbar from './Navbar'
import "../css/About.css"
import Image from 'next/image'
import office from "../images/office.jpg"
import us from "../images/us.png"

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="about">
                <div className="about_left">
                    <h1>About Us</h1>
                    <h4>How the adventure ended will be seen anon. Aouda was anxious,
                        though she said nothing.</h4>
                    <p className='about_info'>As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said.</p>
                    <p className='about_border'>During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east.</p>
                    <p className='about_info'>As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said.</p>
                </div>
                <Image src={office} alt='' className='aboutImage' />
            </div>
            <div className="seo">
                <div className="seo_left">
                    <Image src={us} alt='' />
                    <div className="left_box">
                        <h2>Our Ceo Say</h2>
                        <p>Quality is never an accident; it is always the result of high intention.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
