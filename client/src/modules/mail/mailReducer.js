import { handleActions } from 'redux-actions';
import { postSendEmail } from './mailAction';
const defaultState = {
  loading: false,
  error: null,
  success: false
};

const reducer = handleActions(
  {
    [postSendEmail](state) {
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    },
    POST_SEND_EMAIL_SUCCEEDED: (state, { data }) => ({
      ...state,
      loading: false,
      error: null,
      success: true
    }),
    POST_SEND_EMAIL_FAILED: (state, { error }) => ({
      ...state,
      loading: false,
      error,
      success: false
    })
  },
  defaultState
);

export default reducer;
