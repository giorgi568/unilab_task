import { useState } from 'react';
import styles from '../styles/flights.module.css';
import MultiRangeSlider from 'multi-range-slider-react';
import flightRoutes from '../data/flightRoutes';
import FlightCard from './FlightCard';

function Flights() {
  const [stopsFilter, setStopsFilter] = useState(false);
  const [durationFilter, setDurationFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const [minValueDuration, set_minValueDuration] = useState(10);
  const [maxValueDuration, set_maxValueDuration] = useState(25);
  const handleInputDuration = (e) => {
    set_minValueDuration(e.minValue);
    set_maxValueDuration(e.maxValue);
  };

  const [minValuePrice, set_minValuePrice] = useState(300);
  const [maxValuePrice, set_maxValuePrice] = useState(800);
  const handleInputPrice = (e) => {
    set_minValuePrice(e.minValue);
    set_maxValuePrice(e.maxValue);
  };

  return (
    <div className={styles.content}>
      <div className={styles.queries}>
        <div className={styles.inputWrapper}>
          <label htmlFor='date'>
            <div>
              <img src='/calendar.svg' alt='' />
              <span>Calendar</span>
            </div>
            <img src='/plus.svg' alt='' />
          </label>
          <input type='date' id='date' className={styles.inputData} />
        </div>
        <button>Search</button>
      </div>

      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.stopsFilter}>
            <div
              onClick={() => {
                setStopsFilter(!stopsFilter);
              }}
            >
              <h4>Stops</h4>
              {stopsFilter ? (
                <img src='/arrowUp.svg' alt='' />
              ) : (
                <img src='/arrowDown.svg' alt='' />
              )}
            </div>
            {stopsFilter && (
              <nav>
                <div>
                  <input type='checkbox' id='direct' />
                  <label htmlFor='direct'>Direct</label>
                </div>
                <div>
                  <input type='checkbox' id='oneStop' />
                  <label htmlFor='oneStop'>One Stop</label>
                </div>
                <div>
                  <input type='checkbox' id='twoStop' />
                  <label htmlFor='twoStop'>Two Stop</label>
                </div>
              </nav>
            )}
          </div>
          <div className={styles.durationFilter}>
            <div
              onClick={() => {
                setDurationFilter(!durationFilter);
              }}
            >
              <h4>Duration</h4>
              {durationFilter ? (
                <img src='/arrowUp.svg' alt='' />
              ) : (
                <img src='/arrowDown.svg' alt='' />
              )}
            </div>
            {durationFilter && (
              <MultiRangeSlider
                min={1}
                max={7}
                step={1}
                minValue={minValueDuration}
                maxValue={maxValueDuration}
                ruler='false'
                style={{ border: 'none', boxShadow: 'none' }}
                onInput={(e) => {
                  handleInputDuration(e);
                }}
              />
            )}
          </div>
          <div className={styles.priceFilter}>
            <div
              onClick={() => {
                setPriceFilter(!priceFilter);
              }}
            >
              <h4>Price</h4>
              {priceFilter ? (
                <img src='/arrowUp.svg' alt='' />
              ) : (
                <img src='/arrowDown.svg' alt='' />
              )}
            </div>
            {priceFilter && (
              <MultiRangeSlider
                min={200}
                max={1000}
                step={100}
                minValue={minValuePrice}
                maxValue={maxValuePrice}
                ruler='false'
                style={{ border: 'none', boxShadow: 'none' }}
                onInput={(e) => {
                  handleInputPrice(e);
                }}
              />
            )}
          </div>
        </div>
        <div className={styles.flightsInfo}>
          {flightRoutes.map((route, index) => {
            return(
              <FlightCard flightObj={route} key={index} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Flights;
