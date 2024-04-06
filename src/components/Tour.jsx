import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import styles from '../styles/tour.module.css';
import tours from '../data/tours';
import TourCard from './TourCard';

function Tour() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: true,
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className={styles.content}>
      <h3 className={styles.header}>Popular Tour Offers</h3>
      <div className={styles.btns}>
        <div onClick={scrollPrev}>
          <img src='/chevronLeft.svg' alt='' />
        </div>
        <div onClick={scrollNext}>
          <img src='/chevronRight.svg' alt='' />
        </div>
      </div>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {tours.map((tour, index) => {
              return (
                <div key={index} className={styles.embla__slide}>
                  <TourCard tourObj={tour} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
// className={styles.embla__slide}

export default Tour;
