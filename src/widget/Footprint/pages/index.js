import { useState } from 'react';
import Head from 'next/head';
import Calculator from '../components/Calculator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Waste Footprint Calculator</title>
      </Head>
      <Calculator />
    </div>
  );
}
