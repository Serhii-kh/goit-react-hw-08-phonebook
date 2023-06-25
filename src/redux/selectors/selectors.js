export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getIsAuth = state => state.auth.access_token;
export const getIsLoginned = state => state.auth.isLoginned;
export const getIsSignedUp = state => state.auth.isSignedUp;
export const getUserEmail = state => state.auth.profile.email;

