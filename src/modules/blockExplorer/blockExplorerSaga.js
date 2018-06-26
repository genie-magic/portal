import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as BlockExplorerApi from './blockExplorerApi';

export function* blockExplorerSubscriber() {
  yield all([takeLatest('GET_BLOCK_EXPLORER_INFO', getBlockExplorerInfo)]);
}

export function* getBlockExplorerInfo() {
  try {
    const nodeCountInfo = yield call(BlockExplorerApi.getMasterNodeCount);
    const circulationInfo = yield call(BlockExplorerApi.getCirculation);
    const hashRate = yield call(BlockExplorerApi.getHashRate);
    const blockIndex = yield call(BlockExplorerApi.getCurrentBlockIndex);
    const blockInfo = {
      nodeCount: nodeCountInfo['total'],
      circulation: circulationInfo['c'],
      hashRate,
      blockIndex
    };
    yield put({ type: 'GET_BLOCK_EXPLORER_INFO_SUCCEEDED', blockInfo });
  } catch (error) {
    console.log('ERROR', error);
    yield put({ type: 'GET_BLOCK_EXPLORER_INFO_FAILED', error });
  }
}
