import React from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Andy from './components/BOYS/Andy';
import Brett from './components/BOYS/Brett';
import Pepe from './components/BOYS/Pepe';
import Landwolf from './components/BOYS/Landwolf';
import Birddog from './components/BOYS/Birddog';
import Pulsechain from './components/BRIDGE/Pulsechain';
import Base from './components/BRIDGE/Base';
import Pulsechaine from './components/CHAINS/Pulsechaine';
import Basee from './components/CHAINS/Basee';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const ErrorPage = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h1>404 Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home.js",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contact.js",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Andy.js",
    element: <Andy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Brett.js",
    element: <Brett />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Pepe.js",
    element: <Pepe />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Landwolf.js",
    element: <Landwolf />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Birddog.js",
    element: <Birddog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Pulsechain.js",
    element: <Pulsechain />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Base.js",
    element: <Base />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Pulsechaine.js",
    element: <Pulsechaine />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Basee.js",
    element: <Basee />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
