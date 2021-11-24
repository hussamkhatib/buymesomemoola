import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center px-2 h-hero max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-4xl lg:text-6xl pb-4 md:pb-7 lg:pb-10 font-bold text-center">
        A supporter is worth a thousand followers.
      </h3>
      <p className="md:text-lg lg:text-2xl text-center pb-4 md:pb-7 lg:pb-10">
        Accept donations. Start a membership. Sell anything you like. It’s
        easier than you think.
      </p>
      <button className="btn btn-primary w-96 mb-2" type="button">
        Start your page
      </button>
      <p>It’s free, and takes less than a minute.</p>
    </div>
  );
}

export default Hero;
