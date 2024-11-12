import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Skill from "./Components/Skill.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Skill",
    element: <Skill />,
  },
  
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
  <RouterProvider router={router}>
     <App/>
  </RouterProvider>
   </StrictMode>
   
);
