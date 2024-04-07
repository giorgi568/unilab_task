import { useState } from 'react';
import './App.css';
import Discover from './components/Discover';
import Watch from './components/Watch';
import Tour from './components/Tour';
import Blogs from './components/Blogs';
import BookTrip from './components/BookTrip';
import FooterInfo from './components/FooterInfo';

function App() {
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
    <div>
      <div className='content'>
        <header className={navScroll ? 'scrolling' : ''}>
          <h2
            className='logoText'
            style={navScroll ? { color: '#424244' } : {}}
          >
            ExploreEra
          </h2>
          <div
            className='navWrapper'
            style={navScroll ? { color: '#424244' } : { color: 'white' }}
          >
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Home
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              About us
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Blogs
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Our services
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Our offers
            </a>
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
                stroke={navScroll ? '#424244' : 'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </header>
        <div className='visitContainer'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h3 style={{ color: 'white' }}>Visit Mountains In</h3>
            <h1 style={{ color: 'white' }}>ITALY</h1>
            <button className='seeOfferBtn'>See offer</button>
          </div>
        </div>
      </div>
      <Discover></Discover>
      <Watch />
      <Tour />
      <Blogs />
      <BookTrip />
      <FooterInfo />
    </div>
  );
}

export default App;
