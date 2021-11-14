import React from 'react'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import ReactTooltip from 'react-tooltip'

import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ReactTooltip />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  )
}
