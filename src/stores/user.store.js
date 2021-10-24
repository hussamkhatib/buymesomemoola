/* eslint-disable camelcase */
import create from 'zustand';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useUser = create((set) => ({
  address: null,
  contract: null,
  kit: null,
  celoBalance: 0,
  cUSDBalance: 0,
  error: null,
  connectCeloWallet: async () => {
    if (window.celo) {
      try {
        await window.celo.enable();

        const web3 = new Web3(window.celo);
        const kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const user_address = accounts[0];

        kit.defaultAccount = user_address;
        set({ address: user_address, kit });
      } catch (error) {
        set({ error: `⚠️ ${error}.` });
      }
    }
  },
}));
