import PropTypes from 'prop-types';
import styles from './styles/flightCard.module.css';

function FlightCard({ flightObj }) {
  const blocks = Array.from({ length: flightObj.stops });
  return (
    <div className={styles.card}>
      <div className={styles.airlines}>
        <img src='/airlines.png' alt='' className={styles.img} />
        <span>Georgian Airlines</span>
      </div>

      <div className={styles.times}>
        <div className={styles.labels}>
          <span>Take off</span>
          <span>Landing</span>
        </div>
        <div className={styles.figureWrapper}>
          <span>{flightObj.takeOff}</span>
          <div className={styles.figure}>
            <hr className={styles.line} />
            <div className={styles.blocks}>
              <div className={styles.blocksWrapper}>
                {blocks.map((value, index) => {
                  return <div className={styles.block} key={index}></div>;
                })}
              </div>
            </div>
          </div>
          <span>{flightObj.landing}</span>
        </div>
      </div>

      <p className={styles.duration}>{flightObj.duration} Hours</p>

      <div className={styles.priceContainer}>
        <div className={styles.priceWrapper}>
          <span>Price</span>
          <span>{flightObj.price}$</span>
        </div>
        <hr />
        <button className={styles.btn}>View Deal</button>
      </div>
    </div>
  );
}

FlightCard.propTypes = {
  flightObj: PropTypes.object.isRequired,
};

export default FlightCard;
