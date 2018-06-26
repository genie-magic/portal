import { handleActions } from 'redux-actions';

import { getBlockExplorerInfo } from './blockExplorerAction';

const defaultState = {
  loading: false,
  error: null,
  blockInfo: {
    nodeCount: 0,
    circulation: 0,
    hashRate: 0,
    blockIndex: 0
  }
};

const reducer = handleActions(
  {
    [getBlockExplorerInfo](state) {
      // noinspection JSAnnotator
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    GET_BLOCK_EXPLORER_INFO_SUCCEEDED: (state, { blockInfo }) => ({
      ...state,
      loading: false,
      error: null,
      blockInfo
    }),
    GET_BLOCK_EXPLORER_INFO_FAILED: (state, { error }) => ({
      ...state,
      loading: false,
      error
    })
  },
  defaultState
);

export default reducer;
