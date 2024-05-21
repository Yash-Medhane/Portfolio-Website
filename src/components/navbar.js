import '../styles/navbar.css';
import lottie from 'lottie-web';
import React, { useEffect } from 'react';

const Navbar = () => {
  // useEffect(() => {
  //   const container = document.getElementById('animation-container1');
  //   const anim1 = lottie.loadAnimation({
  //     container: container,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: '/Animation/logo.json' // Correct path to your JSON animation file
  //   });

  //   // Cleanup function to destroy the animation when the component is unmounted
  //   return () => {
  //     anim1.destroy();
  //   };
  // }, []); // Empty dependency array to run once on mount

  return (
    <>
      <nav>
        <ul className='links'>
       {/* <div id="animation-container1"></div> */}
          <h1>My Portfolio</h1>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
          <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
