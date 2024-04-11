import { Outlet } from 'react-router-dom';
import styles from './styles/services.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterInfo from './FooterInfo';

function Services() {
  let location = useLocation();
  let checked = useRef('');

  //to set checked.current on initial render because useffect only
  //runs after initial render

  if (location.pathname === '/services/flights') {
    checked.current = 'flights';
  } else if (location.pathname === '/services/stays') {
    checked.current = 'stays';
  }

  useEffect(() => {
    if (location.pathname === '/services/flights') {
      checked.current = 'flights';
    } else if (location.pathname === '/services/stays') {
      checked.current = 'stays';
    }
  }, [location]);
  return (
    <div>
      <HeaderComponent position={'static'}/>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <Link to='/services/flights'>
            <button
              className={styles.btn}
              style={
                checked.current === 'flights'
                  ? { backgroundColor: '#FF6700', color: 'white' }
                  : {}
              }
            >
              Flights
            </button>
          </Link>
          <Link to='/services/stays'>
            <button
              className={styles.btn}
              style={
                checked.current === 'stays'
                  ? { backgroundColor: '#FF6700', color: 'white' }
                  : {}
              }
            >
              Stays
            </button>
          </Link>
          <button className={styles.btn}>Car rentals</button>
          <button className={styles.btn}>Cruises</button>
          <button className={styles.btn}>Attractions</button>
        </nav>
        <Outlet />
      </div>
      <FooterInfo />
    </div>
  );
}

export default Services;
