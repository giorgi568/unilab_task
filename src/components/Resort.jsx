import { useParams } from 'react-router-dom';
import styles from '../styles/resort.module.css';
import properties from '../data/properties';

function Resort() {
  let { id } = useParams();
  id = Number(id);
  const property = properties.find((property) => property.id === id);
  const stars = Array.from({ length: property.rating });
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.filtersHeader}>
            <h4>Searched By:</h4>
          </div>

          <div className={styles.info}>
            <span>Destination</span>
            <div className={styles.box}>{property.location}</div>
            <span>Check-in date</span>
            <div className={styles.box}>thursday, february 1, 2024</div>
            <span>Check-out date</span>
            <div className={styles.box}>friday, february 9, 2024</div>
            <span>Persons</span>
            <div className={styles.box}>2 adults, 0 children, 1 room</div>
          </div>

          <img src='/map.png' alt='map' className={styles.map} />

          <div className={styles.facilities}>
            <span>All the facilities:</span>
            <ul>
              <li>Private pool</li>
              <li>Terrace</li>
              <li>Kitchen</li>
              <li>1 Bedroom</li>
              <li>2 Bathrooms</li>
              <li>Kids play space</li>
              <li>Billiard room</li>
              <li>Private gym</li>
            </ul>
          </div>
        </div>

        <div className={styles.resortPane}>
          <div className={styles.header}>
            <div className={styles.nameWrapper}>
              <h4>{property.name}</h4>
              <div>
                <img src='/location.svg' alt='location' />
                <span>{property.location}</span>
              </div>
            </div>

            <div className={styles.ratingWrapper}>
              <span>Rating:</span>
              <div className={styles.icons}>
                <img src='/heart.svg' alt='heart' />
                <img src='/share.svg' alt='share' />
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
          </div>

          <div className={styles.imagesWrapper}>
            <img
              src='/resortImgs/bythepool.png'
              alt='pool'
              className={styles.bigImage}
            />
            <div className={styles.smallImages}>
              <img
                src='/resortImgs/sea.png'
                alt='sea'
                className={styles.smallImage}
              />
              <img
                src='/resortImgs/thepool.png'
                alt='pool'
                className={styles.smallImage}
              />
            </div>
          </div>

          <div className={styles.footerWrapper}>
            <div className={styles.priceWrapper}>
              <div className={styles.box}>Price: {property.price}$</div>
              <div className={styles.box}>
                Total price: {property.price + 2400}$
              </div>
              <button className={styles.book}>Book Now</button>
            </div>
            <p className={styles.description}> {property.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resort;
