import './App.css';
import Discover from './components/Discover';
import Watch from './components/Watch';
import Tour from './components/Tour';
import Blogs from './components/Blogs';
import BookTrip from './components/BookTrip';
import FooterInfo from './components/FooterInfo';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <div className='content'>
        <HeaderComponent/>
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
