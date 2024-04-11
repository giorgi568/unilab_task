import { useEffect, useState } from 'react';
import styles from './styles/flights.module.css';
import MultiRangeSlider from 'multi-range-slider-react';
import flightRoutes from './data/flightRoutes';
import FlightCard from './FlightCard';

function Flights() {
  const [stopsFilter, setStopsFilter] = useState(false);
  const [durationFilter, setDurationFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const [routes, setRoutes] = useState(flightRoutes.slice(0, 8));

  const [minValueDuration, set_minValueDuration] = useState(1);
  const [maxValueDuration, set_maxValueDuration] = useState(7);
  const handleInputDuration = (e) => {
    set_minValueDuration(e.minValue);
    set_maxValueDuration(e.maxValue);
  };

  const [minValuePrice, set_minValuePrice] = useState(200);
  const [maxValuePrice, set_maxValuePrice] = useState(1000);
  const handleInputPrice = (e) => {
    set_minValuePrice(e.minValue);
    set_maxValuePrice(e.maxValue);
  };

  const [stopsValue, setStopsValue] = useState({
    direct: true,
    one: true,
    two: true,
  });

  useEffect(() => {
    const filterUpdater = () => {
      //filtering for stops
      let filteredRoutes = flightRoutes.filter((route) => {
        if (stopsValue.direct && route.stops === 0) {
          return true;
        }
        if (stopsValue.one && route.stops === 1) {
          return true;
        }
        if (stopsValue.two && route.stops === 2) {
          return true;
        }
        return false;
      });

      //filtering for duration and price
      filteredRoutes = filteredRoutes.filter((route) => {
        if (
          route.duration >= minValueDuration &&
          route.duration <= maxValueDuration &&
          route.price >= minValuePrice &&
          route.price <= maxValuePrice
        ) {
          return true;
        }

        return false;
      });

      if (filteredRoutes.length >= 15) {
        setRoutes(filteredRoutes.slice(0, 8));
        //so the first time it renders only 8 route
      } else {
        setRoutes(filteredRoutes);
      }
    };

    filterUpdater();
  }, [
    stopsValue,
    minValueDuration,
    maxValueDuration,
    minValuePrice,
    maxValuePrice,
  ]);

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
                  <input
                    type='checkbox'
                    id='direct'
                    defaultChecked
                    onChange={(e) => {
                      setStopsValue((prevState) => ({
                        ...prevState,
                        direct: e.target.checked,
                      }));
                    }}
                  />
                  <label htmlFor='direct'>Direct</label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='oneStop'
                    defaultChecked
                    onChange={(e) => {
                      setStopsValue((prevState) => ({
                        ...prevState,
                        one: e.target.checked,
                      }));
                    }}
                  />
                  <label htmlFor='oneStop'>One Stop</label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='twoStop'
                    defaultChecked
                    onChange={(e) => {
                      setStopsValue((prevState) => ({
                        ...prevState,
                        two: e.target.checked,
                      }));
                    }}
                  />
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
          {routes.map((route, index) => {
            return <FlightCard flightObj={route} key={index} />;
          })}
          <button
            style={{ width: '100%' }}
            onClick={(e) => {
              setRoutes(flightRoutes);
              e.target.style.display = 'none';
            }}
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flights;
