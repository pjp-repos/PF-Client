export const selectGlobalPrices = state=> state.prices.data;
export const selectGlobalPricesStatus = state=> state.prices.status;
export const selectGlobalPricesError = state=> state.prices.error;

export const selectNewAccount = state=> state.newAccount.data;
export const selectNewAccountStatus = state=> state.newAccount.status;
export const selectNewAccountError = state=> state.newAccount.error;

export const selectSignIn = state=> state.signIn.data;
export const selectSignInStatus = state=> state.signIn.status;
export const selectSignInError = state=> state.signIn.error;

export const selectSignOut = state=> state.signOut.data;
export const selectSignOutStatus = state=> state.signOut.status;
export const selectSignOutError = state=> state.signOut.error;

export const selectSubscriptions = state=> state.subscriptions.data;
export const selectSubscriptionsStatus = state=> state.subscriptions.status;
export const selectSubscriptionsError = state=> state.subscriptions.error;

export const selectSubscription = state=> state.subscription.data;
export const selectSubscriptionStatus = state=> state.subscription.status;
export const selectSubscriptionError = state=> state.subscription.error;

export const selectAddSubscription = state=> state.addSubscriptions.data;
export const selectAddSubscriptionStatus = state=> state.addSubscriptions.status;
export const selectAddSubscriptionError = state=> state.addSubscriptions.error;

export const selectUpdateSubscription = state=> state.updateSubscriptions.data;
export const selectUpdateSubscriptionStatus = state=> state.updateSubscriptions.status;
export const selectUpdateSubscriptionError = state=> state.updateSubscriptions.error;

export const selectDeleteSubscription = state=> state.deleteSubscriptions.data;
export const selectDeleteSubscriptionStatus = state=> state.deleteSubscriptions.status;
export const selectDeleteSubscriptionError = state=> state.deleteSubscriptions.error;