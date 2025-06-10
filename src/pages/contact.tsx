import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import React from 'react'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contact | Bhavani Bojedla</title>
        <meta
          name="description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />
        <meta property="og:title" content="Contact | Bhavani Bojedla" />
        <meta
          property="og:description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />
      </Head>

      <ScrollTop />
      <Contact />
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  )
}
