import React from "react";

function Home({ loggedUser }) {
  return (
    <>
      {loggedUser ? (
        <p className="text-center pt-24">
          You are logged in as {loggedUser.firstname} {loggedUser.lastname}
        </p>
      ) : (
        <p className="text-center pt-24 ">You are not logged in.</p>
      )}
    </>
  );
}

export default Home;
