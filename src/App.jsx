import './App.css';
import Discover from './Discover';
import Watch from './Watch';
import Tour from './Tour';
import Blogs from './Blogs';
import BookTrip from './BookTrip';
import FooterInfo from './FooterInfo';
import HeaderComponent from './HeaderComponent';

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
