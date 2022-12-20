import React from "react";

function Hero({ children, id, gradient }) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-32 flex h-screen items-center">
        <div className="mx-auto max-w-5xl text-center">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
