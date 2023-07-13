import '../styles/globals.css'
import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps }}) {
  useEffect(() => {
		AOS.init({
			delay: 400,
			duration: 800,
		});
   });
  useEffect(() => {
    AOS.refresh()
  }, [])
  return (<SessionProvider session={session}>
  <Component {...pageProps}/>
</SessionProvider>)
}
