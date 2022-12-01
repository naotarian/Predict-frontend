import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Header from '../components/Parts/Template/Header'
import Template from '@/components/Templates/Top/Index'
import WrapperGrid from '@/components/Atoms/WrapperGrid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Laravel</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <WrapperGrid template={<Template />} />
    </>
  )
}
