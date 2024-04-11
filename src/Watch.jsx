import ReactPlayer from 'react-player';
import styles from './styles/watch.module.css'

function Watch() {
  return (
    <div className={styles.content}>
      <h3 className={styles.header}>Watch Our Memorable Trips</h3>
      <div className={styles.player}>
        <ReactPlayer  controls url='/video.mp4' />
      </div>
    </div>
  );
}

export default Watch;
