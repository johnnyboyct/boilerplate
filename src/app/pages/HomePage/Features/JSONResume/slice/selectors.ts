import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.jsonResume || initialState;

export const selectJsonResume = createSelector([selectSlice], state => state);
