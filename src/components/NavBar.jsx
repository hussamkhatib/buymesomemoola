import React from 'react';

function NavBar() {
  return (
    <nav class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">Buy me some Moola</span>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">connect</button>
      </div>
    </nav>
  );
}

export default NavBar;
