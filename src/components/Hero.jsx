import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/codingfxii", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>Chromakop A.I</span>
      </h1>
      <h2 className="desc"></h2>
      <h2 className='desc'>
      The stories we coulda wrote if our egos didn't take the pen.    
      </h2>
      <h2 className="desc">
      - Tyler, The Creator
      </h2>
    </header>
  );
};

export default Hero;