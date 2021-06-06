import { gql } from '@apollo/client';
import styles from '../styles/Home.module.css';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
