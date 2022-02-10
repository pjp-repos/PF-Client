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

export const selectSessionUsername = state=> state.session.userName;
export const selectSessionToken = state=> state.session.token;
export const selectSessionEmail = state=> state.session.email;
export const selectSessionIsAuthenticated = state=> state.session.isAuthenticated;

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

export const selectOrders = state=> state.orders.data;
export const selectOrdersStatus = state=> state.orders.status;
export const selectOrdersError = state=> state.orders.error;

export const selectOrder = state=> state.order.data;
export const selectOrderStatus = state=> state.order.status;
export const selectOrderError = state=> state.order.error;

export const selectAddOrder = state=> state.addOrder.data;
export const selectAddOrderStatus = state=> state.addOrder.status;
export const selectAddOrderError = state=> state.addOrder.error;

export const selectUpdateOrder = state=> state.updateOrder.data;
export const selectUpdateOrderStatus = state=> state.updateOrder.status;
export const selectUpdateOrderError = state=> state.updateOrder.error;

export const selectDeleteOrder = state=> state.deleteOrder.data;
export const selectDeleteOrderStatus = state=> state.deleteOrder.status;
export const selectDeleteOrderError = state=> state.deleteOrder.error;

export const selectTransactions = state=> state.transactions.data;
export const selectTransactionsStatus = state=> state.transactions.status;
export const selectTransactionsError = state=> state.transactions.error;

export const selectPortfolio = state=> state.portfolio.data;
export const selectPortfolioStatus = state=> state.portfolio.status;
export const selectPortfolioError = state=> state.portfolio.error;

export const selectSettings = state=> state.settings.data;
export const selectSettingsStatus = state=> state.settings.status;
export const selectSettingsError = state=> state.settings.error;

export const selectUpdateSettings = state=> state.updateSettings.data;
export const selectUpdateSettingsStatus = state=> state.updateSettings.status;
export const selectUpdateSettingsError = state=> state.updateSettings.error;

