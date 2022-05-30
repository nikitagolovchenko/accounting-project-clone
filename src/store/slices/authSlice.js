import { createSlice, isAnyOf, createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile as firebaseUpdateProfile,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from 'firebaseConfig';

const initialState = {
  user: undefined,
  loading: true,
};

export const signIn = createAsyncThunk('auth/signIn', ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password)
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ firstName, lastName, email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);

    const displayName = `${firstName} ${lastName}`;

    await firebaseUpdateProfile(auth.currentUser, {
      displayName,
    });

    return displayName;
  }
);

export const signOut = createAsyncThunk('auth/signOut', () =>
  firebaseSignOut(auth)
);

export const resetPassword = createAsyncThunk('auth/resetPassword', email =>
  sendPasswordResetEmail(auth, email)
);

export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', () =>
  signInWithPopup(auth, googleProvider)
);

export const signInWithFacebook = createAsyncThunk(
  'auth/signInWithFacebook',
  () => signInWithPopup(auth, facebookProvider)
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.init = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user.displayName = payload;
      })
      .addMatcher(
        isAnyOf(
          signIn.pending,
          signUp.pending,
          signOut.pending,
          resetPassword.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          signIn.fulfilled,
          signUp.fulfilled,
          signInWithGoogle.fulfilled,
          signInWithFacebook.fulfilled,
          resetPassword.fulfilled
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signIn.rejected,
          signUp.rejected,
          signOut.rejected,
          resetPassword.rejected,
          signInWithGoogle.rejected,
          signInWithFacebook.rejected
        ),
        (state, { error }) => {
          state.loading = false;
          state.error = error;
        }
      );
  },
});

export const { setUser } = authSlice.actions;

export const startAuthListener = () => dispatch => {
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(
        setUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
    } else {
      dispatch(setUser(null));
    }
  });
};

export const selectAuth = state => state.auth;

export default authSlice.reducer;
