export const getErrorMessage = (code, defaultMessage = 'Error') => {
  switch (code.trim()) {
    case 'auth/email-already-in-use':
      return 'The email address is already in use';
    case 'auth/invalid-email':
      return 'The email address is not valid';
    case 'auth/operation-not-allowed':
      return 'Operation not allowed';
    case 'auth/weak-password':
      return 'The password is too weak';
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/missing-email':
      return 'Email is missing';
    case 'auth/popup-closed-by-user':
      return 'Popup closed by user';
    default:
      return defaultMessage;
  }
};
