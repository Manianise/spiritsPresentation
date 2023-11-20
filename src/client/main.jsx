import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error_page.jsx';
import './index.scss'
import './css/first-page.scss'
import './css/popup-screen.scss'
import './css/slider.scss'
import './css/side-message.scss'
import './css/cogwheels.scss'
import './css/satisfied-page.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
