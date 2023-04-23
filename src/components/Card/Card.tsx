import styles from './Card.module.scss';
import hero from '../../assets/images/illustration-hero.svg';
import music from '../../assets/images/icon-music.svg';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.hero}>
        <img src={hero} alt='Hero' />
      </div>
      <h1 className={styles.title}>Order Summary</h1>
      <p className={styles.subtitle}>
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
      </p>
      <div className={styles.payment}>
        <div className={styles.icon}>
          <img src={music} alt='Music' />
        </div>
        <div className={styles.plan}>
          <span className={styles.name}> Annual Plan</span>
          <span className={styles.price}>$59.99/year</span>
        </div>
        <div className={styles.change}>
          <span>Change</span>
        </div>
      </div>
      <button className={styles.proceed}>Proceed to Payment</button>
      <button className={styles.cancel}>Cancel Order</button>
    </div>
  );
};

export default Card;
