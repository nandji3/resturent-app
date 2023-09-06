import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./Store/AuthContext";

// Layout Pages
import RootLayouts from "./Layouts/RootLayouts";

// Pages
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Gallery from "./Pages/Gallery/Gallery";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Landing from "./Pages/Landing/Landing";
import Cart from "./Pages/Cart/Cart";
import PageNotFound from "./Pages/PageNotFound";


const App = () => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div >
      <Routes>
        <Route path="/" element={<RootLayouts />} >
          <Route index element={isLoggedIn ? <Home /> : <Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="landing" element={<Landing />} />
          <Route path="gallery" element={<Gallery />} />
          {isLoggedIn && <Route path="shop" element={<Shop />} />}
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;



