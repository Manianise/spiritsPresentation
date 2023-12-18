import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error_page.jsx';
import './index.scss'
import './css/slider.scss'
import Loader from './components/loader/Loader.jsx';
import { lazy } from 'react';

function LazyApp() {

  const LazyApp = lazy(() => import('./App.jsx'))
  return <Suspense fallback={<Loader />}>
    <LazyApp />
  </Suspense>

}


const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyApp />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
