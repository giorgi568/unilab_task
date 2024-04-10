import PropTypes from 'prop-types';
import styles from '../styles/staysCard.module.css';

function StaysCard({ propertiesObj }) {
  const stars = Array.from({ length: propertiesObj.rating });
  return (
    <div className={styles.card}>
      <img
        src={propertiesObj.image}
        alt='image of the property'
        className={styles.img}
      />

      <div className={styles.info}>
        <div className={styles.main}>
          <div className={styles.leftPane}>
            <h2 className={styles.name}>{propertiesObj.name}</h2>
            <p className={styles.location}>{propertiesObj.location}</p>
            <p className={styles.distance}>{propertiesObj.distance}</p>
            <p className={styles.description}>{propertiesObj.description}</p>
          </div>

          <div className={styles.rightPane}>
            <div className={styles.ratingsWrapper}>
              <span>Rating:</span>
              <div className={styles.ratings}>
                {stars.map((value, index) => {
                  return (
                    <img
                      src='/star.svg'
                      alt='star'
                      key={index}
                      className={styles.star}
                    />
                  );
                })}
              </div>
            </div>

            <div className={styles.priceWrapper}>
              <span>Price:</span>
              <b>{propertiesObj.price}$</b>
            </div>
          </div>
        </div>

        <button className={styles.btn}>Show details</button>
      </div>
    </div>
  );
}

StaysCard.propTypes = {
  propertiesObj: PropTypes.object.isRequired,
};

export default StaysCard;
