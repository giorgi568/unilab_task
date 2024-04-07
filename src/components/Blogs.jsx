import styles from '../styles/blogs.module.css';

function Blogs() {
  return (
    <div className={styles.content}>
      <h3>Blogs</h3>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src='/blogsImgs/ornament.png' alt='photo of an ornament' />
          <p> Interesting Tibetian Traditions </p>
        </div>
        <div className={styles.card}>
          <img src='/blogsImgs/mountain.png' alt='photo of the mountain' />
          <p> Are There Volcanos In Hawaii? </p>
        </div>
        <div className={styles.card}>
          <img src='/blogsImgs/iceland.png' alt='photo of the iceland' />
          <p> Winter in Iceland </p>
        </div>
        <div className={styles.card}>
          <img src='/blogsImgs/ornament.png' alt='photo of an ornament' />
          <p> Interesting Tibetian Traditions </p>
        </div>
        <div className={styles.card}>
          <img src='/blogsImgs/mountain.png' alt='photo of the mountain' />
          <p> Are There Volcanos In Hawaii? </p>
        </div>
        <div className={styles.card}>
          <img src='/blogsImgs/iceland.png' alt='photo of the iceland' />
          <p> Winter in Iceland </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
