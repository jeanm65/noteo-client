import { showError } from '../actions/app';

/**
 * returns a thunk
 * @param thunkOrPromise (signature if thunk: (dispatch : func, getState : func) : Promise)
 * @returns {function(*=, *=): Promise<void>}
 */
 export const actionWithLoader = (thunkOrPromise) => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'LOADING_START',
    });
    try {
      if (typeof thunkOrPromise === 'function') {
        const response = await thunkOrPromise(dispatch, getState);
        return response;
      }
        await thunkOrPromise;
    } catch (error) {
      showError(error)(dispatch);
    } finally {
      dispatch({
        type: 'LOADING_END',
      });
    }
  };
};
