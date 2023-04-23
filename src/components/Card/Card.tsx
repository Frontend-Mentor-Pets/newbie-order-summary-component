import styles from './Card.module.scss';
import hero from '../../assets/images/illustration-hero.svg';
import music from '../../assets/images/icon-music.svg';

const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <img src={hero} alt='Hero' />
      </div>
      <h1>Order Summary</h1>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
      <div>
        <div>
          <img src={music} alt='Music' />
        </div>
        <div>
          <span> Annual Plan</span>
          <span>$59.99/year</span>
        </div>
        <div>
          <span>Change</span>
        </div>
      </div>
      <button>Proceed to Payment</button>
      <button>Cancel Order</button>
    </div>
  );
};

export default Card;
