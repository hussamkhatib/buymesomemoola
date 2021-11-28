import React from 'react';
import { useStore, useUser } from '../src/stores/user.store';
import TextEditor from '../src/components/posts/TextEditor';

export default function Zustand() {
  const bears = useStore((state) => state.bears);
  const celoBalance = useUser((state) => state.celoBalance);
  const cUSDBalance = useUser((state) => state.cUSDBalance);

  const increasePopulation = useStore((state) => state.increasePopulation);

  return (
    <div>
      <h1>Zustand</h1>
      <p>Bears {bears}</p>
      <button type="button" onClick={increasePopulation}>
        Increase population
      </button>
      <button type="button" onClick={increasePopulation}>
        Remove all bears
      </button>

      <p>celoBalance: {celoBalance}</p>
      <p>cUSDBalance: {cUSDBalance}</p>

      <TextEditor />
    </div>
  );
}
