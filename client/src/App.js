import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import ProtectedRoute from "./components/validator/ProtectedRoute";
import PublicRoute from "./components/validator/PublicRoute";
import UserDetails from "./components/pages/UserDetails";
import UserEducation from "./components/pages/UserEducation/UserEducation";
import Navbar from "./components/layout/Navbar";

function App() {
  const [loggedUser, setLoggedUser] = useState(false);

  // useeffect check if user is logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedUser(JSON.parse(user));
    }
  }, []);
  // console.log(loggedUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            }
          >
            <Route path="/" element={<Home loggedUser={loggedUser} />} />
            <Route element={<PublicRoute loggedUser={loggedUser} />}>
              <Route path="register" element={<Register />} />
              <Route
                path="login"
                element={<Login setLoggedUser={setLoggedUser} />}
              />
            </Route>
            <Route element={<ProtectedRoute loggedUser={loggedUser} />}>
              <Route path="userdetails" element={<UserDetails />} />
              <Route path="usereducation" element={<UserEducation />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
