// frontend/src/App.jsx

import "./App.css";
import image from "./assets/headerPic.png";
import Home from "./components/HomePage";
import SignIn from "./components/SignInPage";
import SignUp from "./components/SignupPage";
import LandingPage from "./components/LandingPage";
import LandingPageReg from "./components/LandingPageReg";
import Blog from "./components/BlogPage";

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  const navStyle = {
    listStyleType: "none",
    display: "flex",
    // justifyContent: "space-around",
    justifyContent: "space-evenly",
  };

  const positionNav = {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    marginBottom: "1rem,",
    // zIndex: 1,
  };

  const imgStyle = {
    width: "310px",
    height: "200px",
    borderRadius: "5%",
    margin: "3rem 1rem",
  };
  // const h3Styling = {
  //   fontSize: "15px",
  //   marginRight: "20px",
  // };

  const liStyle = {
    marginRight: "20px",
  };
  return (
    <>
      <nav style={positionNav}>
        {/* <h3 style={h3Styling}>JournalJive</h3> */}
        <ul style={navStyle}>
          <li style={liStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li style={liStyle}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img src={image} alt="home header pic" style={imgStyle}></img>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <SignIn />, path: "/sign-in" },
        { element: <SignUp />, path: "/sign-up" },
        { element: <Blog />, path: "/blog" },
        { element: <LandingPage />, path: "/landing" },
        { element: <LandingPageReg />, path: "/landing-reg" },
      ],
      element: <Root />,
    },
  ]);

  return (
    // Alla inom routerprovider kan användas med <Link>
    <>
      <RouterProvider router={router}>
        <div>
          <Home />
          <SignIn />
          <SignUp />
          <Blog />
          <LandingPage />
          <LandingPageReg />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
