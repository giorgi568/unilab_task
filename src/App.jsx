import './App.css';
import Discover from './components/Discover';

function App() {
  return (
    <div className='content'>
      <nav>
        <h2 className='logoText'>ExploreEra</h2>
        <div className='navWrapper'>
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
            width='40'
            height='41'
            viewBox='0 0 40 41'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='userIcon'
          >
            <path
              d='M31.6673 35.5C31.6673 29.0567 26.444 23.8333 20.0007 23.8333C13.5573 23.8333 8.33398 29.0567 8.33398 35.5M20.0007 18.8333C16.3188 18.8333 13.334 15.8486 13.334 12.1667C13.334 8.48477 16.3188 5.5 20.0007 5.5C23.6825 5.5 26.6673 8.48477 26.6673 12.1667C26.6673 15.8486 23.6825 18.8333 20.0007 18.8333Z'
              stroke='#424244'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </nav>
      <div className="visitContainer">
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <h3>Visit Mountains In</h3>
          <h1>ITALY</h1>
          <button className='seeOfferBtn'>See offer</button>
        </div>
      </div>
      <Discover></Discover>
    </div>
  );
}

export default App;
