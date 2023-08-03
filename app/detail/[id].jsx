import { useRouter } from 'next/router';
import React from 'react';

export const Detalle = () => {
  const router = useRouter();
  console.log(router);

  return <div>Detalle</div>;
};
