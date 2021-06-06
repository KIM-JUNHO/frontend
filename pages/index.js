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

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  );
}
