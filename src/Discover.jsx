import { useState } from 'react';
import styles from './styles/discover.module.css';
import Modal from './Modal';

function Discover() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.content}>
      <h3 className={styles.mainHeader}>Discover Our Services</h3>
      <p className={styles.mainP}>
        ExploreEra provides a one-stop solution for individuals seeking
        well-planned journeys. These services include expert advice on
        destination selection, flight and accommodation bookings, and customized
        itineraries to individual preferences.
      </p>
      <a
        className={styles.seeall}
        target='_blank'
        rel='noopener noreferrer'
        onClick={()=> {
          setModalOpen(true)
        }}
      >
        see all
      </a>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img
            src='servicesImgs/plane.png'
            alt='photo of a plane'
            className={styles.img}
          />
          <h4 className={styles.cardHeader}>Book Flight</h4>
          <p className={styles.cardP}>
            book memorable journey with our flight booking services! we&apos;re
            thrilled to present you flight options to suit your travel needs.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src='servicesImgs/pool.png'
            alt='photo of a plane'
            className={styles.img}
          />
          <h4 className={styles.cardHeader}>Book Hotels</h4>
          <p className={styles.cardP}>
            book memorable journey with our flight booking services! we&apos;re
            thrilled to present you flight options to suit your travel needs.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src='servicesImgs/cruise.png'
            alt='photo of a plane'
            className={styles.img}
          />
          <h4 className={styles.cardHeader}>Book Cruises</h4>
          <p className={styles.cardP}>
            book memorable journey with our flight booking services! we&apos;re
            thrilled to present you flight options to suit your travel needs.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src='servicesImgs/boat.png'
            alt='photo of a plane'
            className={styles.img}
          />
          <h4 className={styles.cardHeader}>Book family Vacation</h4>
          <p className={styles.cardP}>
            book memorable journey with our flight booking services! we&apos;re
            thrilled to present you flight options to suit your travel needs.
          </p>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen}/>}
    </div>
  );
}

export default Discover;
