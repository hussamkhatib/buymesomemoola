import React from 'react';

function Footer() {
  return (
    <footer className="items-center p-4 footer bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <small>© 2022 Buymesomemoola - All Rights Reserved</small>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        Powered by the Celo network
      </div>
    </footer>
  );
}

export default Footer;
