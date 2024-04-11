import PropTypes from 'prop-types';
import styles from './styles/tourCard.module.css';

function TourCard({ tourObj }) {
  return (
    <div className={styles.content}>
      <img
        className={styles.img}
        src={tourObj.url}
        alt='image of destination'
      />
      <h4 className={styles.header}>{tourObj.name}</h4>
      <p className={styles.description}>{tourObj.description}</p>
      <p className={styles.price}>{tourObj.price}</p>
    </div>
  );
}

TourCard.propTypes = {
  tourObj: PropTypes.object.isRequired,
};

export default TourCard;
