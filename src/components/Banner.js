import React from 'react';

import Image from '../assets/avatar.svg';
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <div id='home' className='section'>
      <div className='container mx-auto'>
        <div>
          <h1>
            CHAIRIEL <span>AZIZI</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-whit mr-4'>I am a</span>
            <TypeAnimation sequence={['Automation Tester',2000, 'Developer',2000,'Tinkerer',2000, ]}
            speed={150}
            className='text-accent1'
            wrapper='span'
            repeat={Infinity}
            />
          </div>
          <p>
            Just living life like everybody else do. Love networking, play with raspberry pi and docker, and of course test any applications or website as that what I usually do. I also code and developing during my free time. And still find any interesting open source software for me to try.
          </p>
          <div>
            <button className='btn btn-lg'>Hit Me Up</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </div>
        <div>
          {/* <img src={Image} alt='' /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
