import styles from '../styles/stays.module.css';
import StaysCard from './StaysCard';
import properties from '../data/properties';

function Stays() {
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
                <input type='checkbox' id='fiveStars' defaultChecked />
                <label htmlFor='fiveStars'>5 Stars</label>
              </div>
              <div>
                <input type='checkbox' id='fourStars' defaultChecked />
                <label htmlFor='fourStars'>4 Stars</label>
              </div>
              <div>
                <input type='checkbox' id='treeStars' defaultChecked />
                <label htmlFor='treeStars'>3 Stars</label>
              </div>
              <div>
                <input type='checkbox' id='twoStars' defaultChecked />
                <label htmlFor='twoStars'>2 Stars</label>
              </div>
              <div>
                <input type='checkbox' id='oneStars' defaultChecked />
                <label htmlFor='oneStars'>1 Stars</label>
              </div>
            </nav>
          </div>
        </div>

        <div className={styles.resortInfo}>
          {properties.map((property, index) => {
            return <StaysCard propertiesObj={property} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Stays;
