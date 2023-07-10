import React, { Fragment,useState,useEffect } from 'react'
import WorkDetail from '../Detail/WorkDetail'
import "../styles/Work.module.css"
import Aos from 'aos'
import"aos/dist/aos.css"

export const Work = () => {
    const [detail, setDetail] = useState(WorkDetail)
    useEffect(()=>{
        Aos.init({ duration:2000, once:false, easing:"ease"})
    },[])
  return (
    <>
        <section   className='work'>
            <div className='overlay'></div>
            <div className='work-container' data-aos="fade-down">
                <div className='work-heading'>
                    <span>work flow</span>
                    <h2>How It Work</h2>
                </div>

                <div className='column1'>
                    <div className='work-row'>
                        {detail.map((detail)=>{
                            return(
                                <div className='work-card'>
                                    <div className='work-column'>
                                        <div className='content'>
                                            <div className='number'>
                                                <span>{detail.number}</span>
                                            </div>
                                            <div className='work-content'>
                                                <h3>{detail.heading}</h3>
                                                <p>{detail.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
