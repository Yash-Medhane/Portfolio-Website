import React from 'react'
import '../styles/main.css';

const main = () => {
  return (
    <>
        <div className="main-container">
            <div className="intro-container">
              <h1><span>He/Him</span></h1>
              <h1 className='name'>Yash Medhane</h1>
              <h3>Web Devloper</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, facilis incidunt nam optio eius neque rerum ab deserunt, necessitatibus quo, laboriosam nemo molestiae exercitationem adipisci deleniti minus natus. Sit officiis blanditiis atque accusamus possimus!</p>
            </div>
            <div className="my-image">
            <img src='Assets/image.jpg' className="my-image" alt="logo" />
            </div>
        </div>
    </>
  )
}

export default main
