import { wrapRequest } from '../utils';

const getMasterNodeCount = wrapRequest(async () =>
  fetch('https://explorer.bulwarkcrypto.com/api/masternodecount')
);

const getCirculation = wrapRequest(async () =>
  fetch('https://explorer.bulwarkcrypto.com/api/supply')
);

const getHashRate = wrapRequest(async () =>
  fetch('https://explorer.bulwarkcrypto.com/api/getnetworkhashps')
);

const getCurrentBlockIndex = wrapRequest(async () =>
  fetch('https://explorer.bulwarkcrypto.com/api/getblockcount')
);

export {
  getMasterNodeCount,
  getCirculation,
  getHashRate,
  getCurrentBlockIndex
};
