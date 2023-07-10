import React,{Fragment} from 'react';
import Icon from './Icon';
import Typewriter from "typewriter-effect"

const Home1 = () => {
    return (
        <>
            <section className='home'>
                <div className='container'>
                <div className="text">
             <h1>
             <Typewriter
                 className="writer"
                                 options={{
                                     strings: ['Welcome To ZAGEL.', 'Welcome To ZAGEL.'],
                                     autoStart: true,
                                     loop: true
                                 }}
                             />
             </h1>
             <p className='des'>
                Customer satisfaction is at the core of our business, and we ensure the highest level of service and quality.
             </p>
            </div>
                    <div className='link'>
                        <a href='#' className='explore'>Explore</a>
                        <a href='#' className='contact'>Contact Us</a>
                        
                    </div><Icon/>
                </div>
            </section>
        </>
    )
}

export default Home1