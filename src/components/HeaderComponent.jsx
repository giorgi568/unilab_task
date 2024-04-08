import { useState } from 'react';
import PropTypes from 'prop-types';

function HeaderComponent({ position }) {
  const [navScroll, setNavScroll] = useState(false);
  const changeScroll = () => {
    if (window.scrollY > 1) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener('scroll', changeScroll);
  return (
    <header
      style={
        position === 'static'
          ? { position: 'static', backgroundColor: '#EAE9E9', color: '#424244' }
          : {}
      }
      className={navScroll ? 'scrolling' : ''}
    >
      <h2
        className='logoText'
        style={navScroll || position === 'static' ? { color: '#424244' } : {}}
      >
        ExploreEra
      </h2>
      <div
        className='navWrapper'
        style={
          navScroll || position === 'static'
            ? { color: '#424244' }
            : { color: 'white' }
        }
      >
        <a href='#0' target='_blank' rel='noopener noreferrer'>
          Home
        </a>
        <a href='#0' target='_blank' rel='noopener noreferrer'>
          About us
        </a>
        <a href='#0' target='_blank' rel='noopener noreferrer'>
          Blogs
        </a>
        <a href='#0' target='_blank' rel='noopener noreferrer'>
          Our services
        </a>
        <a href='#0' target='_blank' rel='noopener noreferrer'>
          Our offers
        </a>
        <div className='iconContainer'>
          <svg
            width='32'
            height='35'
            viewBox='0 0 40 41'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='userIcon'
          >
            <path
              d='M31.6673 35.5C31.6673 29.0567 26.444 23.8333 20.0007 23.8333C13.5573 23.8333 8.33398 29.0567 8.33398 35.5M20.0007 18.8333C16.3188 18.8333 13.334 15.8486 13.334 12.1667C13.334 8.48477 16.3188 5.5 20.0007 5.5C23.6825 5.5 26.6673 8.48477 26.6673 12.1667C26.6673 15.8486 23.6825 18.8333 20.0007 18.8333Z'
              stroke={navScroll || position === 'static' ? '#424244' : 'white'}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='tooltip'>
            <a href='#0'>Sign In</a>
            <span className='line'></span>
            <a href='#0'>Sign Up</a>
            <span className='line'></span>
            <a href='#0'>Sign Out</a>
            <span className='line'></span>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderComponent.propTypes = {
  position: PropTypes.string,
};

export default HeaderComponent;
