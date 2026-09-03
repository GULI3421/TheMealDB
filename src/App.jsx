import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './router';

export default function App() {
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}
