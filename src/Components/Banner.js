import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

// Images:
import b1 from '../Assets/banner1.jpg';
import b2 from '../Assets/banner2.jpg';
import b3 from '../Assets/banner3.jpg';
import b4 from '../Assets/banner4.jpg';
import b5 from '../Assets/banner5.jpg';

// Slider Images:
const slides = [
  { id: 0, url: b1 },
  {
    id: 1,
    url: b2,
  },
  { id: 2, url: b3 },
  {
    id: 3,
    url: b4,
  },
  {
    id: 4,
    url: b5,
  },
];

const Banner = () => {
  const [index, set] = useState(0);

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () =>
      void setInterval(() => set((state) => (state + 1) % slides.length), 6000),
    []
  );
  // Main:
  return (
    <React.Fragment>
      <div className='banner-slider'>
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div style={{ ...props }} key={key}>
              <div className='banner-imgs-overlay'></div>
              <img
                src={item.url}
                className='banner-imgs'
                alt='banner-img'
              ></img>
            </animated.div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Banner;
