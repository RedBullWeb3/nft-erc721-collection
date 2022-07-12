import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MegaKursMonsters',
  tokenName: 'Mega Kurs Monsters',
  tokenSymbol: 'MK-M',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 300,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.005,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.005,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x18D1C935730Ac9C8194860737E3F376ED6a07C4C",
  marketplaceIdentifier: 'Mega-kurs-monsters',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
