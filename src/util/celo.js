import { newKitFromWeb3 } from '@celo/contractkit';
import { newLedgerWalletWithSetup } from '@celo/wallet-ledger';
import Eth from '@ledgerhq/hw-app-eth';
import TransportU2F from '@ledgerhq/hw-transport-u2f';
import TransportUSB from '@ledgerhq/hw-transport-webusb';
import Web3 from 'web3';

const getCeloLedgerTransport = () => {
  if (window.USB) {
    return TransportUSB.create();
  }
  if (window.u2f) {
    return TransportU2F.create();
  }

  throw new Error(
    'Ledger Transport not support, please use Chrome, Firefox, Brave, Opera or Edge.'
  );
};

// Handle creating a new Celo ContractKit
const getContractKit = async () => {
  // Create a Web3 provider by passing in the testnet/mainnet URL
  const web3 = new Web3('https://alfajores-forno.celo-testnet.org');

  // Get the appropriate Ledger Transport
  const transport = await getCeloLedgerTransport();

  // Create a new instance of the ETH Ledger Wallet library
  const eth = new Eth(transport);

  // Use the Celo Ledger Wallet setup util
  const wallet = await newLedgerWalletWithSetup(eth.transport);

  // Instantiate the ContractKit
  const kit = newKitFromWeb3(web3, wallet);

  return kit;
};

// Use the gold token contract to transfer tokens
async function transfer(from, to, amount) {
  const kit = await getContractKit();
  const celoTokenContract = await kit.contracts.getGoldToken();
  const tx = await celoTokenContract.transfer(to, amount).send({ from });
  const receipt = await tx.waitReceipt();
  console.log('Transaction Receipt: ', receipt);
}

export default transfer;
