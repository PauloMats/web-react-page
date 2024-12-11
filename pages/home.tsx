'use client';

import React from 'react';
import ReasonsCarousel from '../web-react-interface/src/app/components/landing2/ReasonsCarousel';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to Defendy</p>
      <button
        onClick={() => {
          throw new Error('This is your first error!');
        }}
      ></button>
      <ReasonsCarousel />
    </div>
  );
}
