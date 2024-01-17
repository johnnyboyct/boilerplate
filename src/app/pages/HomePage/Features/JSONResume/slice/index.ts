import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { jsonResumeSaga } from './saga';
import { JsonResumeState } from './types';
const JSONResume = require('../../../../../../data/jsonResume.json');

export const initialState: JsonResumeState = JSONResume;

console.log('%c⧭', 'color: #00a3cc', JSONResume);
const slice = createSlice({
	name: 'jsonResume',
	initialState,
	reducers: {
		someAction(state, action: PayloadAction<any>) {},
		// loadRepos(state) {
		// 	state.loading = true;
		// 	state.jsonResume = null;
		// 	state.repositories = [];
		// },
		// reposLoaded(state, action: PayloadAction<Repo[]>) {
		// 	const repos = action.payload;
		// 	state.repositories = repos;
		// 	state.loading = false;
		// },
		// repoError(state, action: PayloadAction<RepoErrorType>) {
		// 	state.error = action.payload;
		// 	state.loading = false;
		// },
	},
});

export const { actions: jsonResumeActions } = slice;

export const useJsonResumeSlice = () => {
	useInjectReducer({ key: slice.name, reducer: slice.reducer });
	useInjectSaga({ key: slice.name, saga: jsonResumeSaga });
	return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useJsonResumeSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
