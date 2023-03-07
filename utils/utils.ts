import { AnkrProvider } from '@ankr.com/ankr.js';
import { useNFTsByOwner } from 'ankr-react';

const provider = new AnkrProvider('3456f1ae711b70db82049e2a1157f0363b95f08b2a6ac871b680e36042c7bd8e');


export const getNfts = async (address: string) => {
    const { assets } = await provider.getNFTsByOwner({
      walletAddress: address,
      blockchain: ['eth', 'polygon', 'bsc', 'arbitrum' ,'polygon'],
    });
    return {
      nfts: assets,
    };
  };