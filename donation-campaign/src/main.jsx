import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Donation from "./Components/Donation/Donation.jsx";
import DonationDetails from "./Components/DonationDetails/DonationDetails.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <Home />, },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/card.json"),
      },
      {
        path: "/stat",
        element: <Statistics />,
        loader: () => fetch("/card.json"),
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
        loader: () => fetch("/card.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
