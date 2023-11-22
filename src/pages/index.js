import Head from 'next/head';
import Explore from '../components/explorer';

export default function Home() {
  return (
   <div>
      <Head>
        <title>Nounish Explorer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Explore />
      </div>
  );
}
