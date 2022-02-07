export const selectGlobalPrices = state=> state.prices.data;
export const selectGlobalPricesStatus = state=> state.prices.status;
export const selectGlobalPricesError = state=> state.prices.error;
export const selectGlobalPricesCurrency = state=> state.prices.currency;
export const selectGlobalPricesOrder = state=> state.prices.order;
export const selectGlobalPricesFilter = state=> state.prices.filter;


export const selectSymbols = state=> state.symbols.data;
export const selectSymbolsStatus = state=> state.symbols.status;
export const selectSymbolsError = state=> state.symbols.error;

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

export const selectAddSubscription = state=> state.addSubscription.data;
export const selectAddSubscriptionStatus = state=> state.addSubscription.status;
export const selectAddSubscriptionError = state=> state.addSubscription.error;

export const selectUpdateSubscription = state=> state.updateSubscription.data;
export const selectUpdateSubscriptionStatus = state=> state.updateSubscription.status;
export const selectUpdateSubscriptionError = state=> state.updateSubscription.error;

export const selectDeleteSubscription = state=> state.deleteSubscription.data;
export const selectDeleteSubscriptionStatus = state=> state.deleteSubscription.status;
export const selectDeleteSubscriptionError = state=> state.deleteSubscription.error;