import { Nft } from '@ankr.com/ankr.js/dist/types';
import { useEffect, useState } from 'react';
import { getNfts } from './utils';

export const useNfts = (address: string) => {
  const [nfts, setNfts] = useState<Nft[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNfts = async () => {
      setError(null);
      setLoading(true);
      try {
        const { nfts } = await getNfts(address);
        setNfts(nfts);
      } catch (e) {
        setNfts([]);
        setError(e as Error);
      }
      setLoading(false);
    };
    fetchNfts();
  }, [address]);

  return { nfts, loading, error };
};