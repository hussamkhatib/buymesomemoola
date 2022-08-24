import { useAtom } from 'jotai';
import { useCelo } from '@celo/react-celo';
import { userAtom } from './atom';

const useConnectWallet = () => {
  const { connect: celoConnect, disconnect: celoDisconnect } = useCelo();
  const [, setUser] = useAtom(userAtom);

  const connect = async () => {
    const {
      kit: {
        connection: {
          config: { from: address },
        },
      },
    } = await celoConnect();
    const res = await fetch(`/api/users/address/${address}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await res.json();
    setUser({
      name: data.userDetails.name ?? null,
      address,
      bio: data.userDetails.bio ?? null,
      type: data.userDetails?.type ?? null,
      avatar: data.userDetails?.avatar ?? null,
      coverImage: data.userDetails?.coverImage ?? null,
      followers: data.userDetails.followers ?? 0,
      earnings: data.userDetails.earnings ?? 0,
    });
  };
  const disconnect = () => {
    celoDisconnect();
    setUser({});
  };

  return {
    connect,
    disconnect,
  };
};

export default useConnectWallet;
