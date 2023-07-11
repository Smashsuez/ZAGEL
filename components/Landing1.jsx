import { useState, useEffect } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight ,faAnglesDown} from '@fortawesome/free-solid-svg-icons';
import Typewriter from "typewriter-effect"

const Slider = () => {
 const sliderData = [
        {
          image: "../public",
          heading: "Welcome To ZAGEL.",
          desc: "Customer satisfaction is at the core of our business, and we ensure the highest level of service and quality.",
        },
        {
          image: "https://i.ibb.co/8gwwd4Q/slide2.jpg",
          heading: "Slide Two",
          desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
        {
          image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
          heading: "Slide Three",
          desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
      ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 1000000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>

      {/* <FontAwesomeIcon icon={faArrowLeft} className="arrow prev" onClick={prevSlide} />
      <FontAwesomeIcon icon={faArrowRight} className="arrow next" onClick={nextSlide} />  */}
     
      
        
          <div

          >
           
              <di className="container">
                <div className="content">
                <div className="text">
            <h1>
            <Typewriter
                className="writer"
                                options={{
                                    strings: [ "Welcome To ZAGEL.","Welcome To ZAGEL."],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
            </h1>
            <p className='des'>
            Customer satisfaction is at the core of our business, and we ensure the highest level of service and quality.
            </p>
         </div>
                  
                  <Icon/>
                </div>
                <Image src="/imgs/mobile3.jpg" alt="slide" className="image" width={465} height={499}/>
              </di>
            
          </div>
      
      {/* <a href="/" className="go-down">
      <FontAwesomeIcon  icon={faAnglesDown} className='icon' />
      </a> */}
    </>
  );
};

export default Slider;
// import React from 'react'
// import Typewriter from "typewriter-effect"
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import your icons
// import { faCode, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import Icon from "./Icon"
import Image from "next/image";

// const Landing = () => {
//   return (
//     <div><div className="landing">
//     <div className="container">
//         <div className="text">
//             <h1>
//             <Typewriter
//                 className="writer"
//                                 options={{
//                                     strings: ['Welcome To ZAGEL.', 'Welcome To ZAGEL.'],
//                                     autoStart: true,
//                                     loop: true
//                                 }}
//                             />
//             </h1>
//             <p className='des'>
//                 Customer satisfaction is at the core of our business, and we ensure the highest level of service and quality.
//             </p>
//             <Icon/>
//         </div>
//     </div>
//     <span className='circle'></span>
//     <a href="/" className="go-down">
//     <FontAwesomeIcon  icon={faAnglesDown} className='icon' />
//     </a>
        
//     {/* <a href="#articales" class="go-down">
//         <i class="fa-duotone fa-chevrons-down fa-2x"></i>
//     </a> */}
// </div></div>
//   )
// }

// export default Landing