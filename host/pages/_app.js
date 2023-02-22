import Head from 'next/head';
import NextNav from '../components/NextNav';
import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }) {

  const { user } = pageProps
  

  return (
    <UserProvider user={user}>
      <div style={{ border: '1px blue solid', minHeight: "100vh" }}>
        <div style={{ position: 'fixed', top: '5px', right: '10px', color: 'blue' }}>Next host app</div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NextNav />
        <main>
          <Component {...pageProps} auth={pageProps.user} />
        </main>

      </div>
    </UserProvider>
  );
}

export default MyApp;