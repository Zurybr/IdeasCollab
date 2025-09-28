import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import { Hero } from "./pages/Hero.tsx";
import Login from "./pages/auth/Login.tsx";
import SignUp from "./pages/auth/SignUp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landing",
    element: <App />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },
  {
    path: "/products",
    element: <Hero />,
  },
  {
    path: "/solutions",
    element: <Hero />,
  },
  {
    path: "/resources",
    element: <Hero />,
  },
  {
    path: "/pricing",
    element: <Hero />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
