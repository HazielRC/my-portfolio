import React from "react";
import "../stylesheets/Home.css";
import "../stylesheets/Home-Mobile.css";

const Home = () => {
  return (
    <div className="container" id="home">
      <div className="title">
        <span className="text-secondary anim-pulse">Hello. World! 👋</span>
        <h1 className="brand primary">Haziel Campos</h1>
      </div>
      <p className="description secondary">
        <span className="text-orange">Full</span>{" "}
        <span className="text-yellow">Stack </span> 
        Web Developer. I'm Haziel
        Campos, just a guy with a lot of passion and a desire to learn.
      </p>
    </div>
  );
};

export default Home;
