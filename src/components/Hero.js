import React from "react";

function Hero({ children, id, gradient }) {
  return (
    <section id={id} className="bg-white">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
