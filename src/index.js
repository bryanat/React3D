import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import Scene1 from './Scenes/Scene1'
import Scene2 from './Scenes/Scene2'
import MyScene from './Scenes/MyScene'
import App from './App'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/myscene",
      element: <MyScene />
    }
  ]);

// Setup router at root "/"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
