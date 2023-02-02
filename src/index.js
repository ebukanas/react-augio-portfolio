import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/main.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import WorkPage from './pages/workpage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//     {
//       path: '/workpage',
//       element: <WorkPage />,
//       children: [
//         {
//           path: '/workpage/:kernagisId',
//           element: <WorkPage />,
//         },
//       ]
//     },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
