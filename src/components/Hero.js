import React from "react";

function Hero({ children, id, gradient }) {
  return (
    <section id={id} className={gradient}>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
