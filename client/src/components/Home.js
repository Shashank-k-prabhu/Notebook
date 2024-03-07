import React from "react";
import Forms from "./Form";
import Notes from "./Notes";

const Home = () => {
  return (
    <div>
      <div className="container my-4 mx-5">
        <h2>Add a note</h2>
        <Forms />
      </div>
      <div className="container my-3 mx-5">
        <h2>Your Notes</h2>
          <Notes/>
      </div>
    </div>
  );
};

export default Home;
