import { createActions } from 'redux-actions';

const { getBlockExplorerInfo } = createActions({
  GET_BLOCK_EXPLORER_INFO: () => ({})
});

export { getBlockExplorerInfo };
