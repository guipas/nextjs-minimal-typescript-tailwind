import toast from 'react-hot-toast';
import Head from 'next/head'
import { useState } from 'react';

import { Layout } from '../components/Layout'
import { useRouter } from 'next/dist/client/router';


const Index = () => {

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Nextjs</title>
      </Head>
      <div>
        hello, world !
      </div>
    </Layout>
  )
}

export default Index