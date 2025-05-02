/*
 * @Author:  
 * @Date: 2024-07-11 09:26:15
 * @LastEditors:  
 * @LastEditTime: 2025-05-02 09:10:23
 * @FilePath: /nextjs-webiste/src/pages/_app.tsx
 */

import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ThirdwebProvider } from "thirdweb/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getBscChain } from '../constants/function'
// import { TokenProvider } from '../context/TokenContext'
import 'styles/style.scss'
import 'i18n'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  // Solve the language problem of choice
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false)

  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])

  if (!initialRenderComplete) return <></>

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider chain={getBscChain()}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  )
}

export default MyApp
