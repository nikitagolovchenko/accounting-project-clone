import {
  createSlice,
  isPending,
  isFulfilled,
  isRejected,
} from '@reduxjs/toolkit';
import {
  signIn,
  signUp,
  signInWithGoogle,
  signInWithFacebook,
  resetPassword,
} from 'store/slices/authSlice';
import { getErrorMessage } from 'utils/codeErrors';

const initialState = {
  show: false,
  message: '',
  variant: 'success',
};

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        isPending(
          signIn,
          signUp,
          signInWithGoogle,
          signInWithFacebook,
          resetPassword
        ),
        state => {
          state.show = false;
        }
      )
      .addMatcher(
        isRejected(
          signIn,
          signUp,
          signInWithGoogle,
          signInWithFacebook,
          resetPassword
        ),
        (state, { error }) => {
          state.show = true;
          state.message = getErrorMessage(error.code);
          state.variant = 'error';
        }
      )
      .addMatcher(
        isFulfilled(
          signIn,
          signUp,
          signInWithGoogle,
          signInWithFacebook,
          resetPassword
        ),
        state => {
          state.show = true;
          state.variant = 'success';
        }
      )
      .addMatcher(
        isFulfilled(signIn, signInWithGoogle, signInWithFacebook),
        state => {
          state.message = 'Login successful';
        }
      )
      .addMatcher(isFulfilled(signUp), state => {
        state.message = 'Register successful';
      })
      .addMatcher(isFulfilled(resetPassword), state => {
        state.message = 'Password reset email sent successfully';
      });
  },
});

export const selectNotice = state => state.notice;

export default noticeSlice.reducer;
