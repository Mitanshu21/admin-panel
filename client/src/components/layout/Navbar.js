import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar({ loggedUser, setLoggedUser }) {
  return (
    <>
      <div className="shadow-lg">
        <div className="container mx-auto">
          <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4">
            <div className="flex items-center justify-between mb-4 md:mb-0">
              <h1 className="leading-none text-2xl text-grey-darkest">
                <Link
                  className="no-underline text-grey-darkest hover:text-black"
                  to="/"
                >
                  Admin Panel
                </Link>
              </h1>
            </div>

            <nav>
              <ul className="list-reset md:flex md:items-center">
                <li className="md:ml-4">
                  <Link
                    className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {loggedUser ? (
                  <>
                    <li className="md:ml-4">
                      <Link
                        className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                        to="userdetails"
                      >
                        UserDetails
                      </Link>
                    </li>
                    <li className="md:ml-4">
                      <Link
                        className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                        to="usereducation"
                      >
                        UserEducation
                      </Link>
                    </li>
                    <li className="md:ml-4">
                      <Link
                        className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                        onClick={() => {
                          setLoggedUser(false);
                          localStorage.removeItem("user");
                        }}
                        to="/"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="md:ml-4">
                      <Link
                        className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                        to="register"
                      >
                        Register
                      </Link>
                    </li>
                    <li className="md:ml-4">
                      <Link
                        className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                        to="login"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
