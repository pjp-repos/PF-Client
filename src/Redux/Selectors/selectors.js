export const selectGlobalPrices = state=> state.prices.data;
export const selectGlobalPricesStatus = state=> state.prices.status;
export const selectGlobalPricesError = state=> state.prices.error;
export const selectGlobalPricesAll = state=> [state.prices.data,state.prices.status,state.prices.error];

export const selectGlobalPricesCurrency = state=> state.prices.currency;
export const selectGlobalPricesOrder = state=> state.prices.order;
export const selectGlobalPricesFilter = state=> state.prices.filter;


export const selectSymbols = state=> state.symbols.data;
export const selectSymbolsStatus = state=> state.symbols.status;
export const selectSymbolsError = state=> state.symbols.error;
export const selectSymbolsAll = state=> [state.symbols.data,state.symbols.status,state.symbols.error];

export const selectPairAll = state=> [state.pair.data,state.pair.status,state.pair.error];

export const selectNewAccount = state=> state.newAccount.data;
export const selectNewAccountStatus = state=> state.newAccount.status;
export const selectNewAccountError = state=> state.newAccount.error;
export const selectNewAccountAll = state=> [state.newAccount.data,state.newAccount.status,state.newAccount.error];

export const selectSignIn = state=> state.signIn.data;
export const selectSignInStatus = state=> state.signIn.status;
export const selectSignInError = state=> state.signIn.error;
export const selectSignInAll = state=> [state.signIn.data,state.signIn.status,state.signIn.error];

export const selectSignOut = state=> state.signOut.data;
export const selectSignOutStatus = state=> state.signOut.status;
export const selectSignOutError = state=> state.signOut.error;
export const selectSignOutAll = state=> [state.signOut.data,state.signOut.status,state.signOut.error];

export const selectSessionUsername = state=> state.session.userName;
export const selectSessionToken = state=> state.session.token;
export const selectSessionIsAuthenticated = state=> state.session.isAuthenticated;
export const selectSessionEmail = state=> state.session.email;
export const selectSessionAll = state=> [state.session.userName,state.session.token,state.session.isAuthenticated, state.session.email];

// ==== Subscriptions ===================================================================
export const selectSubscriptionsAll = state=> [state.subscriptions.dataFAS, state.subscriptions.status,state.subscriptions.error];
export const selectAddSubscriptionAll = state=> [state.addSubscription.data,state.addSubscription.status,state.addSubscription.error];
export const selectUpdateSubscriptionAll = state=> [state.updateSubscription.data,state.updateSubscription.status,state.updateSubscription.error];
export const selectDeleteSubscriptionAll = state=> [state.deleteSubscription.data,state.deleteSubscription.status,state.deleteSubscription.error];
export const selectSubscriptionFormAll = state=>[state.formSubscriptions.form,state.formSubscriptions.edit ,state.formSubscriptions.errors,state.formSubscriptions.error]

// ==== Orders ===================================================================
export const selectOrdersAll = state=> [state.orders.dataFAS,state.orders.status,state.orders.error];
export const selectOrderAll = state=> [state.order.data,state.order.status,state.order.error];
export const selectAddOrderAll = state=> [state.addOrder.data,state.addOrder.status,state.addOrder.error];
export const selectUpdateOrderAll = state=> [state.updateOrder.data,state.updateOrder.status,state.updateOrder.error];
export const selectDeleteOrderAll = state=> [state.deleteOrder.data,state.deleteOrder.status,state.deleteOrder.error];

// ==== Transactions ===================================================================
export const selectTransactions = state=> state.transactions.data;
export const selectTransactionsStatus = state=> state.transactions.status;
export const selectTransactionsError = state=> state.transactions.error;
export const selectTransactionsAll = state=> [state.transactions.data,state.transactions.status,state.transactions.error];

export const selectPortfolio = state=> state.portfolio.data;
export const selectPortfolioStatus = state=> state.portfolio.status;
export const selectPortfolioError = state=> state.portfolio.error;
export const selectPortfolioAll = state=> [state.portfolio.data,state.portfolio.status,state.portfolio.error];

export const selectSettings = state=> state.settings.data;
export const selectSettingsStatus = state=> state.settings.status;
export const selectSettingsError = state=> state.settings.error;
export const selectSettingsAll = state=> [state.settings.data,state.settings.status,state.settings.error];

export const selectUpdateSettings = state=> state.updateSettings.data;
export const selectUpdateSettingsStatus = state=> state.updateSettings.status;
export const selectUpdateSettingsError = state=> state.updateSettings.error;
export const selectUpdateSettingsAll = state=> [state.updateSettings.data,state.updateSettings.status,state.updateSettings.error];
//

