import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

//atoms is similar to slice from Redux.

function MyApp({ Component, pageProps : { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
