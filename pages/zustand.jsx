import React from "react";
import { useStore } from "../src/stores/user.store";


export default function Zustand() {
  const bears = useStore(state => state.bears)
  const increasePopulation = useStore(state => state.increasePopulation)

  return <div>
    <h1>Zustand</h1>
    <p>
      Bears {bears}
    </p>
    <button type='button' onClick={increasePopulation}>
      Increase population 
    </button>
    <button type='button' onClick={increasePopulation}>
      Remove all bears 
    </button>
  </div>;
}
