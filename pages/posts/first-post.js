import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title> First post </title>
      </Head>
      <h1> This is the first post with image </h1>
      {/* <Image
        src={'https://picsum.photos/seed/picsum/200/300'}
        height={300}
        width={300}
      /> */}
      <Link href="/">
        <a> Go Back </a>
      </Link>
    </Layout>
  );
}
