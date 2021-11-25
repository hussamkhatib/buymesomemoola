import React from 'react';

function Footer() {
  return (
    <footer className="items-center p-4 footer bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>© 2020-2021 Buymesomemoola - All Rights Reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        Powered by the Celo network
      </div>
    </footer>
  );
}

export default Footer;
