import styles from './styles/stays.module.css';
import StaysCard from './StaysCard';
import propertiesData from './data/properties';
import { useEffect, useState } from 'react';

function Stays() {
  const [properties, setProperties] = useState(propertiesData.slice(0, 7));

  const [ratingValue, setRatingValue] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
    five: true,
  });

  useEffect(() => {
    const filterUpdater = () => {
      let filteredRating = propertiesData.filter((property) => {
        if (ratingValue.one && property.rating === 1) {
          return true;
        }
        if (ratingValue.two && property.rating === 2) {
          return true;
        }
        if (ratingValue.three && property.rating === 3) {
          return true;
        }
        if (ratingValue.four && property.rating === 4) {
          return true;
        }
        if (ratingValue.five && property.rating === 5) {
          return true;
        }
      });

      if (filteredRating.length >= 15) {
        setProperties(filteredRating.slice(0, 8));
        //so the first time it renders only 8 route
      } else {
        setProperties(filteredRating);
      }
    };

    filterUpdater();
  }, [ratingValue]);

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
          <div className={styles.filtersHeader}>
            <h4>Filter by:</h4>
            <hr />
          </div>
          <div className={styles.ratingFilter}>
            <h4>Property rating</h4>
            <nav>
              <div>
                <input
                  type='checkbox'
                  id='fiveStars'
                  defaultChecked
                  onChange={(e) => {
                    setRatingValue((prevState) => ({
                      ...prevState,
                      five: e.target.checked,
                    }));
                  }}
                />
                <label htmlFor='fiveStars'>5 Stars</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='fourStars'
                  defaultChecked
                  onChange={(e) => {
                    setRatingValue((prevState) => ({
                      ...prevState,
                      four: e.target.checked,
                    }));
                  }}
                />
                <label htmlFor='fourStars'>4 Stars</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='threeStars'
                  defaultChecked
                  onChange={(e) => {
                    setRatingValue((prevState) => ({
                      ...prevState,
                      three: e.target.checked,
                    }));
                  }}
                />
                <label htmlFor='threeStars'>3 Stars</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='twoStars'
                  defaultChecked
                  onChange={(e) => {
                    setRatingValue((prevState) => ({
                      ...prevState,
                      two: e.target.checked,
                    }));
                  }}
                />
                <label htmlFor='twoStars'>2 Stars</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='oneStars'
                  defaultChecked
                  onChange={(e) => {
                    setRatingValue((prevState) => ({
                      ...prevState,
                      one: e.target.checked,
                    }));
                  }}
                />
                <label htmlFor='oneStars'>1 Stars</label>
              </div>
            </nav>
          </div>
        </div>

        <div className={styles.resortInfo}>
          {properties.map((property, index) => {
            return <StaysCard propertiesObj={property} key={index} />;
          })}

          <button
            style={{ width: '100%' }}
            onClick={(e) => {
              setProperties(propertiesData);
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

export default Stays;
