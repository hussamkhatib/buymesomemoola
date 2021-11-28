/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
import create from 'zustand';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';
import BigNumber from 'bignumber.js';

const ERC20_DECIMALS = 18;

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useUser = create((set) => ({
  address: null,
  name: null,
  avatar: null,
  followers: 0,
  contract: null,
  kit: null,
  celoBalance: 0,
  cUSDBalance: 0,
  error: null,
  web3: null,
  isRegisteredUser: false,
  loading: true,
  toggleRegisteredUser: () =>
    set((state) => ({
      isRegisteredUser: !state.isRegisteredUser,
    })),
  connectCeloWallet: async () => {
    if (window.celo) {
      try {
        await window.celo.enable();

        const web3 = new Web3(window.celo);
        const kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const user_address = accounts[0];

        kit.defaultAccount = user_address;

        const bal = await getBalance(kit, user_address);
        const { celoBalance, cUSDBalance } = bal;
        set({ address: user_address, kit, celoBalance, cUSDBalance, web3 });
        const res = await fetch(`/api/users/address/${user_address}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { data } = await res.json();
        // handle error
        if (data) {
          set({
            name: data.userDetails.name,
            followers: data.followers,
            avatar: data.userDetails.avatar,
          });
        } else set({ isRegisteredUser: true });
      } catch (error) {
        set({ error: `⚠️ ${error}.` });
      }
    }
    set({ loading: false });
  },
}));

async function getBalance(kit, address) {
  const balance = await kit.getTotalBalance(address);
  const celoBalance = balance.CELO.shiftedBy(-ERC20_DECIMALS).toFixed(2);
  const cUSDBalance = balance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);
  return { celoBalance, cUSDBalance };
}
