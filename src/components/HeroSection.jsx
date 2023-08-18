import React from 'react'
import "../scss/HeroSection.scss";

const HeroSection = () => {
  return (
    <section>
      <div className='illustration'>
        <div className="my-img">
        </div>
        {/* <img src="./images/illustration-working.svg" alt="working illustration" /> */}
      </div>      
      <div className='introduction'>
        <h1 className='heading'>More than just shorter links</h1>
        <p className='para'>Builld your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className='btn-started'>Get Started</button>
      </div>
    </section>
  )
}

export default HeroSection