import { l as NumberUtil, m as withErrorBoundary, R as RouterController, n as SnackController, o as ConnectionController, a as ConstantsUtil$1, p as EventsController, q as getPreferredAccountType, W as W3mFrameRpcConstants, C as ChainController, B as BlockchainApiController, t as CoreHelperUtil, x as SwapApiUtil, y as AlertController, z as BalanceUtil, D as ConstantsUtil$2, F as getActiveNetworkTokenAddress, G as ConnectorController, H as subscribeKey, I as subscribe, J as proxy, M as ModalController, K as SIWXUtil, j as css, r as resetStyles, d as i, e as b, k as elementStyles, w, P as ProviderController, L as ContractUtil, O as ParseUtil, Q as FetchUtil, T as HelpersUtil$1, U as OptionsController, V as getNativeTokenAddress, X as AssetUtil, v as vars, i as i$1, Y as AssetController, A as ApiController, Z as ThemeController, _ as initializeTheming, $ as AdapterController } from "./core-RzmZL7h8.js";
import { c as customElement, n, o, r, a as networkSvgMd, U as UiHelperUtil, e } from "./index-DdLdozlv.js";
import "./main-COYxrflT.js";
const SwapCalculationUtil = {
  getGasPriceInEther(gas, gasPrice) {
    const totalGasCostInWei = gasPrice * gas;
    const totalGasCostInEther = Number(totalGasCostInWei) / 1e18;
    return totalGasCostInEther;
  },
  getGasPriceInUSD(networkPrice, gas, gasPrice) {
    const totalGasCostInEther = SwapCalculationUtil.getGasPriceInEther(gas, gasPrice);
    const networkPriceInUSD = NumberUtil.bigNumber(networkPrice);
    const gasCostInUSD = networkPriceInUSD.times(totalGasCostInEther);
    return gasCostInUSD.toNumber();
  },
  getPriceImpact({ sourceTokenAmount, sourceTokenPriceInUSD, toTokenPriceInUSD, toTokenAmount }) {
    const inputValue = NumberUtil.bigNumber(sourceTokenAmount).times(sourceTokenPriceInUSD);
    const outputValue = NumberUtil.bigNumber(toTokenAmount).times(toTokenPriceInUSD);
    const priceImpact = inputValue.minus(outputValue).div(inputValue).times(100);
    return priceImpact.toNumber();
  },
  getMaxSlippage(slippage, toTokenAmount) {
    const slippageToleranceDecimal = NumberUtil.bigNumber(slippage).div(100);
    const maxSlippageAmount = NumberUtil.multiply(toTokenAmount, slippageToleranceDecimal);
    return maxSlippageAmount.toNumber();
  },
  getProviderFee(sourceTokenAmount, feePercentage = 85e-4) {
    const providerFee = NumberUtil.bigNumber(sourceTokenAmount).times(feePercentage);
    return providerFee.toString();
  },
  isInsufficientNetworkTokenForGas(networkBalanceInUSD, gasPriceInUSD) {
    const gasPrice = gasPriceInUSD || "0";
    if (NumberUtil.bigNumber(networkBalanceInUSD).eq(0)) {
      return true;
    }
    return NumberUtil.bigNumber(NumberUtil.bigNumber(gasPrice)).gt(networkBalanceInUSD);
  },
  isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, balance) {
    var _a, _b;
    const sourceTokenBalance = (_b = (_a = balance == null ? void 0 : balance.find((token) => token.address === sourceTokenAddress)) == null ? void 0 : _a.quantity) == null ? void 0 : _b.numeric;
    const isInSufficientBalance = NumberUtil.bigNumber(sourceTokenBalance || "0").lt(sourceTokenAmount);
    return isInSufficientBalance;
  }
};
const INITIAL_GAS_LIMIT = 15e4;
const TO_AMOUNT_DECIMALS = 6;
const initialState = {
  // Loading states
  initializing: false,
  initialized: false,
  loadingPrices: false,
  loadingQuote: false,
  loadingApprovalTransaction: false,
  loadingBuildTransaction: false,
  loadingTransaction: false,
  // Control states
  switchingTokens: false,
  // Error states
  fetchError: false,
  // Approval & Swap transaction states
  approvalTransaction: void 0,
  swapTransaction: void 0,
  transactionError: void 0,
  // Input values
  sourceToken: void 0,
  sourceTokenAmount: "",
  sourceTokenPriceInUSD: 0,
  toToken: void 0,
  toTokenAmount: "",
  toTokenPriceInUSD: 0,
  networkPrice: "0",
  networkBalanceInUSD: "0",
  networkTokenSymbol: "",
  inputError: void 0,
  // Request values
  slippage: ConstantsUtil$2.CONVERT_SLIPPAGE_TOLERANCE,
  // Tokens
  tokens: void 0,
  popularTokens: void 0,
  suggestedTokens: void 0,
  foundTokens: void 0,
  myTokensWithBalance: void 0,
  tokensPriceMap: {},
  // Calculations
  gasFee: "0",
  gasPriceInUSD: 0,
  priceImpact: void 0,
  maxSlippage: void 0,
  providerFee: void 0
};
const state$2 = proxy({ ...initialState });
const controller$1 = {
  state: state$2,
  subscribe(callback) {
    return subscribe(state$2, () => callback(state$2));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$2, key, callback);
  },
  getParams() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const namespace = ChainController.state.activeChain;
    const caipAddress = ((_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.caipAddress) ?? ChainController.state.activeCaipAddress;
    const address = CoreHelperUtil.getPlainAddress(caipAddress);
    const networkAddress = getActiveNetworkTokenAddress();
    const connectorId = ConnectorController.getConnectorId(ChainController.state.activeChain);
    if (!address) {
      throw new Error("No address found to swap the tokens from.");
    }
    const invalidToToken = !((_b = state$2.toToken) == null ? void 0 : _b.address) || !((_c = state$2.toToken) == null ? void 0 : _c.decimals);
    const invalidSourceToken = !((_d = state$2.sourceToken) == null ? void 0 : _d.address) || !((_e = state$2.sourceToken) == null ? void 0 : _e.decimals) || !NumberUtil.bigNumber(state$2.sourceTokenAmount).gt(0);
    const invalidSourceTokenAmount = !state$2.sourceTokenAmount;
    return {
      networkAddress,
      fromAddress: address,
      fromCaipAddress: caipAddress,
      sourceTokenAddress: (_f = state$2.sourceToken) == null ? void 0 : _f.address,
      toTokenAddress: (_g = state$2.toToken) == null ? void 0 : _g.address,
      toTokenAmount: state$2.toTokenAmount,
      toTokenDecimals: (_h = state$2.toToken) == null ? void 0 : _h.decimals,
      sourceTokenAmount: state$2.sourceTokenAmount,
      sourceTokenDecimals: (_i = state$2.sourceToken) == null ? void 0 : _i.decimals,
      invalidToToken,
      invalidSourceToken,
      invalidSourceTokenAmount,
      availableToSwap: caipAddress && !invalidToToken && !invalidSourceToken && !invalidSourceTokenAmount,
      isAuthConnector: connectorId === ConstantsUtil$1.CONNECTOR_ID.AUTH
    };
  },
  async setSourceToken(sourceToken) {
    if (!sourceToken) {
      state$2.sourceToken = sourceToken;
      state$2.sourceTokenAmount = "";
      state$2.sourceTokenPriceInUSD = 0;
      return;
    }
    state$2.sourceToken = sourceToken;
    await SwapController.setTokenPrice(sourceToken.address, "sourceToken");
  },
  setSourceTokenAmount(amount) {
    state$2.sourceTokenAmount = amount;
  },
  async setToToken(toToken) {
    if (!toToken) {
      state$2.toToken = toToken;
      state$2.toTokenAmount = "";
      state$2.toTokenPriceInUSD = 0;
      return;
    }
    state$2.toToken = toToken;
    await SwapController.setTokenPrice(toToken.address, "toToken");
  },
  setToTokenAmount(amount) {
    state$2.toTokenAmount = amount ? NumberUtil.toFixed(amount, TO_AMOUNT_DECIMALS) : "";
  },
  async setTokenPrice(address, target) {
    let price = state$2.tokensPriceMap[address] || 0;
    if (!price) {
      state$2.loadingPrices = true;
      price = await SwapController.getAddressPrice(address);
    }
    if (target === "sourceToken") {
      state$2.sourceTokenPriceInUSD = price;
    } else if (target === "toToken") {
      state$2.toTokenPriceInUSD = price;
    }
    if (state$2.loadingPrices) {
      state$2.loadingPrices = false;
    }
    if (SwapController.getParams().availableToSwap && !state$2.switchingTokens) {
      SwapController.swapTokens();
    }
  },
  async switchTokens() {
    if (state$2.initializing || !state$2.initialized || state$2.switchingTokens) {
      return;
    }
    state$2.switchingTokens = true;
    try {
      const newSourceToken = state$2.toToken ? { ...state$2.toToken } : void 0;
      const newToToken = state$2.sourceToken ? { ...state$2.sourceToken } : void 0;
      const newSourceTokenAmount = newSourceToken && state$2.toTokenAmount === "" ? "1" : state$2.toTokenAmount;
      SwapController.setSourceTokenAmount(newSourceTokenAmount);
      SwapController.setToTokenAmount("");
      await SwapController.setSourceToken(newSourceToken);
      await SwapController.setToToken(newToToken);
      state$2.switchingTokens = false;
      SwapController.swapTokens();
    } catch (error) {
      state$2.switchingTokens = false;
      throw error;
    }
  },
  resetState() {
    state$2.myTokensWithBalance = initialState.myTokensWithBalance;
    state$2.tokensPriceMap = initialState.tokensPriceMap;
    state$2.initialized = initialState.initialized;
    state$2.initializing = initialState.initializing;
    state$2.switchingTokens = initialState.switchingTokens;
    state$2.sourceToken = initialState.sourceToken;
    state$2.sourceTokenAmount = initialState.sourceTokenAmount;
    state$2.sourceTokenPriceInUSD = initialState.sourceTokenPriceInUSD;
    state$2.toToken = initialState.toToken;
    state$2.toTokenAmount = initialState.toTokenAmount;
    state$2.toTokenPriceInUSD = initialState.toTokenPriceInUSD;
    state$2.networkPrice = initialState.networkPrice;
    state$2.networkTokenSymbol = initialState.networkTokenSymbol;
    state$2.networkBalanceInUSD = initialState.networkBalanceInUSD;
    state$2.inputError = initialState.inputError;
  },
  resetValues() {
    var _a;
    const { networkAddress } = SwapController.getParams();
    const networkToken = (_a = state$2.tokens) == null ? void 0 : _a.find((token) => token.address === networkAddress);
    SwapController.setSourceToken(networkToken);
    SwapController.setToToken(void 0);
  },
  getApprovalLoadingState() {
    return state$2.loadingApprovalTransaction;
  },
  clearError() {
    state$2.transactionError = void 0;
  },
  async initializeState() {
    if (state$2.initializing) {
      return;
    }
    state$2.initializing = true;
    if (!state$2.initialized) {
      try {
        await SwapController.fetchTokens();
        state$2.initialized = true;
      } catch (error) {
        state$2.initialized = false;
        SnackController.showError("Failed to initialize swap");
        RouterController.goBack();
      }
    }
    state$2.initializing = false;
  },
  async fetchTokens() {
    var _a;
    const { networkAddress } = SwapController.getParams();
    await SwapController.getNetworkTokenPrice();
    await SwapController.getMyTokensWithBalance();
    const networkToken = (_a = state$2.myTokensWithBalance) == null ? void 0 : _a.find((token) => token.address === networkAddress);
    if (networkToken) {
      state$2.networkTokenSymbol = networkToken.symbol;
      SwapController.setSourceToken(networkToken);
      SwapController.setSourceTokenAmount("0");
    }
  },
  async getTokenList() {
    var _a, _b;
    const activeCaipNetworkId = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
    if (state$2.caipNetworkId === activeCaipNetworkId && state$2.tokens) {
      return;
    }
    try {
      state$2.tokensLoading = true;
      const tokens = await SwapApiUtil.getTokenList(activeCaipNetworkId);
      state$2.tokens = tokens;
      state$2.caipNetworkId = activeCaipNetworkId;
      state$2.popularTokens = tokens.sort((aTokenInfo, bTokenInfo) => {
        if (aTokenInfo.symbol < bTokenInfo.symbol) {
          return -1;
        }
        if (aTokenInfo.symbol > bTokenInfo.symbol) {
          return 1;
        }
        return 0;
      });
      const suggestedTokensByChain = activeCaipNetworkId && ((_b = ConstantsUtil$2.SUGGESTED_TOKENS_BY_CHAIN) == null ? void 0 : _b[activeCaipNetworkId]) || [];
      const suggestedTokenObjects = suggestedTokensByChain.map((symbol) => tokens.find((t) => t.symbol === symbol)).filter((t) => Boolean(t));
      const allSuggestedTokens = ConstantsUtil$2.SWAP_SUGGESTED_TOKENS || [];
      const allSuggestedTokenObjects = allSuggestedTokens.map((symbol) => tokens.find((t) => t.symbol === symbol)).filter((t) => Boolean(t)).filter((t) => !suggestedTokenObjects.some((ct) => ct.address === t.address));
      state$2.suggestedTokens = [...suggestedTokenObjects, ...allSuggestedTokenObjects];
    } catch (error) {
      state$2.tokens = [];
      state$2.popularTokens = [];
      state$2.suggestedTokens = [];
    } finally {
      state$2.tokensLoading = false;
    }
  },
  async getAddressPrice(address) {
    var _a, _b;
    const existPrice = state$2.tokensPriceMap[address];
    if (existPrice) {
      return existPrice;
    }
    const response = await BlockchainApiController.fetchTokenPrice({
      addresses: [address]
    });
    const fungibles = (response == null ? void 0 : response.fungibles) || [];
    const allTokens = [...state$2.tokens || [], ...state$2.myTokensWithBalance || []];
    const symbol = (_a = allTokens == null ? void 0 : allTokens.find((token) => token.address === address)) == null ? void 0 : _a.symbol;
    const price = ((_b = fungibles.find((p) => p.symbol.toLowerCase() === (symbol == null ? void 0 : symbol.toLowerCase()))) == null ? void 0 : _b.price) || 0;
    const priceAsFloat = parseFloat(price.toString());
    state$2.tokensPriceMap[address] = priceAsFloat;
    return priceAsFloat;
  },
  async getNetworkTokenPrice() {
    var _a;
    const { networkAddress } = SwapController.getParams();
    const response = await BlockchainApiController.fetchTokenPrice({
      addresses: [networkAddress]
    }).catch(() => {
      SnackController.showError("Failed to fetch network token price");
      return { fungibles: [] };
    });
    const token = (_a = response.fungibles) == null ? void 0 : _a[0];
    const price = (token == null ? void 0 : token.price.toString()) || "0";
    state$2.tokensPriceMap[networkAddress] = parseFloat(price);
    state$2.networkTokenSymbol = (token == null ? void 0 : token.symbol) || "";
    state$2.networkPrice = price;
  },
  async getMyTokensWithBalance(forceUpdate) {
    var _a;
    const balances = await BalanceUtil.getMyTokensWithBalance({
      forceUpdate,
      caipNetwork: ChainController.state.activeCaipNetwork,
      address: (_a = ChainController.getAccountData()) == null ? void 0 : _a.address
    });
    const swapBalances = SwapApiUtil.mapBalancesToSwapTokens(balances);
    if (!swapBalances) {
      return;
    }
    await SwapController.getInitialGasPrice();
    SwapController.setBalances(swapBalances);
  },
  setBalances(balances) {
    const { networkAddress } = SwapController.getParams();
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (!caipNetwork) {
      return;
    }
    const networkToken = balances.find((token) => token.address === networkAddress);
    balances.forEach((token) => {
      state$2.tokensPriceMap[token.address] = token.price || 0;
    });
    state$2.myTokensWithBalance = balances.filter((token) => token.address.startsWith(caipNetwork.caipNetworkId));
    state$2.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async getInitialGasPrice() {
    var _a, _b;
    const res = await SwapApiUtil.fetchGasPrice();
    if (!res) {
      return { gasPrice: null, gasPriceInUSD: null };
    }
    switch ((_b = (_a = ChainController.state) == null ? void 0 : _a.activeCaipNetwork) == null ? void 0 : _b.chainNamespace) {
      case ConstantsUtil$1.CHAIN.SOLANA:
        state$2.gasFee = res.standard ?? "0";
        state$2.gasPriceInUSD = NumberUtil.multiply(res.standard, state$2.networkPrice).div(1e9).toNumber();
        return {
          gasPrice: BigInt(state$2.gasFee),
          gasPriceInUSD: Number(state$2.gasPriceInUSD)
        };
      case ConstantsUtil$1.CHAIN.EVM:
      default:
        const value = res.standard ?? "0";
        const gasFee = BigInt(value);
        const gasLimit = BigInt(INITIAL_GAS_LIMIT);
        const gasPrice = SwapCalculationUtil.getGasPriceInUSD(state$2.networkPrice, gasLimit, gasFee);
        state$2.gasFee = value;
        state$2.gasPriceInUSD = gasPrice;
        return { gasPrice: gasFee, gasPriceInUSD: gasPrice };
    }
  },
  // -- Swap -------------------------------------- //
  async swapTokens() {
    var _a, _b, _c;
    const address = (_a = ChainController.getAccountData()) == null ? void 0 : _a.address;
    const sourceToken = state$2.sourceToken;
    const toToken = state$2.toToken;
    const haveSourceTokenAmount = NumberUtil.bigNumber(state$2.sourceTokenAmount).gt(0);
    if (!haveSourceTokenAmount) {
      SwapController.setToTokenAmount("");
    }
    if (!toToken || !sourceToken || state$2.loadingPrices || !haveSourceTokenAmount || !address) {
      return;
    }
    state$2.loadingQuote = true;
    const amountDecimal = NumberUtil.bigNumber(state$2.sourceTokenAmount).times(10 ** sourceToken.decimals).round(0).toFixed(0);
    try {
      const quoteResponse = await BlockchainApiController.fetchSwapQuote({
        userAddress: address,
        from: sourceToken.address,
        to: toToken.address,
        gasPrice: state$2.gasFee,
        amount: amountDecimal.toString()
      });
      state$2.loadingQuote = false;
      const quoteToAmount = (_c = (_b = quoteResponse == null ? void 0 : quoteResponse.quotes) == null ? void 0 : _b[0]) == null ? void 0 : _c.toAmount;
      if (!quoteToAmount) {
        AlertController.open({
          displayMessage: "Incorrect amount",
          debugMessage: "Please enter a valid amount"
        }, "error");
        return;
      }
      const toTokenAmount = NumberUtil.bigNumber(quoteToAmount).div(10 ** toToken.decimals).toString();
      SwapController.setToTokenAmount(toTokenAmount);
      const isInsufficientToken = SwapController.hasInsufficientToken(state$2.sourceTokenAmount, sourceToken.address);
      if (isInsufficientToken) {
        state$2.inputError = "Insufficient balance";
      } else {
        state$2.inputError = void 0;
        SwapController.setTransactionDetails();
      }
    } catch (error) {
      const response = await SwapApiUtil.handleSwapError(error);
      state$2.loadingQuote = false;
      state$2.inputError = response || "Insufficient balance";
    }
  },
  // -- Create Transactions -------------------------------------- //
  async getTransaction() {
    const { fromCaipAddress, availableToSwap } = SwapController.getParams();
    const sourceToken = state$2.sourceToken;
    const toToken = state$2.toToken;
    if (!fromCaipAddress || !availableToSwap || !sourceToken || !toToken || state$2.loadingQuote) {
      return void 0;
    }
    try {
      state$2.loadingBuildTransaction = true;
      const hasAllowance = await SwapApiUtil.fetchSwapAllowance({
        userAddress: fromCaipAddress,
        tokenAddress: sourceToken.address,
        sourceTokenAmount: state$2.sourceTokenAmount,
        sourceTokenDecimals: sourceToken.decimals
      });
      let transaction = void 0;
      if (hasAllowance) {
        transaction = await SwapController.createSwapTransaction();
      } else {
        transaction = await SwapController.createAllowanceTransaction();
      }
      state$2.loadingBuildTransaction = false;
      state$2.fetchError = false;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to check allowance");
      state$2.loadingBuildTransaction = false;
      state$2.approvalTransaction = void 0;
      state$2.swapTransaction = void 0;
      state$2.fetchError = true;
      return void 0;
    }
  },
  async createAllowanceTransaction() {
    const { fromCaipAddress, sourceTokenAddress, toTokenAddress } = SwapController.getParams();
    if (!fromCaipAddress || !toTokenAddress) {
      return void 0;
    }
    if (!sourceTokenAddress) {
      throw new Error("createAllowanceTransaction - No source token address found.");
    }
    try {
      const response = await BlockchainApiController.generateApproveCalldata({
        from: sourceTokenAddress,
        to: toTokenAddress,
        userAddress: fromCaipAddress
      });
      const address = CoreHelperUtil.getPlainAddress(response.tx.from);
      if (!address) {
        throw new Error("SwapController:createAllowanceTransaction - address is required");
      }
      const transaction = {
        data: response.tx.data,
        to: address,
        gasPrice: BigInt(response.tx.eip155.gasPrice),
        value: BigInt(response.tx.value),
        toAmount: state$2.toTokenAmount
      };
      state$2.swapTransaction = void 0;
      state$2.approvalTransaction = {
        data: transaction.data,
        to: transaction.to,
        gasPrice: transaction.gasPrice,
        value: transaction.value,
        toAmount: transaction.toAmount
      };
      return {
        data: transaction.data,
        to: transaction.to,
        gasPrice: transaction.gasPrice,
        value: transaction.value,
        toAmount: transaction.toAmount
      };
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create approval transaction");
      state$2.approvalTransaction = void 0;
      state$2.swapTransaction = void 0;
      state$2.fetchError = true;
      return void 0;
    }
  },
  async createSwapTransaction() {
    var _a;
    const { networkAddress, fromCaipAddress, sourceTokenAmount } = SwapController.getParams();
    const sourceToken = state$2.sourceToken;
    const toToken = state$2.toToken;
    if (!fromCaipAddress || !sourceTokenAmount || !sourceToken || !toToken) {
      return void 0;
    }
    const amount = (_a = ConnectionController.parseUnits(sourceTokenAmount, sourceToken.decimals)) == null ? void 0 : _a.toString();
    try {
      const response = await BlockchainApiController.generateSwapCalldata({
        userAddress: fromCaipAddress,
        from: sourceToken.address,
        to: toToken.address,
        amount,
        disableEstimate: true
      });
      const isSourceTokenIsNetworkToken = sourceToken.address === networkAddress;
      const gas = BigInt(response.tx.eip155.gas);
      const gasPrice = BigInt(response.tx.eip155.gasPrice);
      const address = CoreHelperUtil.getPlainAddress(response.tx.to);
      if (!address) {
        throw new Error("SwapController:createSwapTransaction - address is required");
      }
      const transaction = {
        data: response.tx.data,
        to: address,
        gas,
        gasPrice,
        value: isSourceTokenIsNetworkToken ? BigInt(amount ?? "0") : BigInt("0"),
        toAmount: state$2.toTokenAmount
      };
      state$2.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state$2.networkPrice, gas, gasPrice);
      state$2.approvalTransaction = void 0;
      state$2.swapTransaction = transaction;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create transaction");
      state$2.approvalTransaction = void 0;
      state$2.swapTransaction = void 0;
      state$2.fetchError = true;
      return void 0;
    }
  },
  onEmbeddedWalletApprovalSuccess() {
    SnackController.showLoading("Approve limit increase in your wallet");
    RouterController.replace("SwapPreview");
  },
  // -- Send Transactions --------------------------------- //
  async sendTransactionForApproval(data) {
    var _a, _b, _c;
    const { fromAddress, isAuthConnector } = SwapController.getParams();
    state$2.loadingApprovalTransaction = true;
    const approveLimitMessage = `Approve limit increase in your wallet`;
    if (isAuthConnector) {
      RouterController.pushTransactionStack({
        onSuccess: SwapController.onEmbeddedWalletApprovalSuccess
      });
    } else {
      SnackController.showLoading(approveLimitMessage);
    }
    try {
      await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: data.value,
        chainNamespace: ConstantsUtil$1.CHAIN.EVM
      });
      await SwapController.swapTokens();
      await SwapController.getTransaction();
      state$2.approvalTransaction = void 0;
      state$2.loadingApprovalTransaction = false;
    } catch (err) {
      const error = err;
      state$2.transactionError = error == null ? void 0 : error.displayMessage;
      state$2.loadingApprovalTransaction = false;
      SnackController.showError((error == null ? void 0 : error.displayMessage) || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_APPROVAL_ERROR",
        properties: {
          message: (error == null ? void 0 : error.displayMessage) || (error == null ? void 0 : error.message) || "Unknown",
          network: ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || "",
          swapFromToken: ((_b = SwapController.state.sourceToken) == null ? void 0 : _b.symbol) || "",
          swapToToken: ((_c = SwapController.state.toToken) == null ? void 0 : _c.symbol) || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil$1.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
    }
  },
  async sendTransactionForSwap(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (!data) {
      return void 0;
    }
    const { fromAddress, toTokenAmount, isAuthConnector } = SwapController.getParams();
    state$2.loadingTransaction = true;
    const snackbarPendingMessage = `Swapping ${(_a = state$2.sourceToken) == null ? void 0 : _a.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_b = state$2.toToken) == null ? void 0 : _b.symbol}`;
    const snackbarSuccessMessage = `Swapped ${(_c = state$2.sourceToken) == null ? void 0 : _c.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_d = state$2.toToken) == null ? void 0 : _d.symbol}`;
    if (isAuthConnector) {
      RouterController.pushTransactionStack({
        onSuccess() {
          RouterController.replace("Account");
          SnackController.showLoading(snackbarPendingMessage);
          controller$1.resetState();
        }
      });
    } else {
      SnackController.showLoading("Confirm transaction in your wallet");
    }
    try {
      const forceUpdateAddresses = [(_e = state$2.sourceToken) == null ? void 0 : _e.address, (_f = state$2.toToken) == null ? void 0 : _f.address].join(",");
      const transactionHash = await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: data.value,
        chainNamespace: ConstantsUtil$1.CHAIN.EVM
      });
      state$2.loadingTransaction = false;
      SnackController.showSuccess(snackbarSuccessMessage);
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_SUCCESS",
        properties: {
          network: ((_g = ChainController.state.activeCaipNetwork) == null ? void 0 : _g.caipNetworkId) || "",
          swapFromToken: ((_h = SwapController.state.sourceToken) == null ? void 0 : _h.symbol) || "",
          swapToToken: ((_i = SwapController.state.toToken) == null ? void 0 : _i.symbol) || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil$1.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      controller$1.resetState();
      if (!isAuthConnector) {
        RouterController.replace("Account");
      }
      controller$1.getMyTokensWithBalance(forceUpdateAddresses);
      return transactionHash;
    } catch (err) {
      const error = err;
      state$2.transactionError = error == null ? void 0 : error.displayMessage;
      state$2.loadingTransaction = false;
      SnackController.showError((error == null ? void 0 : error.displayMessage) || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_ERROR",
        properties: {
          message: (error == null ? void 0 : error.displayMessage) || (error == null ? void 0 : error.message) || "Unknown",
          network: ((_j = ChainController.state.activeCaipNetwork) == null ? void 0 : _j.caipNetworkId) || "",
          swapFromToken: ((_k = SwapController.state.sourceToken) == null ? void 0 : _k.symbol) || "",
          swapToToken: ((_l = SwapController.state.toToken) == null ? void 0 : _l.symbol) || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil$1.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return void 0;
    }
  },
  // -- Checks -------------------------------------------- //
  hasInsufficientToken(sourceTokenAmount, sourceTokenAddress) {
    const isInsufficientSourceTokenForSwap = SwapCalculationUtil.isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, state$2.myTokensWithBalance);
    return isInsufficientSourceTokenForSwap;
  },
  // -- Calculations -------------------------------------- //
  setTransactionDetails() {
    const { toTokenAddress, toTokenDecimals } = SwapController.getParams();
    if (!toTokenAddress || !toTokenDecimals) {
      return;
    }
    state$2.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state$2.networkPrice, BigInt(state$2.gasFee), BigInt(INITIAL_GAS_LIMIT));
    state$2.priceImpact = SwapCalculationUtil.getPriceImpact({
      sourceTokenAmount: state$2.sourceTokenAmount,
      sourceTokenPriceInUSD: state$2.sourceTokenPriceInUSD,
      toTokenPriceInUSD: state$2.toTokenPriceInUSD,
      toTokenAmount: state$2.toTokenAmount
    });
    state$2.maxSlippage = SwapCalculationUtil.getMaxSlippage(state$2.slippage, state$2.toTokenAmount);
    state$2.providerFee = SwapCalculationUtil.getProviderFee(state$2.sourceTokenAmount);
  }
};
const SwapController = withErrorBoundary(controller$1);
const state$1 = proxy({
  message: "",
  open: false,
  triggerRect: {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },
  variant: "shade"
});
const controller = {
  state: state$1,
  subscribe(callback) {
    return subscribe(state$1, () => callback(state$1));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$1, key, callback);
  },
  showTooltip({ message, triggerRect, variant }) {
    state$1.open = true;
    state$1.message = message;
    state$1.triggerRect = triggerRect;
    state$1.variant = variant;
  },
  hide() {
    state$1.open = false;
    state$1.message = "";
    state$1.triggerRect = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  }
};
const TooltipController = withErrorBoundary(controller);
const ModalUtil = {
  isUnsupportedChainView() {
    return RouterController.state.view === "UnsupportedChain" || RouterController.state.view === "SwitchNetwork" && RouterController.state.history.includes("UnsupportedChain");
  },
  async safeClose() {
    if (this.isUnsupportedChainView()) {
      ModalController.shake();
      return;
    }
    const isSIWXCloseDisabled = await SIWXUtil.isSIWXCloseDisabled();
    if (isSIWXCloseDisabled) {
      ModalController.shake();
      return;
    }
    if (RouterController.state.view === "DataCapture" || RouterController.state.view === "DataCaptureOtpConfirm") {
      ConnectionController.disconnect();
    }
    ModalController.close();
  }
};
const MathUtil = {
  interpolate(inputRange, outputRange, value) {
    if (inputRange.length !== 2 || outputRange.length !== 2) {
      throw new Error("inputRange and outputRange must be an array of length 2");
    }
    const originalRangeMin = inputRange[0] || 0;
    const originalRangeMax = inputRange[1] || 0;
    const newRangeMin = outputRange[0] || 0;
    const newRangeMax = outputRange[1] || 0;
    if (value < originalRangeMin) {
      return newRangeMin;
    }
    if (value > originalRangeMax) {
      return newRangeMax;
    }
    return (newRangeMax - newRangeMin) / (originalRangeMax - originalRangeMin) * (value - originalRangeMin) + newRangeMin;
  }
};
const styles$v = css`
  :host {
    display: block;
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    overflow: hidden;
  }
`;
var __decorate$v = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiCard = class WuiCard2 extends i {
  render() {
    return b`<slot></slot>`;
  }
};
WuiCard.styles = [resetStyles, styles$v];
WuiCard = __decorate$v([
  customElement("wui-card")
], WuiCard);
const styles$u = css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing }) => spacing[2]};
    padding: ${({ spacing }) => spacing[3]};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};

      wui-icon {
        color: ${({ tokens }) => tokens.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundSuccess};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundWarning};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundError};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({ borderRadius }) => borderRadius["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;
var __decorate$u = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const TYPE_ICON_NAME = {
  info: "info",
  success: "checkmark",
  warning: "warningCircle",
  error: "warning"
};
let WuiAlertBar = class WuiAlertBar2 extends i {
  constructor() {
    super(...arguments);
    this.message = "";
    this.type = "info";
  }
  render() {
    return b`
      <wui-flex
        data-type=${o(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${TYPE_ICON_NAME[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
  }
  onClose() {
    AlertController.close();
  }
};
WuiAlertBar.styles = [resetStyles, styles$u];
__decorate$u([
  n()
], WuiAlertBar.prototype, "message", void 0);
__decorate$u([
  n()
], WuiAlertBar.prototype, "type", void 0);
WuiAlertBar = __decorate$u([
  customElement("wui-alertbar")
], WuiAlertBar);
const styles$t = css`
  :host {
    display: block;
    position: absolute;
    top: ${({ spacing }) => spacing["3"]};
    left: ${({ spacing }) => spacing["4"]};
    right: ${({ spacing }) => spacing["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;
var __decorate$t = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const presets = {
  info: {
    backgroundColor: "fg-350",
    iconColor: "fg-325",
    icon: "info"
  },
  success: {
    backgroundColor: "success-glass-reown-020",
    iconColor: "success-125",
    icon: "checkmark"
  },
  warning: {
    backgroundColor: "warning-glass-reown-020",
    iconColor: "warning-100",
    icon: "warningCircle"
  },
  error: {
    backgroundColor: "error-glass-reown-020",
    iconColor: "error-125",
    icon: "warning"
  }
};
let W3mAlertBar = class W3mAlertBar2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.open = AlertController.state.open;
    this.onOpen(true);
    this.unsubscribe.push(AlertController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen(false);
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = AlertController.state;
    const preset = presets[variant];
    return b`
      <wui-alertbar
        message=${message}
        backgroundColor=${preset == null ? void 0 : preset.backgroundColor}
        iconColor=${preset == null ? void 0 : preset.iconColor}
        icon=${preset == null ? void 0 : preset.icon}
        type=${variant}
      ></wui-alertbar>
    `;
  }
  onOpen(isMounted) {
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "scale(0.85)" },
        { opacity: 1, transform: "scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.style.cssText = `pointer-events: auto`;
    } else if (!isMounted) {
      this.animate([
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.style.cssText = `pointer-events: none`;
    }
  }
};
W3mAlertBar.styles = styles$t;
__decorate$t([
  r()
], W3mAlertBar.prototype, "open", void 0);
W3mAlertBar = __decorate$t([
  customElement("w3m-alertbar")
], W3mAlertBar);
const styles$s = css`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({ spacing }) => spacing[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({ tokens }) => tokens.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var __decorate$s = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiIconButton = class WuiIconButton2 extends i {
  constructor() {
    super(...arguments);
    this.icon = "card";
    this.variant = "primary";
    this.type = "accent";
    this.size = "md";
    this.iconSize = void 0;
    this.fullWidth = false;
    this.disabled = false;
  }
  render() {
    return b`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${o(this.iconSize)}></wui-icon>
    </button>`;
  }
};
WuiIconButton.styles = [resetStyles, elementStyles, styles$s];
__decorate$s([
  n()
], WuiIconButton.prototype, "icon", void 0);
__decorate$s([
  n()
], WuiIconButton.prototype, "variant", void 0);
__decorate$s([
  n()
], WuiIconButton.prototype, "type", void 0);
__decorate$s([
  n()
], WuiIconButton.prototype, "size", void 0);
__decorate$s([
  n()
], WuiIconButton.prototype, "iconSize", void 0);
__decorate$s([
  n({ type: Boolean })
], WuiIconButton.prototype, "fullWidth", void 0);
__decorate$s([
  n({ type: Boolean })
], WuiIconButton.prototype, "disabled", void 0);
WuiIconButton = __decorate$s([
  customElement("wui-icon-button")
], WuiIconButton);
const styles$r = css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]};
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({ borderRadius }) => borderRadius[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({ spacing }) => spacing[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;
var __decorate$r = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const TEXT_VARIANT_BY_SIZE = {
  lg: "lg-regular",
  md: "md-regular",
  sm: "sm-regular"
};
const ICON_SIZE_BY_SIZE = {
  lg: "lg",
  md: "md",
  sm: "sm"
};
let WuiSelect = class WuiSelect2 extends i {
  constructor() {
    super(...arguments);
    this.imageSrc = "";
    this.text = "";
    this.size = "lg";
    this.type = "text-dropdown";
    this.disabled = false;
  }
  render() {
    return b`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`;
  }
  textTemplate() {
    const textSize = TEXT_VARIANT_BY_SIZE[this.size];
    if (this.text) {
      return b`<wui-text color="primary" variant=${textSize}>${this.text}</wui-text>`;
    }
    return null;
  }
  imageTemplate() {
    if (this.imageSrc) {
      return b`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;
    }
    const iconSize = ICON_SIZE_BY_SIZE[this.size];
    return b` <wui-flex class="left-icon-container">
      <wui-icon size=${iconSize} name="networkPlaceholder"></wui-icon>
    </wui-flex>`;
  }
};
WuiSelect.styles = [resetStyles, elementStyles, styles$r];
__decorate$r([
  n()
], WuiSelect.prototype, "imageSrc", void 0);
__decorate$r([
  n()
], WuiSelect.prototype, "text", void 0);
__decorate$r([
  n()
], WuiSelect.prototype, "size", void 0);
__decorate$r([
  n()
], WuiSelect.prototype, "type", void 0);
__decorate$r([
  n({ type: Boolean })
], WuiSelect.prototype, "disabled", void 0);
WuiSelect = __decorate$r([
  customElement("wui-select")
], WuiSelect);
const ConstantsUtil = {
  ACCOUNT_TABS: [{ label: "Tokens" }, { label: "Activity" }],
  VIEW_DIRECTION: {
    Next: "next",
    Prev: "prev"
  },
  ANIMATION_DURATIONS: {
    HeaderText: 120
  },
  VIEWS_WITH_LEGAL_FOOTER: [
    "Connect",
    "ConnectWallets",
    "OnRampTokenSelect",
    "OnRampFiatSelect",
    "OnRampProviders"
  ],
  VIEWS_WITH_DEFAULT_FOOTER: ["Networks"]
};
const styles$q = css`
  button {
    background-color: transparent;
    padding: ${({ spacing }) => spacing[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;
var __decorate$q = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiIconLink = class WuiIconLink2 extends i {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.disabled = false;
    this.icon = "copy";
    this.iconColor = "default";
    this.variant = "accent";
  }
  render() {
    const iconColors = {
      accent: "accent-primary",
      primary: "inverse",
      secondary: "default"
    };
    return b`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${iconColors[this.variant] || this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `;
  }
};
WuiIconLink.styles = [resetStyles, elementStyles, styles$q];
__decorate$q([
  n()
], WuiIconLink.prototype, "size", void 0);
__decorate$q([
  n({ type: Boolean })
], WuiIconLink.prototype, "disabled", void 0);
__decorate$q([
  n()
], WuiIconLink.prototype, "icon", void 0);
__decorate$q([
  n()
], WuiIconLink.prototype, "iconColor", void 0);
__decorate$q([
  n()
], WuiIconLink.prototype, "variant", void 0);
WuiIconLink = __decorate$q([
  customElement("wui-icon-link")
], WuiIconLink);
const networkSvgLg = w`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;
const networkSvgSm = w`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;
const styles$p = css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({ tokens }) => tokens.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;
var __decorate$p = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiNetworkImage = class WuiNetworkImage2 extends i {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.name = "uknown";
    this.networkImagesBySize = {
      sm: networkSvgSm,
      md: networkSvgMd,
      lg: networkSvgLg
    };
    this.selected = false;
    this.round = false;
  }
  render() {
    const getSize = {
      sm: "4",
      md: "6",
      lg: "10"
    };
    if (this.round) {
      this.dataset["round"] = "true";
      this.style.cssText = `
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `;
    } else {
      this.style.cssText = `

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${getSize[this.size]});
    `;
    }
    return b`${this.templateVisual()} ${this.svgTemplate()} `;
  }
  svgTemplate() {
    if (this.round) {
      return null;
    }
    return this.networkImagesBySize[this.size];
  }
  templateVisual() {
    if (this.imageSrc) {
      return b`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;
    }
    return b`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`;
  }
};
WuiNetworkImage.styles = [resetStyles, styles$p];
__decorate$p([
  n()
], WuiNetworkImage.prototype, "size", void 0);
__decorate$p([
  n()
], WuiNetworkImage.prototype, "name", void 0);
__decorate$p([
  n({ type: Object })
], WuiNetworkImage.prototype, "networkImagesBySize", void 0);
__decorate$p([
  n()
], WuiNetworkImage.prototype, "imageSrc", void 0);
__decorate$p([
  n({ type: Boolean })
], WuiNetworkImage.prototype, "selected", void 0);
__decorate$p([
  n({ type: Boolean })
], WuiNetworkImage.prototype, "round", void 0);
WuiNetworkImage = __decorate$p([
  customElement("wui-network-image")
], WuiNetworkImage);
const styles$o = css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({ tokens }) => tokens.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }
`;
var __decorate$o = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiSeparator = class WuiSeparator2 extends i {
  constructor() {
    super(...arguments);
    this.text = "";
    this.bgColor = "primary";
  }
  render() {
    this.dataset["bgColor"] = this.bgColor;
    return b`${this.template()}`;
  }
  template() {
    if (this.text) {
      return b`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`;
    }
    return null;
  }
};
WuiSeparator.styles = [resetStyles, styles$o];
__decorate$o([
  n()
], WuiSeparator.prototype, "text", void 0);
__decorate$o([
  n()
], WuiSeparator.prototype, "bgColor", void 0);
WuiSeparator = __decorate$o([
  customElement("wui-separator")
], WuiSeparator);
const AppKitPayErrorCodes = {
  INVALID_PAYMENT_CONFIG: "INVALID_PAYMENT_CONFIG",
  INVALID_RECIPIENT: "INVALID_RECIPIENT",
  INVALID_ASSET: "INVALID_ASSET",
  INVALID_AMOUNT: "INVALID_AMOUNT",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  UNABLE_TO_INITIATE_PAYMENT: "UNABLE_TO_INITIATE_PAYMENT",
  INVALID_CHAIN_NAMESPACE: "INVALID_CHAIN_NAMESPACE",
  GENERIC_PAYMENT_ERROR: "GENERIC_PAYMENT_ERROR",
  UNABLE_TO_GET_EXCHANGES: "UNABLE_TO_GET_EXCHANGES",
  ASSET_NOT_SUPPORTED: "ASSET_NOT_SUPPORTED",
  UNABLE_TO_GET_PAY_URL: "UNABLE_TO_GET_PAY_URL",
  UNABLE_TO_GET_BUY_STATUS: "UNABLE_TO_GET_BUY_STATUS",
  UNABLE_TO_GET_TOKEN_BALANCES: "UNABLE_TO_GET_TOKEN_BALANCES",
  UNABLE_TO_GET_QUOTE: "UNABLE_TO_GET_QUOTE",
  UNABLE_TO_GET_QUOTE_STATUS: "UNABLE_TO_GET_QUOTE_STATUS",
  INVALID_RECIPIENT_ADDRESS_FOR_ASSET: "INVALID_RECIPIENT_ADDRESS_FOR_ASSET"
};
const AppKitPayErrorMessages = {
  [AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG]: "Invalid payment configuration",
  [AppKitPayErrorCodes.INVALID_RECIPIENT]: "Invalid recipient address",
  [AppKitPayErrorCodes.INVALID_ASSET]: "Invalid asset specified",
  [AppKitPayErrorCodes.INVALID_AMOUNT]: "Invalid payment amount",
  [AppKitPayErrorCodes.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]: "Invalid recipient address for the asset selected",
  [AppKitPayErrorCodes.UNKNOWN_ERROR]: "Unknown payment error occurred",
  [AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT]: "Unable to initiate payment",
  [AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE]: "Invalid chain namespace",
  [AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR]: "Unable to process payment",
  [AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES]: "Unable to get exchanges",
  [AppKitPayErrorCodes.ASSET_NOT_SUPPORTED]: "Asset not supported by the selected exchange",
  [AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL]: "Unable to get payment URL",
  [AppKitPayErrorCodes.UNABLE_TO_GET_BUY_STATUS]: "Unable to get buy status",
  [AppKitPayErrorCodes.UNABLE_TO_GET_TOKEN_BALANCES]: "Unable to get token balances",
  [AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE]: "Unable to get quote. Please choose a different token",
  [AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE_STATUS]: "Unable to get quote status"
};
class AppKitPayError extends Error {
  get message() {
    return AppKitPayErrorMessages[this.code];
  }
  constructor(code, details) {
    super(AppKitPayErrorMessages[code]);
    this.name = "AppKitPayError";
    this.code = code;
    this.details = details;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppKitPayError);
    }
  }
}
const API_URL = "https://rpc.walletconnect.org/v1/json-rpc";
const REOWN_TEST_EXCHANGE_ID = "reown_test";
function ensureCorrectAddress() {
  const { chainNamespace } = ParseUtil.parseCaipNetworkId(PayController.state.paymentAsset.network);
  const isAddress = CoreHelperUtil.isAddress(PayController.state.recipient, chainNamespace);
  if (!isAddress) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_RECIPIENT_ADDRESS_FOR_ASSET, `Provide valid recipient address for namespace "${chainNamespace}"`);
  }
}
async function processEvmNativePayment(paymentAsset, chainNamespace, params) {
  var _a;
  if (chainNamespace !== ConstantsUtil$1.CHAIN.EVM) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE);
  }
  if (!params.fromAddress) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, "fromAddress is required for native EVM payments.");
  }
  const amountValue = typeof params.amount === "string" ? parseFloat(params.amount) : params.amount;
  if (isNaN(amountValue)) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
  }
  const decimals = ((_a = paymentAsset.metadata) == null ? void 0 : _a.decimals) ?? 18;
  const amountBigInt = ConnectionController.parseUnits(amountValue.toString(), decimals);
  if (typeof amountBigInt !== "bigint") {
    throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR);
  }
  const txResponse = await ConnectionController.sendTransaction({
    chainNamespace,
    to: params.recipient,
    address: params.fromAddress,
    value: amountBigInt,
    data: "0x"
  });
  return txResponse ?? void 0;
}
async function processEvmErc20Payment(paymentAsset, params) {
  if (!params.fromAddress) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, "fromAddress is required for ERC20 EVM payments.");
  }
  const tokenAddress = paymentAsset.asset;
  const recipientAddress = params.recipient;
  const decimals = Number(paymentAsset.metadata.decimals);
  const amountBigInt = ConnectionController.parseUnits(params.amount.toString(), decimals);
  if (amountBigInt === void 0) {
    throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR);
  }
  const txResponse = await ConnectionController.writeContract({
    fromAddress: params.fromAddress,
    tokenAddress,
    args: [recipientAddress, amountBigInt],
    method: "transfer",
    abi: ContractUtil.getERC20Abi(tokenAddress),
    chainNamespace: ConstantsUtil$1.CHAIN.EVM
  });
  return txResponse ?? void 0;
}
async function processSolanaPayment(chainNamespace, params) {
  if (chainNamespace !== ConstantsUtil$1.CHAIN.SOLANA) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE);
  }
  if (!params.fromAddress) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, "fromAddress is required for Solana payments.");
  }
  const amountValue = typeof params.amount === "string" ? parseFloat(params.amount) : params.amount;
  if (isNaN(amountValue) || amountValue <= 0) {
    throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, "Invalid payment amount.");
  }
  try {
    const provider = ProviderController.getProvider(chainNamespace);
    if (!provider) {
      throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, "No Solana provider available.");
    }
    const txResponse = await ConnectionController.sendTransaction({
      chainNamespace: ConstantsUtil$1.CHAIN.SOLANA,
      to: params.recipient,
      value: amountValue,
      tokenMint: params.tokenMint
    });
    if (!txResponse) {
      throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, "Transaction failed.");
    }
    return txResponse;
  } catch (error) {
    if (error instanceof AppKitPayError) {
      throw error;
    }
    throw new AppKitPayError(AppKitPayErrorCodes.GENERIC_PAYMENT_ERROR, `Solana payment failed: ${error}`);
  }
}
async function getDirectTransferQuote({ sourceToken, toToken, amount, recipient }) {
  const originalAmount = ConnectionController.parseUnits(amount, sourceToken.metadata.decimals);
  const destinationAmount = ConnectionController.parseUnits(amount, toToken.metadata.decimals);
  return Promise.resolve({
    type: DIRECT_TRANSFER_REQUEST_ID,
    origin: {
      amount: (originalAmount == null ? void 0 : originalAmount.toString()) ?? "0",
      currency: sourceToken
    },
    destination: {
      amount: (destinationAmount == null ? void 0 : destinationAmount.toString()) ?? "0",
      currency: toToken
    },
    fees: [
      {
        id: "service",
        label: "Service Fee",
        amount: "0",
        currency: toToken
      }
    ],
    steps: [
      {
        requestId: DIRECT_TRANSFER_REQUEST_ID,
        type: "deposit",
        deposit: {
          amount: (originalAmount == null ? void 0 : originalAmount.toString()) ?? "0",
          currency: sourceToken.asset,
          receiver: recipient
        }
      }
    ],
    timeInSeconds: 6
  });
}
function getTransferStep(quote) {
  if (!quote) {
    return null;
  }
  const step = quote.steps[0];
  if (!step || step.type !== DIRECT_TRANSFER_DEPOSIT_TYPE) {
    return null;
  }
  return step;
}
function getTransactionsSteps(quote, completedTransactionsCount = 0) {
  if (!quote) {
    return [];
  }
  const steps = quote.steps.filter((step) => step.type === DIRECT_TRANSFER_TRANSACTION_TYPE);
  const stepsToShow = steps.filter((_, idx) => {
    const incrementedIdx = idx + 1;
    return incrementedIdx > completedTransactionsCount;
  });
  return steps.length > 0 && steps.length < 3 ? stepsToShow : [];
}
const api = new FetchUtil({ baseUrl: CoreHelperUtil.getApiUrl(), clientId: null });
class JsonRpcError extends Error {
}
function getApiUrl() {
  const projectId = OptionsController.getSnapshot().projectId;
  return `${API_URL}?projectId=${projectId}`;
}
function getSdkProperties() {
  const { projectId, sdkType, sdkVersion } = OptionsController.state;
  return {
    projectId,
    st: sdkType || "appkit",
    sv: sdkVersion || "html-wagmi-4.2.2"
  };
}
async function sendRequest(method, params) {
  const url = getApiUrl();
  const { sdkType: st, sdkVersion: sv, projectId } = OptionsController.getSnapshot();
  const requestBody = {
    jsonrpc: "2.0",
    id: 1,
    method,
    params: {
      ...params || {},
      st,
      sv,
      projectId
    }
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: { "Content-Type": "application/json" }
  });
  const json = await response.json();
  if (json.error) {
    throw new JsonRpcError(json.error.message);
  }
  return json;
}
async function getExchanges(params) {
  const response = await sendRequest("reown_getExchanges", params);
  return response.result;
}
async function getPayUrl(params) {
  const response = await sendRequest("reown_getExchangePayUrl", params);
  return response.result;
}
async function getBuyStatus(params) {
  const response = await sendRequest("reown_getExchangeBuyStatus", params);
  return response.result;
}
async function getTransfersQuote(params) {
  const amount = NumberUtil.bigNumber(params.amount).times(10 ** params.toToken.metadata.decimals).toString();
  const { chainId: originChainId, chainNamespace: originChainNamespace } = ParseUtil.parseCaipNetworkId(params.sourceToken.network);
  const { chainId: destinationChainId, chainNamespace: destinationChainNamespace } = ParseUtil.parseCaipNetworkId(params.toToken.network);
  const originCurrency = params.sourceToken.asset === "native" ? getNativeTokenAddress(originChainNamespace) : params.sourceToken.asset;
  const destinationCurrency = params.toToken.asset === "native" ? getNativeTokenAddress(destinationChainNamespace) : params.toToken.asset;
  const response = await api.post({
    path: "/appkit/v1/transfers/quote",
    body: {
      user: params.address,
      originChainId: originChainId.toString(),
      originCurrency,
      destinationChainId: destinationChainId.toString(),
      destinationCurrency,
      recipient: params.recipient,
      amount
    },
    params: getSdkProperties()
  });
  return response;
}
async function getQuote(params) {
  const isSameChain = HelpersUtil$1.isLowerCaseMatch(params.sourceToken.network, params.toToken.network);
  const isSameAsset = HelpersUtil$1.isLowerCaseMatch(params.sourceToken.asset, params.toToken.asset);
  if (isSameChain && isSameAsset) {
    return getDirectTransferQuote(params);
  }
  return getTransfersQuote(params);
}
async function getQuoteStatus(params) {
  const response = await api.get({
    path: "/appkit/v1/transfers/status",
    params: {
      requestId: params.requestId,
      ...getSdkProperties()
    }
  });
  return response;
}
async function getAssetsForExchange(exchangeId) {
  const response = await api.get({
    path: `/appkit/v1/transfers/assets/exchanges/${exchangeId}`,
    params: getSdkProperties()
  });
  return response;
}
const SUPPORT_PAY_WITH_WALLET_CHAIN_NAMESPACES = ["eip155", "solana"];
const CHAIN_ASSET_INFO_MAP = {
  eip155: {
    native: { assetNamespace: "slip44", assetReference: "60" },
    defaultTokenNamespace: "erc20"
  },
  solana: {
    native: { assetNamespace: "slip44", assetReference: "501" },
    defaultTokenNamespace: "token"
  }
};
function formatCaip19Asset(caipNetworkId, asset) {
  const { chainNamespace, chainId } = ParseUtil.parseCaipNetworkId(caipNetworkId);
  const chainInfo = CHAIN_ASSET_INFO_MAP[chainNamespace];
  if (!chainInfo) {
    throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${chainNamespace}`);
  }
  let assetNamespace = chainInfo.native.assetNamespace;
  let assetReference = chainInfo.native.assetReference;
  if (asset !== "native") {
    assetNamespace = chainInfo.defaultTokenNamespace;
    assetReference = asset;
  }
  const networkPart = `${chainNamespace}:${chainId}`;
  return `${networkPart}/${assetNamespace}:${assetReference}`;
}
function isPayWithWalletSupported(networkId) {
  const { chainNamespace } = ParseUtil.parseCaipNetworkId(networkId);
  return SUPPORT_PAY_WITH_WALLET_CHAIN_NAMESPACES.includes(chainNamespace);
}
function formatBalanceToPaymentAsset(balance) {
  const allNetworks = ChainController.getAllRequestedCaipNetworks();
  const targetNetwork = allNetworks.find((net) => net.caipNetworkId === balance.chainId);
  let asset = balance.address;
  if (!targetNetwork) {
    throw new Error(`Target network not found for balance chainId "${balance.chainId}"`);
  }
  if (HelpersUtil$1.isLowerCaseMatch(balance.symbol, targetNetwork.nativeCurrency.symbol)) {
    asset = "native";
  } else if (CoreHelperUtil.isCaipAddress(asset)) {
    const { address } = ParseUtil.parseCaipAddress(asset);
    asset = address;
  } else if (!asset) {
    throw new Error(`Balance address not found for balance symbol "${balance.symbol}"`);
  }
  return {
    network: targetNetwork.caipNetworkId,
    asset,
    metadata: {
      name: balance.name,
      symbol: balance.symbol,
      decimals: Number(balance.quantity.decimals),
      logoURI: balance.iconUrl
    },
    amount: balance.quantity.numeric
  };
}
function formatPaymentAssetToBalance(paymentAsset) {
  return {
    chainId: paymentAsset.network,
    address: `${paymentAsset.network}:${paymentAsset.asset}`,
    symbol: paymentAsset.metadata.symbol,
    name: paymentAsset.metadata.name,
    iconUrl: paymentAsset.metadata.logoURI || "",
    price: 0,
    quantity: {
      numeric: "0",
      decimals: paymentAsset.metadata.decimals.toString()
    }
  };
}
function formatAmount(amount) {
  const num = NumberUtil.bigNumber(amount, { safe: true });
  if (num.lt(1e-3)) {
    return "<0.001";
  }
  return num.round(4).toString();
}
function isTestnetAsset(paymentAsset) {
  const allNetworks = ChainController.getAllRequestedCaipNetworks();
  const targetNetwork = allNetworks.find((net) => net.caipNetworkId === paymentAsset.network);
  if (!targetNetwork) {
    return false;
  }
  return Boolean(targetNetwork.testnet);
}
const DEFAULT_PAGE = 0;
const DEFAULT_PAYMENT_ID = "unknown";
const DIRECT_TRANSFER_REQUEST_ID = "direct-transfer";
const DIRECT_TRANSFER_DEPOSIT_TYPE = "deposit";
const DIRECT_TRANSFER_TRANSACTION_TYPE = "transaction";
const state = proxy({
  paymentAsset: {
    network: "eip155:1",
    asset: "0x0",
    metadata: {
      name: "0x0",
      symbol: "0x0",
      decimals: 0
    }
  },
  recipient: "0x0",
  amount: 0,
  isConfigured: false,
  error: null,
  isPaymentInProgress: false,
  exchanges: [],
  isLoading: false,
  openInNewTab: true,
  redirectUrl: void 0,
  payWithExchange: void 0,
  currentPayment: void 0,
  analyticsSet: false,
  paymentId: void 0,
  choice: "pay",
  tokenBalances: {
    [ConstantsUtil$1.CHAIN.EVM]: [],
    [ConstantsUtil$1.CHAIN.SOLANA]: []
  },
  isFetchingTokenBalances: false,
  selectedPaymentAsset: null,
  quote: void 0,
  quoteStatus: "waiting",
  quoteError: null,
  isFetchingQuote: false,
  selectedExchange: void 0,
  exchangeUrlForQuote: void 0,
  requestId: void 0
});
const PayController = {
  state,
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  async handleOpenPay(options) {
    this.resetState();
    this.setPaymentConfig(options);
    this.initializeAnalytics();
    ensureCorrectAddress();
    await this.prepareTokenLogo();
    state.isConfigured = true;
    EventsController.sendEvent({
      type: "track",
      event: "PAY_MODAL_OPEN",
      properties: {
        exchanges: state.exchanges,
        configuration: {
          network: state.paymentAsset.network,
          asset: state.paymentAsset.asset,
          recipient: state.recipient,
          amount: state.amount
        }
      }
    });
    await ModalController.open({
      view: "Pay"
    });
  },
  resetState() {
    state.paymentAsset = {
      network: "eip155:1",
      asset: "0x0",
      metadata: { name: "0x0", symbol: "0x0", decimals: 0 }
    };
    state.recipient = "0x0";
    state.amount = 0;
    state.isConfigured = false;
    state.error = null;
    state.isPaymentInProgress = false;
    state.isLoading = false;
    state.currentPayment = void 0;
    state.selectedExchange = void 0;
    state.exchangeUrlForQuote = void 0;
    state.requestId = void 0;
  },
  resetQuoteState() {
    state.quote = void 0;
    state.quoteStatus = "waiting";
    state.quoteError = null;
    state.isFetchingQuote = false;
    state.requestId = void 0;
  },
  setPaymentConfig(config) {
    if (!config.paymentAsset) {
      throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
    }
    try {
      state.choice = config.choice ?? "pay";
      state.paymentAsset = config.paymentAsset;
      state.recipient = config.recipient;
      state.amount = config.amount;
      state.openInNewTab = config.openInNewTab ?? true;
      state.redirectUrl = config.redirectUrl;
      state.payWithExchange = config.payWithExchange;
      state.error = null;
    } catch (error) {
      throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG, error.message);
    }
  },
  setSelectedPaymentAsset(paymentAsset) {
    state.selectedPaymentAsset = paymentAsset;
  },
  setSelectedExchange(exchange) {
    state.selectedExchange = exchange;
  },
  setRequestId(requestId) {
    state.requestId = requestId;
  },
  setPaymentInProgress(isPaymentInProgress) {
    state.isPaymentInProgress = isPaymentInProgress;
  },
  getPaymentAsset() {
    return state.paymentAsset;
  },
  getExchanges() {
    return state.exchanges;
  },
  async fetchExchanges() {
    try {
      state.isLoading = true;
      const response = await getExchanges({
        page: DEFAULT_PAGE
      });
      state.exchanges = response.exchanges.slice(0, 2);
    } catch (error) {
      SnackController.showError(AppKitPayErrorMessages.UNABLE_TO_GET_EXCHANGES);
      throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES);
    } finally {
      state.isLoading = false;
    }
  },
  async getAvailableExchanges(params) {
    var _a;
    try {
      const asset = (params == null ? void 0 : params.asset) && (params == null ? void 0 : params.network) ? formatCaip19Asset(params.network, params.asset) : void 0;
      const response = await getExchanges({
        page: (params == null ? void 0 : params.page) ?? DEFAULT_PAGE,
        asset,
        amount: (_a = params == null ? void 0 : params.amount) == null ? void 0 : _a.toString()
      });
      return response;
    } catch (error) {
      throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_EXCHANGES);
    }
  },
  async getPayUrl(exchangeId, params, headless = false) {
    try {
      const numericAmount = Number(params.amount);
      const response = await getPayUrl({
        exchangeId,
        asset: formatCaip19Asset(params.network, params.asset),
        amount: numericAmount.toString(),
        recipient: `${params.network}:${params.recipient}`
      });
      EventsController.sendEvent({
        type: "track",
        event: "PAY_EXCHANGE_SELECTED",
        properties: {
          source: "pay",
          exchange: {
            id: exchangeId
          },
          configuration: {
            network: params.network,
            asset: params.asset,
            recipient: params.recipient,
            amount: numericAmount
          },
          currentPayment: {
            type: "exchange",
            exchangeId
          },
          headless
        }
      });
      if (headless) {
        this.initiatePayment();
        EventsController.sendEvent({
          type: "track",
          event: "PAY_INITIATED",
          properties: {
            source: "pay",
            paymentId: state.paymentId || DEFAULT_PAYMENT_ID,
            configuration: {
              network: params.network,
              asset: params.asset,
              recipient: params.recipient,
              amount: numericAmount
            },
            currentPayment: {
              type: "exchange",
              exchangeId
            }
          }
        });
      }
      return response;
    } catch (error) {
      if (error instanceof Error && error.message.includes("is not supported")) {
        throw new AppKitPayError(AppKitPayErrorCodes.ASSET_NOT_SUPPORTED);
      }
      throw new Error(error.message);
    }
  },
  async generateExchangeUrlForQuote({ exchangeId, paymentAsset, amount, recipient }) {
    const response = await getPayUrl({
      exchangeId,
      asset: formatCaip19Asset(paymentAsset.network, paymentAsset.asset),
      amount: amount.toString(),
      recipient
    });
    state.exchangeSessionId = response.sessionId;
    state.exchangeUrlForQuote = response.url;
  },
  async openPayUrl(openParams, params, headless = false) {
    try {
      const payUrl = await this.getPayUrl(openParams.exchangeId, params, headless);
      if (!payUrl) {
        throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL);
      }
      const shouldOpenInNewTab = openParams.openInNewTab ?? true;
      const target = shouldOpenInNewTab ? "_blank" : "_self";
      CoreHelperUtil.openHref(payUrl.url, target);
      return payUrl;
    } catch (error) {
      if (error instanceof AppKitPayError) {
        state.error = error.message;
      } else {
        state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
      }
      throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_PAY_URL);
    }
  },
  async onTransfer({ chainNamespace, fromAddress, toAddress, amount, paymentAsset }) {
    state.currentPayment = {
      type: "wallet",
      status: "IN_PROGRESS"
    };
    if (state.isPaymentInProgress) {
      return;
    }
    try {
      this.initiatePayment();
      const allNetworks = ChainController.getAllRequestedCaipNetworks();
      const targetNetwork = allNetworks.find((net) => net.caipNetworkId === paymentAsset.network);
      if (!targetNetwork) {
        throw new Error("Target network not found");
      }
      const caipNetwork = ChainController.state.activeCaipNetwork;
      if (!HelpersUtil$1.isLowerCaseMatch(caipNetwork == null ? void 0 : caipNetwork.caipNetworkId, targetNetwork.caipNetworkId)) {
        await ChainController.switchActiveNetwork(targetNetwork);
      }
      switch (chainNamespace) {
        case ConstantsUtil$1.CHAIN.EVM:
          if (paymentAsset.asset === "native") {
            state.currentPayment.result = await processEvmNativePayment(paymentAsset, chainNamespace, {
              recipient: toAddress,
              amount,
              fromAddress
            });
          }
          if (paymentAsset.asset.startsWith("0x")) {
            state.currentPayment.result = await processEvmErc20Payment(paymentAsset, {
              recipient: toAddress,
              amount,
              fromAddress
            });
          }
          state.currentPayment.status = "SUCCESS";
          break;
        case ConstantsUtil$1.CHAIN.SOLANA:
          state.currentPayment.result = await processSolanaPayment(chainNamespace, {
            recipient: toAddress,
            amount,
            fromAddress,
            tokenMint: paymentAsset.asset === "native" ? void 0 : paymentAsset.asset
          });
          state.currentPayment.status = "SUCCESS";
          break;
        default:
          throw new AppKitPayError(AppKitPayErrorCodes.INVALID_CHAIN_NAMESPACE);
      }
    } catch (error) {
      if (error instanceof AppKitPayError) {
        state.error = error.message;
      } else {
        state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
      }
      state.currentPayment.status = "FAILED";
      SnackController.showError(state.error);
      throw error;
    } finally {
      state.isPaymentInProgress = false;
    }
  },
  async onSendTransaction(params) {
    try {
      const { namespace, transactionStep } = params;
      PayController.initiatePayment();
      const allNetworks = ChainController.getAllRequestedCaipNetworks();
      const targetNetwork = allNetworks.find((net) => {
        var _a;
        return net.caipNetworkId === ((_a = state.paymentAsset) == null ? void 0 : _a.network);
      });
      if (!targetNetwork) {
        throw new Error("Target network not found");
      }
      const caipNetwork = ChainController.state.activeCaipNetwork;
      if (!HelpersUtil$1.isLowerCaseMatch(caipNetwork == null ? void 0 : caipNetwork.caipNetworkId, targetNetwork.caipNetworkId)) {
        await ChainController.switchActiveNetwork(targetNetwork);
      }
      if (namespace === ConstantsUtil$1.CHAIN.EVM) {
        const { from, to, data, value } = transactionStep.transaction;
        await ConnectionController.sendTransaction({
          address: from,
          to,
          data,
          value: BigInt(value),
          chainNamespace: namespace
        });
      } else if (namespace === ConstantsUtil$1.CHAIN.SOLANA) {
        const { instructions } = transactionStep.transaction;
        await ConnectionController.writeSolanaTransaction({
          instructions
        });
      }
    } catch (error) {
      if (error instanceof AppKitPayError) {
        state.error = error.message;
      } else {
        state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
      }
      SnackController.showError(state.error);
      throw error;
    } finally {
      state.isPaymentInProgress = false;
    }
  },
  getExchangeById(exchangeId) {
    return state.exchanges.find((exchange) => exchange.id === exchangeId);
  },
  validatePayConfig(config) {
    const { paymentAsset, recipient, amount } = config;
    if (!paymentAsset) {
      throw new AppKitPayError(AppKitPayErrorCodes.INVALID_PAYMENT_CONFIG);
    }
    if (!recipient) {
      throw new AppKitPayError(AppKitPayErrorCodes.INVALID_RECIPIENT);
    }
    if (!paymentAsset.asset) {
      throw new AppKitPayError(AppKitPayErrorCodes.INVALID_ASSET);
    }
    if (amount === void 0 || amount === null || amount <= 0) {
      throw new AppKitPayError(AppKitPayErrorCodes.INVALID_AMOUNT);
    }
  },
  async handlePayWithExchange(exchangeId) {
    try {
      state.currentPayment = {
        type: "exchange",
        exchangeId
      };
      const { network, asset } = state.paymentAsset;
      const payUrlParams = {
        network,
        asset,
        amount: state.amount,
        recipient: state.recipient
      };
      const payUrl = await this.getPayUrl(exchangeId, payUrlParams);
      if (!payUrl) {
        throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_INITIATE_PAYMENT);
      }
      state.currentPayment.sessionId = payUrl.sessionId;
      state.currentPayment.status = "IN_PROGRESS";
      state.currentPayment.exchangeId = exchangeId;
      this.initiatePayment();
      return {
        url: payUrl.url,
        openInNewTab: state.openInNewTab
      };
    } catch (error) {
      if (error instanceof AppKitPayError) {
        state.error = error.message;
      } else {
        state.error = AppKitPayErrorMessages.GENERIC_PAYMENT_ERROR;
      }
      state.isPaymentInProgress = false;
      SnackController.showError(state.error);
      return null;
    }
  },
  async getBuyStatus(exchangeId, sessionId) {
    var _a, _b;
    try {
      const status = await getBuyStatus({ sessionId, exchangeId });
      if (status.status === "SUCCESS" || status.status === "FAILED") {
        EventsController.sendEvent({
          type: "track",
          event: status.status === "SUCCESS" ? "PAY_SUCCESS" : "PAY_ERROR",
          properties: {
            message: status.status === "FAILED" ? CoreHelperUtil.parseError(state.error) : void 0,
            source: "pay",
            paymentId: state.paymentId || DEFAULT_PAYMENT_ID,
            configuration: {
              network: state.paymentAsset.network,
              asset: state.paymentAsset.asset,
              recipient: state.recipient,
              amount: state.amount
            },
            currentPayment: {
              type: "exchange",
              exchangeId: (_a = state.currentPayment) == null ? void 0 : _a.exchangeId,
              sessionId: (_b = state.currentPayment) == null ? void 0 : _b.sessionId,
              result: status.txHash
            }
          }
        });
      }
      return status;
    } catch (error) {
      throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_BUY_STATUS);
    }
  },
  async fetchTokensFromEOA({ caipAddress, caipNetwork, namespace }) {
    if (!caipAddress) {
      return [];
    }
    const { address } = ParseUtil.parseCaipAddress(caipAddress);
    let overideCaipNetwork = caipNetwork;
    if (namespace === ConstantsUtil$1.CHAIN.EVM) {
      overideCaipNetwork = void 0;
    }
    const balances = await BalanceUtil.getMyTokensWithBalance({
      address,
      caipNetwork: overideCaipNetwork
    });
    return balances;
  },
  async fetchTokensFromExchange() {
    if (!state.selectedExchange) {
      return [];
    }
    const assets = await getAssetsForExchange(state.selectedExchange.id);
    const allAssets = Object.values(assets.assets).flat();
    const balanceWithImages = await Promise.all(allAssets.map(async (token) => {
      const balance = formatPaymentAssetToBalance(token);
      const { chainNamespace } = ParseUtil.parseCaipNetworkId(balance.chainId);
      let address = balance.address;
      if (CoreHelperUtil.isCaipAddress(address)) {
        const { address: parsedAddress } = ParseUtil.parseCaipAddress(address);
        address = parsedAddress;
      }
      const image = await AssetUtil.getImageByToken(address ?? "", chainNamespace).catch(() => void 0);
      balance.iconUrl = image ?? "";
      return balance;
    }));
    return balanceWithImages;
  },
  async fetchTokens({ caipAddress, caipNetwork, namespace }) {
    try {
      state.isFetchingTokenBalances = true;
      const isUsingExchange = Boolean(state.selectedExchange);
      const balancesFnPromise = isUsingExchange ? this.fetchTokensFromExchange() : this.fetchTokensFromEOA({ caipAddress, caipNetwork, namespace });
      const balances = await balancesFnPromise;
      state.tokenBalances = { ...state.tokenBalances, [namespace]: balances };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to get token balances";
      SnackController.showError(message);
    } finally {
      state.isFetchingTokenBalances = false;
    }
  },
  async fetchQuote({ amount, address, sourceToken, toToken, recipient }) {
    try {
      PayController.resetQuoteState();
      state.isFetchingQuote = true;
      const quote = await getQuote({
        amount,
        address: state.selectedExchange ? void 0 : address,
        sourceToken,
        toToken,
        recipient
      });
      if (state.selectedExchange) {
        const transferStep = getTransferStep(quote);
        if (transferStep) {
          const caipDepositAddress = `${sourceToken.network}:${transferStep.deposit.receiver}`;
          const depositAmount = NumberUtil.formatNumber(transferStep.deposit.amount, {
            decimals: sourceToken.metadata.decimals ?? 0,
            round: 8
          });
          await PayController.generateExchangeUrlForQuote({
            exchangeId: state.selectedExchange.id,
            paymentAsset: sourceToken,
            amount: depositAmount.toString(),
            recipient: caipDepositAddress
          });
        }
      }
      state.quote = quote;
    } catch (err) {
      let errMessage = AppKitPayErrorMessages.UNABLE_TO_GET_QUOTE;
      if (err instanceof Error && err.cause && err.cause instanceof Response) {
        try {
          const errorData = await err.cause.json();
          if (errorData.error && typeof errorData.error === "string") {
            errMessage = errorData.error;
          }
        } catch {
        }
      }
      state.quoteError = errMessage;
      SnackController.showError(errMessage);
      throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE);
    } finally {
      state.isFetchingQuote = false;
    }
  },
  async fetchQuoteStatus({ requestId }) {
    try {
      if (requestId === DIRECT_TRANSFER_REQUEST_ID) {
        const selectedExchange = state.selectedExchange;
        const sessionId = state.exchangeSessionId;
        if (selectedExchange && sessionId) {
          const status2 = await this.getBuyStatus(selectedExchange.id, sessionId);
          switch (status2.status) {
            case "IN_PROGRESS":
              state.quoteStatus = "waiting";
              break;
            case "SUCCESS":
              state.quoteStatus = "success";
              state.isPaymentInProgress = false;
              break;
            case "FAILED":
              state.quoteStatus = "failure";
              state.isPaymentInProgress = false;
              break;
            case "UNKNOWN":
              state.quoteStatus = "waiting";
              break;
            default:
              state.quoteStatus = "waiting";
              break;
          }
          return;
        }
        state.quoteStatus = "success";
        return;
      }
      const { status } = await getQuoteStatus({ requestId });
      state.quoteStatus = status;
    } catch {
      state.quoteStatus = "failure";
      throw new AppKitPayError(AppKitPayErrorCodes.UNABLE_TO_GET_QUOTE_STATUS);
    }
  },
  initiatePayment() {
    state.isPaymentInProgress = true;
    state.paymentId = crypto.randomUUID();
  },
  initializeAnalytics() {
    if (state.analyticsSet) {
      return;
    }
    state.analyticsSet = true;
    this.subscribeKey("isPaymentInProgress", (_) => {
      var _a;
      if (((_a = state.currentPayment) == null ? void 0 : _a.status) && state.currentPayment.status !== "UNKNOWN") {
        const eventType = {
          IN_PROGRESS: "PAY_INITIATED",
          SUCCESS: "PAY_SUCCESS",
          FAILED: "PAY_ERROR"
        }[state.currentPayment.status];
        EventsController.sendEvent({
          type: "track",
          event: eventType,
          properties: {
            message: state.currentPayment.status === "FAILED" ? CoreHelperUtil.parseError(state.error) : void 0,
            source: "pay",
            paymentId: state.paymentId || DEFAULT_PAYMENT_ID,
            configuration: {
              network: state.paymentAsset.network,
              asset: state.paymentAsset.asset,
              recipient: state.recipient,
              amount: state.amount
            },
            currentPayment: {
              type: state.currentPayment.type,
              exchangeId: state.currentPayment.exchangeId,
              sessionId: state.currentPayment.sessionId,
              result: state.currentPayment.result
            }
          }
        });
      }
    });
  },
  async prepareTokenLogo() {
    if (!state.paymentAsset.metadata.logoURI) {
      try {
        const { chainNamespace } = ParseUtil.parseCaipNetworkId(state.paymentAsset.network);
        const imageUrl = await AssetUtil.getImageByToken(state.paymentAsset.asset, chainNamespace);
        state.paymentAsset.metadata.logoURI = imageUrl;
      } catch {
      }
    }
  }
};
const styles$n = css`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-top-right-radius: ${({ borderRadius }) => borderRadius[8]};
    border-top-left-radius: ${({ borderRadius }) => borderRadius[8]};
  }
`;
var __decorate$n = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mPayView = class W3mPayView2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.amount = PayController.state.amount;
    this.namespace = void 0;
    this.paymentAsset = PayController.state.paymentAsset;
    this.activeConnectorIds = ConnectorController.state.activeConnectorIds;
    this.caipAddress = void 0;
    this.exchanges = PayController.state.exchanges;
    this.isLoading = PayController.state.isLoading;
    this.initializeNamespace();
    this.unsubscribe.push(PayController.subscribeKey("amount", (val) => this.amount = val));
    this.unsubscribe.push(ConnectorController.subscribeKey("activeConnectorIds", (ids) => this.activeConnectorIds = ids));
    this.unsubscribe.push(PayController.subscribeKey("exchanges", (val) => this.exchanges = val));
    this.unsubscribe.push(PayController.subscribeKey("isLoading", (val) => this.isLoading = val));
    PayController.fetchExchanges();
    PayController.setSelectedExchange(void 0);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return b`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `;
  }
  paymentMethodsTemplate() {
    return b`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `;
  }
  initializeNamespace() {
    var _a;
    const namespace = ChainController.state.activeChain;
    this.namespace = namespace;
    this.caipAddress = (_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.caipAddress;
    this.unsubscribe.push(ChainController.subscribeChainProp("accountState", (accountState) => {
      this.caipAddress = accountState == null ? void 0 : accountState.caipAddress;
    }, namespace));
  }
  paymentDetailsTemplate() {
    const allNetworks = ChainController.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find((net) => net.caipNetworkId === this.paymentAsset.network);
    return b`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6", "8", "6", "8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${formatAmount(this.amount || "0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol || "Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${(targetNetwork == null ? void 0 : targetNetwork.name) || "Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${o(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${o(AssetUtil.getNetworkImage(targetNetwork))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `;
  }
  payWithWalletTemplate() {
    if (!isPayWithWalletSupported(this.paymentAsset.network)) {
      return b``;
    }
    return this.caipAddress ? this.connectedWalletTemplate() : this.disconnectedWalletTemplate();
  }
  connectedWalletTemplate() {
    const { name, image } = this.getWalletProperties({
      namespace: this.namespace
    });
    return b`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${false}
          ?chevron=${true}
          ?fullSize=${false}
          ?rounded=${true}
          data-testid="wallet-payment-option"
          imageSrc=${o(image)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${name}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${false}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `;
  }
  disconnectedWalletTemplate() {
    return b`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${true}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`;
  }
  templateExchangeOptions() {
    if (this.isLoading) {
      return b`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;
    }
    const exchangesToShow = this.exchanges.filter((exchange) => {
      if (isTestnetAsset(this.paymentAsset)) {
        return exchange.id === REOWN_TEST_EXCHANGE_ID;
      }
      return exchange.id !== REOWN_TEST_EXCHANGE_ID;
    });
    if (exchangesToShow.length === 0) {
      return b`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`;
    }
    return exchangesToShow.map((exchange) => b`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${() => this.onExchangePayment(exchange)}
          data-testid="exchange-option-${exchange.id}"
          ?chevron=${true}
          imageSrc=${o(exchange.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${exchange.name}
          </wui-text>
        </wui-list-item>
      `);
  }
  templateSeparator() {
    return b`<wui-separator text="or" bgColor="secondary"></wui-separator>`;
  }
  async onWalletPayment() {
    if (!this.namespace) {
      throw new Error("Namespace not found");
    }
    if (this.caipAddress) {
      RouterController.push("PayQuote");
    } else {
      await ConnectorController.connect();
      await ModalController.open({ view: "PayQuote" });
    }
  }
  onExchangePayment(exchange) {
    PayController.setSelectedExchange(exchange);
    RouterController.push("PayQuote");
  }
  async onDisconnect() {
    try {
      await ConnectionController.disconnect();
      await ModalController.open({ view: "Pay" });
    } catch {
      console.error("Failed to disconnect");
      SnackController.showError("Failed to disconnect");
    }
  }
  getWalletProperties({ namespace }) {
    if (!namespace) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connectorId = this.activeConnectorIds[namespace];
    if (!connectorId) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connector = ConnectorController.getConnector({ id: connectorId, namespace });
    if (!connector) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connectorImage = AssetUtil.getConnectorImage(connector);
    return {
      name: connector.name,
      image: connectorImage
    };
  }
};
W3mPayView.styles = styles$n;
__decorate$n([
  r()
], W3mPayView.prototype, "amount", void 0);
__decorate$n([
  r()
], W3mPayView.prototype, "namespace", void 0);
__decorate$n([
  r()
], W3mPayView.prototype, "paymentAsset", void 0);
__decorate$n([
  r()
], W3mPayView.prototype, "activeConnectorIds", void 0);
__decorate$n([
  r()
], W3mPayView.prototype, "caipAddress", void 0);
__decorate$n([
  r()
], W3mPayView.prototype, "exchanges", void 0);
__decorate$n([
  r()
], W3mPayView.prototype, "isLoading", void 0);
W3mPayView = __decorate$n([
  customElement("w3m-pay-view")
], W3mPayView);
const styles$m = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;
var __decorate$m = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const DEFAULT_RINGS = 3;
const DEFAULT_DURATION = 2;
const DEFAULT_OPACITY = 0.3;
const DEFAULT_SIZE = "200px";
const COLOR_BY_VARIANT = {
  "accent-primary": vars.tokens.core.backgroundAccentPrimary
};
let WuiPulse = class WuiPulse2 extends i {
  constructor() {
    super(...arguments);
    this.rings = DEFAULT_RINGS;
    this.duration = DEFAULT_DURATION;
    this.opacity = DEFAULT_OPACITY;
    this.size = DEFAULT_SIZE;
    this.variant = "accent-primary";
  }
  render() {
    const color = COLOR_BY_VARIANT[this.variant];
    this.style.cssText = `
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${color};
      --pulse-opacity: ${this.opacity};
    `;
    const ringElements = Array.from({ length: this.rings }, (_, i2) => this.renderRing(i2, this.rings));
    return b`
      <div class="pulse-container">
        <div class="pulse-rings">${ringElements}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
  renderRing(index, total) {
    const delay = index / total * this.duration;
    const style = `animation-delay: ${delay}s;`;
    return b`<div class="pulse-ring" style=${style}></div>`;
  }
};
WuiPulse.styles = [resetStyles, styles$m];
__decorate$m([
  n({ type: Number })
], WuiPulse.prototype, "rings", void 0);
__decorate$m([
  n({ type: Number })
], WuiPulse.prototype, "duration", void 0);
__decorate$m([
  n({ type: Number })
], WuiPulse.prototype, "opacity", void 0);
__decorate$m([
  n()
], WuiPulse.prototype, "size", void 0);
__decorate$m([
  n()
], WuiPulse.prototype, "variant", void 0);
WuiPulse = __decorate$m([
  customElement("wui-pulse")
], WuiPulse);
const STEPS = [
  {
    id: "received",
    title: "Receiving funds",
    icon: "dollar"
  },
  {
    id: "processing",
    title: "Swapping asset",
    icon: "recycleHorizontal"
  },
  {
    id: "sending",
    title: "Sending asset to the recipient address",
    icon: "send"
  }
];
const TERMINAL_STATES = [
  "success",
  "submitted",
  "failure",
  "timeout",
  "refund"
];
const styles$l = css`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border: 3px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border: 3px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({ colors }) => colors.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-top-right-radius: ${({ borderRadius }) => borderRadius[6]};
    border-top-left-radius: ${({ borderRadius }) => borderRadius[6]};
  }

  .payment-step-badge {
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
  }
`;
var __decorate$l = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const STEP_COMPLETED_STATUSES = {
  received: ["pending", "success", "submitted"],
  processing: ["success", "submitted"],
  sending: ["success", "submitted"]
};
const POLLING_INTERVAL_MS = 3e3;
let W3mPayLoadingView = class W3mPayLoadingView2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.pollingInterval = null;
    this.paymentAsset = PayController.state.paymentAsset;
    this.quoteStatus = PayController.state.quoteStatus;
    this.quote = PayController.state.quote;
    this.amount = PayController.state.amount;
    this.namespace = void 0;
    this.caipAddress = void 0;
    this.profileName = null;
    this.activeConnectorIds = ConnectorController.state.activeConnectorIds;
    this.selectedExchange = PayController.state.selectedExchange;
    this.initializeNamespace();
    this.unsubscribe.push(...[
      PayController.subscribeKey("quoteStatus", (val) => this.quoteStatus = val),
      PayController.subscribeKey("quote", (val) => this.quote = val),
      ConnectorController.subscribeKey("activeConnectorIds", (ids) => this.activeConnectorIds = ids),
      PayController.subscribeKey("selectedExchange", (val) => this.selectedExchange = val)
    ]);
  }
  connectedCallback() {
    super.connectedCallback();
    this.startPolling();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopPolling();
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return b`
      <wui-flex flexDirection="column" .padding=${["3", "0", "0", "0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `;
  }
  tokenTemplate() {
    const amount = formatAmount(this.amount || "0");
    const symbol = this.paymentAsset.metadata.symbol ?? "Unknown";
    const allNetworks = ChainController.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find((net) => net.caipNetworkId === this.paymentAsset.network);
    const hasTransactionFailed = this.quoteStatus === "failure" || this.quoteStatus === "timeout" || this.quoteStatus === "refund";
    const hasTransactionSucceeded = this.quoteStatus === "success" || this.quoteStatus === "submitted";
    if (hasTransactionSucceeded) {
      return b`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`;
    }
    if (hasTransactionFailed) {
      return b`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`;
    }
    return b`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${o(AssetUtil.getNetworkImage(targetNetwork))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${amount} ${symbol}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
  paymentTemplate() {
    return b`
      <wui-flex flexDirection="column" gap="2" .padding=${["0", "6", "0", "6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `;
  }
  paymentLifecycleTemplate() {
    const stepsWithStatus = this.getStepsWithStatus();
    return b`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2", "0", "2", "0"]}>
          ${stepsWithStatus.map((step) => this.renderStep(step))}
        </wui-flex>
      </wui-flex>
    `;
  }
  renderPaymentCycleBadge() {
    var _a;
    const hasTransactionFailed = this.quoteStatus === "failure" || this.quoteStatus === "timeout" || this.quoteStatus === "refund";
    const hasTransactionSucceeded = this.quoteStatus === "success" || this.quoteStatus === "submitted";
    if (hasTransactionFailed) {
      return b`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;
    }
    if (hasTransactionSucceeded) {
      return b`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;
    }
    const timeEstimate = ((_a = this.quote) == null ? void 0 : _a.timeInSeconds) ?? 0;
    return b`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${timeEstimate} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `;
  }
  renderPayment() {
    var _a, _b, _c;
    const allNetworks = ChainController.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find((net) => {
      var _a2;
      const network = (_a2 = this.quote) == null ? void 0 : _a2.origin.currency.network;
      if (!network) {
        return false;
      }
      const { chainId } = ParseUtil.parseCaipNetworkId(network);
      return HelpersUtil$1.isLowerCaseMatch(net.id.toString(), chainId.toString());
    });
    const formatBigNumber = NumberUtil.formatNumber(((_a = this.quote) == null ? void 0 : _a.origin.amount) || "0", {
      decimals: ((_b = this.quote) == null ? void 0 : _b.origin.currency.metadata.decimals) ?? 0
    }).toString();
    const formattedAmount = formatAmount(formatBigNumber);
    const symbol = ((_c = this.quote) == null ? void 0 : _c.origin.currency.metadata.symbol) ?? "Unknown";
    return b`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3", "0", "3", "0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${formattedAmount}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${symbol}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${o(AssetUtil.getNetworkImage(targetNetwork))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${targetNetwork == null ? void 0 : targetNetwork.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
  renderWallet() {
    return b`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3", "0", "3", "0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `;
  }
  renderWalletText() {
    var _a;
    const { image } = this.getWalletProperties({ namespace: this.namespace });
    const { address } = this.caipAddress ? ParseUtil.parseCaipAddress(this.caipAddress) : {};
    const exchangeName = (_a = this.selectedExchange) == null ? void 0 : _a.name;
    if (this.selectedExchange) {
      return b`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${exchangeName}</wui-text>
          <wui-image src=${o(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `;
    }
    return b`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${UiHelperUtil.getTruncateString({
      string: this.profileName || address || exchangeName || "",
      charsStart: this.profileName ? 16 : 4,
      charsEnd: this.profileName ? 0 : 6,
      truncate: this.profileName ? "end" : "middle"
    })}
        </wui-text>

        <wui-image src=${o(image)} size="mdl"></wui-image>
      </wui-flex>
    `;
  }
  getStepsWithStatus() {
    const hasTransactionFailed = this.quoteStatus === "failure" || this.quoteStatus === "timeout" || this.quoteStatus === "refund";
    if (hasTransactionFailed) {
      return STEPS.map((step) => ({ ...step, status: "failed" }));
    }
    return STEPS.map((step) => {
      const completedStatuses = STEP_COMPLETED_STATUSES[step.id] ?? [];
      const status = completedStatuses.includes(this.quoteStatus) ? "completed" : "pending";
      return { ...step, status };
    });
  }
  renderStep({ title, icon, status }) {
    const classes = {
      "step-icon-box": true,
      success: status === "completed"
    };
    return b`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${icon} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${e(classes)}>
            ${this.renderStatusIndicator(status)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${title}</wui-text>
      </wui-flex>
    `;
  }
  renderStatusIndicator(status) {
    if (status === "completed") {
      return b`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`;
    }
    if (status === "failed") {
      return b`<wui-icon size="sm" color="error" name="close"></wui-icon>`;
    }
    if (status === "pending") {
      return b`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`;
    }
    return null;
  }
  startPolling() {
    if (!this.pollingInterval) {
      this.fetchQuoteStatus();
      this.pollingInterval = setInterval(() => {
        this.fetchQuoteStatus();
      }, POLLING_INTERVAL_MS);
    }
  }
  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }
  async fetchQuoteStatus() {
    const requestId = PayController.state.requestId;
    if (!requestId || TERMINAL_STATES.includes(this.quoteStatus)) {
      this.stopPolling();
    } else {
      try {
        await PayController.fetchQuoteStatus({ requestId });
        if (TERMINAL_STATES.includes(this.quoteStatus)) {
          this.stopPolling();
        }
      } catch {
        this.stopPolling();
      }
    }
  }
  initializeNamespace() {
    var _a, _b;
    const namespace = ChainController.state.activeChain;
    this.namespace = namespace;
    this.caipAddress = (_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.caipAddress;
    this.profileName = ((_b = ChainController.getAccountData(namespace)) == null ? void 0 : _b.profileName) ?? null;
    this.unsubscribe.push(ChainController.subscribeChainProp("accountState", (accountState) => {
      this.caipAddress = accountState == null ? void 0 : accountState.caipAddress;
      this.profileName = (accountState == null ? void 0 : accountState.profileName) ?? null;
    }, namespace));
  }
  getWalletProperties({ namespace }) {
    if (!namespace) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connectorId = this.activeConnectorIds[namespace];
    if (!connectorId) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connector = ConnectorController.getConnector({ id: connectorId, namespace });
    if (!connector) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connectorImage = AssetUtil.getConnectorImage(connector);
    return {
      name: connector.name,
      image: connectorImage
    };
  }
};
W3mPayLoadingView.styles = styles$l;
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "paymentAsset", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "quoteStatus", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "quote", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "amount", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "namespace", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "caipAddress", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "profileName", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "activeConnectorIds", void 0);
__decorate$l([
  r()
], W3mPayLoadingView.prototype, "selectedExchange", void 0);
W3mPayLoadingView = __decorate$l([
  customElement("w3m-pay-loading-view")
], W3mPayLoadingView);
const styles$k = css`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    column-gap: ${({ spacing }) => spacing[1]};
    background-color: transparent;
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({ spacing }) => spacing[6]};
    height: ${({ spacing }) => spacing[6]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({ tokens }) => tokens.core.textSuccess};
    box-shadow: 0 0 0 2px ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }
`;
var __decorate$k = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiWalletSwitch = class WuiWalletSwitch2 extends i {
  constructor() {
    super(...arguments);
    this.address = "";
    this.profileName = "";
    this.alt = "";
    this.imageSrc = "";
    this.icon = void 0;
    this.iconSize = "md";
    this.enableGreenCircle = true;
    this.loading = false;
    this.charsStart = 4;
    this.charsEnd = 6;
  }
  render() {
    return b`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `;
  }
  leftImageTemplate() {
    const imageOrIconContent = this.icon ? b`<wui-icon
          size=${o(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>` : b`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;
    return b`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${imageOrIconContent}
        ${this.enableGreenCircle ? b`<wui-flex class="circle"></wui-flex>` : null}
      </wui-flex>
    `;
  }
  textTemplate() {
    return b`
      <wui-text variant="lg-regular" color="primary">
        ${UiHelperUtil.getTruncateString({
      string: this.profileName || this.address,
      charsStart: this.profileName ? 16 : this.charsStart,
      charsEnd: this.profileName ? 0 : this.charsEnd,
      truncate: this.profileName ? "end" : "middle"
    })}
      </wui-text>
    `;
  }
  rightImageTemplate() {
    return b`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`;
  }
};
WuiWalletSwitch.styles = [resetStyles, elementStyles, styles$k];
__decorate$k([
  n()
], WuiWalletSwitch.prototype, "address", void 0);
__decorate$k([
  n()
], WuiWalletSwitch.prototype, "profileName", void 0);
__decorate$k([
  n()
], WuiWalletSwitch.prototype, "alt", void 0);
__decorate$k([
  n()
], WuiWalletSwitch.prototype, "imageSrc", void 0);
__decorate$k([
  n()
], WuiWalletSwitch.prototype, "icon", void 0);
__decorate$k([
  n()
], WuiWalletSwitch.prototype, "iconSize", void 0);
__decorate$k([
  n({ type: Boolean })
], WuiWalletSwitch.prototype, "enableGreenCircle", void 0);
__decorate$k([
  n({ type: Boolean })
], WuiWalletSwitch.prototype, "loading", void 0);
__decorate$k([
  n({ type: Number })
], WuiWalletSwitch.prototype, "charsStart", void 0);
__decorate$k([
  n({ type: Number })
], WuiWalletSwitch.prototype, "charsEnd", void 0);
WuiWalletSwitch = __decorate$k([
  customElement("wui-wallet-switch")
], WuiWalletSwitch);
const styles$j = i$1`
  :host {
    display: block;
  }
`;
var __decorate$j = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mPayFeesSkeleton = class W3mPayFeesSkeleton2 extends i {
  render() {
    return b`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `;
  }
};
W3mPayFeesSkeleton.styles = [styles$j];
W3mPayFeesSkeleton = __decorate$j([
  customElement("w3m-pay-fees-skeleton")
], W3mPayFeesSkeleton);
const styles$i = css`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }
`;
var __decorate$i = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mPayFees = class W3mPayFees2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.quote = PayController.state.quote;
    this.unsubscribe.push(PayController.subscribeKey("quote", (val) => this.quote = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a, _b, _c;
    const amount = NumberUtil.formatNumber(((_a = this.quote) == null ? void 0 : _a.origin.amount) || "0", {
      decimals: ((_b = this.quote) == null ? void 0 : _b.origin.currency.metadata.decimals) ?? 0,
      round: 6
    }).toString();
    return b`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${amount} ${((_c = this.quote) == null ? void 0 : _c.origin.currency.metadata.symbol) || "Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote && this.quote.fees.length > 0 ? this.quote.fees.map((fee) => this.renderFee(fee)) : null}
      </wui-flex>
    `;
  }
  renderFee(fee) {
    const isNetworkFee = fee.id === "network";
    const feeAmount = NumberUtil.formatNumber(fee.amount || "0", {
      decimals: fee.currency.metadata.decimals ?? 0,
      round: 6
    }).toString();
    if (isNetworkFee) {
      const allNetworks = ChainController.getAllRequestedCaipNetworks();
      const targetNetwork = allNetworks.find((net) => HelpersUtil$1.isLowerCaseMatch(net.caipNetworkId, fee.currency.network));
      return b`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${fee.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${feeAmount} ${fee.currency.metadata.symbol || "Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${o(AssetUtil.getNetworkImage(targetNetwork))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(targetNetwork == null ? void 0 : targetNetwork.name) || "Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `;
    }
    return b`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${fee.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${feeAmount} ${fee.currency.metadata.symbol || "Unknown"}
        </wui-text>
      </wui-flex>
    `;
  }
};
W3mPayFees.styles = [styles$i];
__decorate$i([
  r()
], W3mPayFees.prototype, "quote", void 0);
W3mPayFees = __decorate$i([
  customElement("w3m-pay-fees")
], W3mPayFees);
const styles$h = css`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({ spacing }) => spacing[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({ spacing }) => spacing[8]};
    height: ${({ spacing }) => spacing[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;
var __decorate$h = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mPayOptionsEmpty = class W3mPayOptionsEmpty2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedExchange = PayController.state.selectedExchange;
    this.unsubscribe.push(PayController.subscribeKey("selectedExchange", (val) => this.selectedExchange = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const isUsingExchange = Boolean(this.selectedExchange);
    return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${isUsingExchange ? null : b`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `;
  }
  dispatchConnectOtherWalletEvent() {
    this.dispatchEvent(new CustomEvent("connectOtherWallet", {
      detail: true,
      bubbles: true,
      composed: true
    }));
  }
};
W3mPayOptionsEmpty.styles = [styles$h];
__decorate$h([
  n({ type: Array })
], W3mPayOptionsEmpty.prototype, "selectedExchange", void 0);
W3mPayOptionsEmpty = __decorate$h([
  customElement("w3m-pay-options-empty")
], W3mPayOptionsEmpty);
const styles$g = css`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: ${({ spacing }) => spacing[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({ tokens }) => tokens.theme.foregroundSecondary};
  }
`;
var __decorate$g = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mPayOptionsSkeleton = class W3mPayOptionsSkeleton2 extends i {
  render() {
    return b`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `;
  }
  renderOptionEntry() {
    return b`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
};
W3mPayOptionsSkeleton.styles = [styles$g];
W3mPayOptionsSkeleton = __decorate$g([
  customElement("w3m-pay-options-skeleton")
], W3mPayOptionsSkeleton);
const styles$f = css`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: ${({ spacing }) => spacing[3]};
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 2px solid ${({ tokens }) => tokens.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }
`;
var __decorate$f = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const SCROLL_THRESHOLD = 300;
let W3mPayOptions = class W3mPayOptions2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.options = [];
    this.selectedPaymentAsset = null;
  }
  disconnectedCallback() {
    var _a, _b;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
    const optionsEl = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(".pay-options-container");
    optionsEl == null ? void 0 : optionsEl.removeEventListener("scroll", this.handleOptionsListScroll.bind(this));
  }
  firstUpdated() {
    var _a, _b;
    const optionsEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".pay-options-container");
    if (optionsEl) {
      requestAnimationFrame(this.handleOptionsListScroll.bind(this));
      optionsEl == null ? void 0 : optionsEl.addEventListener("scroll", this.handleOptionsListScroll.bind(this));
      this.resizeObserver = new ResizeObserver(() => {
        this.handleOptionsListScroll();
      });
      (_b = this.resizeObserver) == null ? void 0 : _b.observe(optionsEl);
      this.handleOptionsListScroll();
    }
  }
  render() {
    return b`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map((option) => this.payOptionTemplate(option))}
      </wui-flex>
    `;
  }
  payOptionTemplate(paymentAsset) {
    var _a, _b;
    const { network, metadata, asset, amount = "0" } = paymentAsset;
    const allNetworks = ChainController.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find((net) => net.caipNetworkId === network);
    const paymentCaipAddress = `${network}:${asset}`;
    const selectedPaymentCaipAddress = `${(_a = this.selectedPaymentAsset) == null ? void 0 : _a.network}:${(_b = this.selectedPaymentAsset) == null ? void 0 : _b.asset}`;
    const isSelected = paymentCaipAddress === selectedPaymentCaipAddress;
    const bigAmount = NumberUtil.bigNumber(amount, { safe: true });
    const hasEnoughBalance = bigAmount.gt(0);
    return b`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${() => {
      var _a2;
      return (_a2 = this.onSelect) == null ? void 0 : _a2.call(this, paymentAsset);
    }}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${o(metadata.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${o(AssetUtil.getNetworkImage(targetNetwork))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${metadata.symbol}</wui-text>
            ${hasEnoughBalance ? b`<wui-text variant="sm-regular" color="secondary">
                  ${bigAmount.round(6).toString()} ${metadata.symbol}
                </wui-text>` : null}
          </wui-flex>
        </wui-flex>

        ${isSelected ? b`<wui-icon name="checkmark" size="md" color="success"></wui-icon>` : null}
      </wui-flex>
    `;
  }
  handleOptionsListScroll() {
    var _a;
    const optionsEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".pay-options-container");
    if (!optionsEl) {
      return;
    }
    const shouldApplyMask = optionsEl.scrollHeight > SCROLL_THRESHOLD;
    if (shouldApplyMask) {
      optionsEl.style.setProperty("--options-mask-image", `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`);
      optionsEl.style.setProperty("--options-scroll--top-opacity", MathUtil.interpolate([0, 50], [0, 1], optionsEl.scrollTop).toString());
      optionsEl.style.setProperty("--options-scroll--bottom-opacity", MathUtil.interpolate([0, 50], [0, 1], optionsEl.scrollHeight - optionsEl.scrollTop - optionsEl.offsetHeight).toString());
    } else {
      optionsEl.style.setProperty("--options-mask-image", "none");
      optionsEl.style.setProperty("--options-scroll--top-opacity", "0");
      optionsEl.style.setProperty("--options-scroll--bottom-opacity", "0");
    }
  }
};
W3mPayOptions.styles = [styles$f];
__decorate$f([
  n({ type: Array })
], W3mPayOptions.prototype, "options", void 0);
__decorate$f([
  n()
], W3mPayOptions.prototype, "selectedPaymentAsset", void 0);
__decorate$f([
  n()
], W3mPayOptions.prototype, "onSelect", void 0);
W3mPayOptions = __decorate$f([
  customElement("w3m-pay-options")
], W3mPayOptions);
const styles$e = css`
  .payment-methods-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-top-right-radius: ${({ borderRadius }) => borderRadius[5]};
    border-top-left-radius: ${({ borderRadius }) => borderRadius[5]};
  }

  .pay-options-container {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    padding: ${({ spacing }) => spacing[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
var __decorate$e = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const NAMESPACE_ICONS = {
  eip155: "ethereum",
  solana: "solana",
  bip122: "bitcoin",
  ton: "ton"
};
const NAMESPACE_LABELS = {
  eip155: { icon: NAMESPACE_ICONS.eip155, label: "EVM" },
  solana: { icon: NAMESPACE_ICONS.solana, label: "Solana" },
  bip122: { icon: NAMESPACE_ICONS.bip122, label: "Bitcoin" },
  ton: { icon: NAMESPACE_ICONS.ton, label: "Ton" }
};
let W3mPayQuoteView = class W3mPayQuoteView2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.profileName = null;
    this.paymentAsset = PayController.state.paymentAsset;
    this.namespace = void 0;
    this.caipAddress = void 0;
    this.amount = PayController.state.amount;
    this.recipient = PayController.state.recipient;
    this.activeConnectorIds = ConnectorController.state.activeConnectorIds;
    this.selectedPaymentAsset = PayController.state.selectedPaymentAsset;
    this.selectedExchange = PayController.state.selectedExchange;
    this.isFetchingQuote = PayController.state.isFetchingQuote;
    this.quoteError = PayController.state.quoteError;
    this.quote = PayController.state.quote;
    this.isFetchingTokenBalances = PayController.state.isFetchingTokenBalances;
    this.tokenBalances = PayController.state.tokenBalances;
    this.isPaymentInProgress = PayController.state.isPaymentInProgress;
    this.exchangeUrlForQuote = PayController.state.exchangeUrlForQuote;
    this.completedTransactionsCount = 0;
    this.unsubscribe.push(PayController.subscribeKey("paymentAsset", (val) => this.paymentAsset = val));
    this.unsubscribe.push(PayController.subscribeKey("tokenBalances", (val) => this.onTokenBalancesChanged(val)));
    this.unsubscribe.push(PayController.subscribeKey("isFetchingTokenBalances", (val) => this.isFetchingTokenBalances = val));
    this.unsubscribe.push(ConnectorController.subscribeKey("activeConnectorIds", (newActiveConnectorIds) => this.activeConnectorIds = newActiveConnectorIds));
    this.unsubscribe.push(PayController.subscribeKey("selectedPaymentAsset", (val) => this.selectedPaymentAsset = val));
    this.unsubscribe.push(PayController.subscribeKey("isFetchingQuote", (val) => this.isFetchingQuote = val));
    this.unsubscribe.push(PayController.subscribeKey("quoteError", (val) => this.quoteError = val));
    this.unsubscribe.push(PayController.subscribeKey("quote", (val) => this.quote = val));
    this.unsubscribe.push(PayController.subscribeKey("amount", (val) => this.amount = val));
    this.unsubscribe.push(PayController.subscribeKey("recipient", (val) => this.recipient = val));
    this.unsubscribe.push(PayController.subscribeKey("isPaymentInProgress", (val) => this.isPaymentInProgress = val));
    this.unsubscribe.push(PayController.subscribeKey("selectedExchange", (val) => this.selectedExchange = val));
    this.unsubscribe.push(PayController.subscribeKey("exchangeUrlForQuote", (val) => this.exchangeUrlForQuote = val));
    this.resetQuoteState();
    this.initializeNamespace();
    this.fetchTokens();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resetAssetsState();
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    const shouldFetchQuote = changedProperties.has("selectedPaymentAsset");
    if (shouldFetchQuote) {
      this.fetchQuote();
    }
  }
  render() {
    return b`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4", "4", "5", "4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1", "0", "1", "0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `;
  }
  profileTemplate() {
    var _a, _b;
    if (this.selectedExchange) {
      const amount = NumberUtil.formatNumber((_a = this.quote) == null ? void 0 : _a.origin.amount, {
        decimals: ((_b = this.quote) == null ? void 0 : _b.origin.currency.metadata.decimals) ?? 0
      }).toString();
      return b`
        <wui-flex
          .padding=${["4", "3", "4", "3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote ? b`<wui-text variant="lg-regular" color="primary">
                ${NumberUtil.bigNumber(amount, { safe: true }).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>` : b`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `;
    }
    const address = CoreHelperUtil.getPlainAddress(this.caipAddress) ?? "";
    const { name, image } = this.getWalletProperties({ namespace: this.namespace });
    const { icon: chainIcon, label: chainLabel } = NAMESPACE_LABELS[this.namespace] ?? {};
    return b`
      <wui-flex
        .padding=${["4", "3", "4", "3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${o(this.profileName)}
          address=${o(address)}
          imageSrc=${o(image)}
          alt=${o(name)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${o(chainLabel)}
          address=${o(address)}
          icon=${o(chainIcon)}
          iconSize="xs"
          .enableGreenCircle=${false}
          alt=${o(chainLabel)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `;
  }
  initializeNamespace() {
    var _a, _b;
    const namespace = ChainController.state.activeChain;
    this.namespace = namespace;
    this.caipAddress = (_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.caipAddress;
    this.profileName = ((_b = ChainController.getAccountData(namespace)) == null ? void 0 : _b.profileName) ?? null;
    this.unsubscribe.push(ChainController.subscribeChainProp("accountState", (accountState) => this.onAccountStateChanged(accountState), namespace));
  }
  async fetchTokens() {
    if (this.namespace) {
      let caipNetwork = void 0;
      if (this.caipAddress) {
        const { chainId, chainNamespace } = ParseUtil.parseCaipAddress(this.caipAddress);
        const caipNetworkId = `${chainNamespace}:${chainId}`;
        const allNetworks = ChainController.getAllRequestedCaipNetworks();
        caipNetwork = allNetworks.find((net) => net.caipNetworkId === caipNetworkId);
      }
      await PayController.fetchTokens({
        caipAddress: this.caipAddress,
        caipNetwork,
        namespace: this.namespace
      });
    }
  }
  fetchQuote() {
    if (this.amount && this.recipient && this.selectedPaymentAsset && this.paymentAsset) {
      const { address } = this.caipAddress ? ParseUtil.parseCaipAddress(this.caipAddress) : {};
      PayController.fetchQuote({
        amount: this.amount.toString(),
        address,
        sourceToken: this.selectedPaymentAsset,
        toToken: this.paymentAsset,
        recipient: this.recipient
      });
    }
  }
  getWalletProperties({ namespace }) {
    if (!namespace) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connectorId = this.activeConnectorIds[namespace];
    if (!connectorId) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connector = ConnectorController.getConnector({ id: connectorId, namespace });
    if (!connector) {
      return {
        name: void 0,
        image: void 0
      };
    }
    const connectorImage = AssetUtil.getConnectorImage(connector);
    return {
      name: connector.name,
      image: connectorImage
    };
  }
  paymentOptionsViewTemplate() {
    return b`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `;
  }
  paymentOptionsTemplate() {
    const paymentAssets = this.getPaymentAssetFromTokenBalances();
    if (this.isFetchingTokenBalances) {
      return b`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;
    }
    if (paymentAssets.length === 0) {
      return b`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;
    }
    const classes = {
      disabled: this.isFetchingQuote
    };
    return b`<w3m-pay-options
      class=${e(classes)}
      .options=${paymentAssets}
      .selectedPaymentAsset=${o(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`;
  }
  amountWithFeeTemplate() {
    if (this.isFetchingQuote || !this.selectedPaymentAsset || this.quoteError) {
      return b`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`;
    }
    return b`<w3m-pay-fees></w3m-pay-fees>`;
  }
  paymentActionsTemplate() {
    var _a, _b, _c;
    const isLoading = this.isFetchingQuote || this.isFetchingTokenBalances;
    const isDisabled = this.isFetchingQuote || this.isFetchingTokenBalances || !this.selectedPaymentAsset || Boolean(this.quoteError);
    const amount = NumberUtil.formatNumber(((_a = this.quote) == null ? void 0 : _a.origin.amount) ?? 0, {
      decimals: ((_b = this.quote) == null ? void 0 : _b.origin.currency.metadata.decimals) ?? 0
    }).toString();
    if (this.selectedExchange) {
      if (isLoading || isDisabled) {
        return b`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${true}></wui-shimmer>
        `;
      }
      return b`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`;
    }
    return b`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${isLoading || isDisabled ? b`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>` : b`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${formatAmount(amount)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${((_c = this.quote) == null ? void 0 : _c.origin.currency.metadata.symbol) || "Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({ isLoading, isDisabled })}
      </wui-flex>
    `;
  }
  actionButtonTemplate(params) {
    const allTransactionSteps = getTransactionsSteps(this.quote);
    const { isLoading, isDisabled } = params;
    let label = "Pay";
    const isApprovalRequired = allTransactionSteps.length > 1 && this.completedTransactionsCount === 0;
    if (isApprovalRequired) {
      label = "Approve";
    }
    return b`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${isLoading || this.isPaymentInProgress}
        ?disabled=${isDisabled || this.isPaymentInProgress}
        @click=${() => {
      if (allTransactionSteps.length > 0) {
        this.onSendTransactions();
      } else {
        this.onTransfer();
      }
    }}
      >
        ${label}
        ${isLoading ? null : b`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `;
  }
  getPaymentAssetFromTokenBalances() {
    if (!this.namespace) {
      return [];
    }
    const balances = this.tokenBalances[this.namespace] ?? [];
    const paymentOptionsWithFormattedBalances = balances.map((balance) => {
      try {
        return formatBalanceToPaymentAsset(balance);
      } catch (err) {
        return null;
      }
    }).filter((option) => Boolean(option));
    const paymentOptionsToShow = paymentOptionsWithFormattedBalances.filter((option) => {
      const { chainId: optionChainId } = ParseUtil.parseCaipNetworkId(option.network);
      const { chainId: paymentAssetChainId } = ParseUtil.parseCaipNetworkId(this.paymentAsset.network);
      if (HelpersUtil$1.isLowerCaseMatch(option.asset, this.paymentAsset.asset)) {
        return true;
      }
      if (this.selectedExchange) {
        return !HelpersUtil$1.isLowerCaseMatch(optionChainId.toString(), paymentAssetChainId.toString());
      }
      return true;
    });
    return paymentOptionsToShow;
  }
  onTokenBalancesChanged(tokenBalances) {
    this.tokenBalances = tokenBalances;
    const [paymentAsset] = this.getPaymentAssetFromTokenBalances();
    if (paymentAsset) {
      PayController.setSelectedPaymentAsset(paymentAsset);
    }
  }
  async onConnectOtherWallet() {
    await ConnectorController.connect();
    await ModalController.open({ view: "PayQuote" });
  }
  onAccountStateChanged(accountState) {
    const { address: oldAddress } = this.caipAddress ? ParseUtil.parseCaipAddress(this.caipAddress) : {};
    this.caipAddress = accountState == null ? void 0 : accountState.caipAddress;
    this.profileName = (accountState == null ? void 0 : accountState.profileName) ?? null;
    if (oldAddress) {
      const { address: newAddress } = this.caipAddress ? ParseUtil.parseCaipAddress(this.caipAddress) : {};
      if (!newAddress) {
        ModalController.close();
      } else if (!HelpersUtil$1.isLowerCaseMatch(newAddress, oldAddress)) {
        this.resetAssetsState();
        this.resetQuoteState();
        this.fetchTokens();
      }
    }
  }
  onSelectedPaymentAssetChanged(paymentAsset) {
    if (!this.isFetchingQuote) {
      PayController.setSelectedPaymentAsset(paymentAsset);
    }
  }
  async onTransfer() {
    var _a, _b, _c;
    const transferStep = getTransferStep(this.quote);
    if (transferStep) {
      const isQuoteAssetSameAsSelectedPaymentAsset = HelpersUtil$1.isLowerCaseMatch((_a = this.selectedPaymentAsset) == null ? void 0 : _a.asset, transferStep.deposit.currency);
      if (!isQuoteAssetSameAsSelectedPaymentAsset) {
        throw new Error("Quote asset is not the same as the selected payment asset");
      }
      const currentAmount = ((_b = this.selectedPaymentAsset) == null ? void 0 : _b.amount) ?? "0";
      const amountToTransfer = NumberUtil.formatNumber(transferStep.deposit.amount, {
        decimals: ((_c = this.selectedPaymentAsset) == null ? void 0 : _c.metadata.decimals) ?? 0
      }).toString();
      const hasEnoughFunds = NumberUtil.bigNumber(currentAmount).gte(amountToTransfer);
      if (!hasEnoughFunds) {
        SnackController.showError("Insufficient funds");
        return;
      }
      if (this.quote && this.selectedPaymentAsset && this.caipAddress && this.namespace) {
        const { address: fromAddress } = ParseUtil.parseCaipAddress(this.caipAddress);
        await PayController.onTransfer({
          chainNamespace: this.namespace,
          fromAddress,
          toAddress: transferStep.deposit.receiver,
          amount: amountToTransfer,
          paymentAsset: this.selectedPaymentAsset
        });
        PayController.setRequestId(transferStep.requestId);
        RouterController.push("PayLoading");
      }
    }
  }
  async onSendTransactions() {
    var _a, _b, _c;
    const currentAmount = ((_a = this.selectedPaymentAsset) == null ? void 0 : _a.amount) ?? "0";
    const amountToSwap = NumberUtil.formatNumber(((_b = this.quote) == null ? void 0 : _b.origin.amount) ?? 0, {
      decimals: ((_c = this.selectedPaymentAsset) == null ? void 0 : _c.metadata.decimals) ?? 0
    }).toString();
    const hasEnoughFunds = NumberUtil.bigNumber(currentAmount).gte(amountToSwap);
    if (!hasEnoughFunds) {
      SnackController.showError("Insufficient funds");
      return;
    }
    const allTransactionSteps = getTransactionsSteps(this.quote);
    const [transactionStep] = getTransactionsSteps(this.quote, this.completedTransactionsCount);
    if (transactionStep && this.namespace) {
      await PayController.onSendTransaction({
        namespace: this.namespace,
        transactionStep
      });
      this.completedTransactionsCount += 1;
      const hasCompletedAllTransactions = this.completedTransactionsCount === allTransactionSteps.length;
      if (hasCompletedAllTransactions) {
        PayController.setRequestId(transactionStep.requestId);
        RouterController.push("PayLoading");
      }
    }
  }
  onPayWithExchange() {
    if (this.exchangeUrlForQuote) {
      const popupWindow = CoreHelperUtil.returnOpenHref("", "popupWindow", "scrollbar=yes,width=480,height=720");
      if (!popupWindow) {
        throw new Error("Could not create popup window");
      }
      popupWindow.location.href = this.exchangeUrlForQuote;
      const transactionStep = getTransferStep(this.quote);
      if (transactionStep) {
        PayController.setRequestId(transactionStep.requestId);
      }
      PayController.initiatePayment();
      RouterController.push("PayLoading");
    }
  }
  resetAssetsState() {
    PayController.setSelectedPaymentAsset(null);
  }
  resetQuoteState() {
    PayController.resetQuoteState();
  }
};
W3mPayQuoteView.styles = styles$e;
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "profileName", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "paymentAsset", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "namespace", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "caipAddress", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "amount", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "recipient", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "activeConnectorIds", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "selectedPaymentAsset", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "selectedExchange", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "isFetchingQuote", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "quoteError", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "quote", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "isFetchingTokenBalances", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "tokenBalances", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "isPaymentInProgress", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "exchangeUrlForQuote", void 0);
__decorate$e([
  r()
], W3mPayQuoteView.prototype, "completedTransactionsCount", void 0);
W3mPayQuoteView = __decorate$e([
  customElement("w3m-pay-quote-view")
], W3mPayQuoteView);
const styles$d = css`
  wui-image {
    border-radius: ${({ borderRadius }) => borderRadius.round};
  }

  .transfers-badge {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border: 1px solid ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }
`;
var __decorate$d = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mPayHeader = class W3mPayHeader2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paymentAsset = PayController.state.paymentAsset;
    this.amount = PayController.state.amount;
    this.unsubscribe.push(PayController.subscribeKey("paymentAsset", (val) => {
      this.paymentAsset = val;
    }), PayController.subscribeKey("amount", (val) => {
      this.amount = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const allNetworks = ChainController.getAllRequestedCaipNetworks();
    const targetNetwork = allNetworks.find((net) => net.caipNetworkId === this.paymentAsset.network);
    return b`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1", "2", "1", "1"]}
      class="transfers-badge"
    >
      <wui-image src=${o(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${(targetNetwork == null ? void 0 : targetNetwork.name) ?? "Unknown"}
      </wui-text>
    </wui-flex>`;
  }
};
W3mPayHeader.styles = [styles$d];
__decorate$d([
  n()
], W3mPayHeader.prototype, "paymentAsset", void 0);
__decorate$d([
  n()
], W3mPayHeader.prototype, "amount", void 0);
W3mPayHeader = __decorate$d([
  customElement("w3m-pay-header")
], W3mPayHeader);
const styles$c = css`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({ easings }) => easings["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({ easings }) => easings["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({ easings }) => easings["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({ easings }) => easings["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
var __decorate$c = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const BETA_SCREENS = ["SmartSessionList"];
const BACKGROUND_OVERRIDES = {
  PayWithExchange: vars.tokens.theme.foregroundPrimary
};
function headings() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const connectorName = (_b = (_a = RouterController.state.data) == null ? void 0 : _a.connector) == null ? void 0 : _b.name;
  const walletName = (_d = (_c = RouterController.state.data) == null ? void 0 : _c.wallet) == null ? void 0 : _d.name;
  const networkName = (_f = (_e = RouterController.state.data) == null ? void 0 : _e.network) == null ? void 0 : _f.name;
  const name = walletName ?? connectorName;
  const connectors = ConnectorController.getConnectors();
  const isEmail = connectors.length === 1 && ((_g = connectors[0]) == null ? void 0 : _g.id) === "w3m-email";
  const socialProvider = (_h = ChainController.getAccountData()) == null ? void 0 : _h.socialProvider;
  const socialTitle = socialProvider ? socialProvider.charAt(0).toUpperCase() + socialProvider.slice(1) : "Connect Social";
  return {
    Connect: `Connect ${isEmail ? "Email" : ""} Wallet`,
    Create: "Create Wallet",
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    AllWallets: "All Wallets",
    ApproveTransaction: "Approve Transaction",
    BuyInProgress: "Buy",
    UsageExceeded: "Usage Exceeded",
    ConnectingExternal: name ?? "Connect Wallet",
    ConnectingWalletConnect: name ?? "WalletConnect",
    ConnectingWalletConnectBasic: "WalletConnect",
    ConnectingSiwe: "Sign In",
    Convert: "Convert",
    ConvertSelectToken: "Select token",
    ConvertPreview: "Preview Convert",
    Downloads: name ? `Get ${name}` : "Downloads",
    EmailLogin: "Email Login",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    GetWallet: "Get a Wallet",
    Networks: "Choose Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    Pay: "How you pay",
    ProfileWallets: "Wallets",
    SwitchNetwork: networkName ?? "Switch Network",
    Transactions: "Activity",
    UnsupportedChain: "Switch Network",
    UpgradeEmailWallet: "Upgrade Your Wallet",
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    WhatIsABuy: "What is Buy?",
    RegisterAccountName: "Choose Name",
    RegisterAccountNameSuccess: "",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks",
    Swap: "Swap",
    SwapSelectToken: "Select Token",
    SwapPreview: "Preview Swap",
    WalletSend: "Send",
    WalletSendPreview: "Review Send",
    WalletSendSelectToken: "Select Token",
    WalletSendConfirmed: "Confirmed",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a Wallet?",
    ConnectWallets: "Connect Wallet",
    ConnectSocials: "All Socials",
    ConnectingSocial: socialTitle,
    ConnectingMultiChain: "Select Chain",
    ConnectingFarcaster: "Farcaster",
    SwitchActiveChain: "Switch Chain",
    SmartSessionCreated: void 0,
    SmartSessionList: "Smart Sessions",
    SIWXSignMessage: "Sign In",
    PayLoading: "Processing payment...",
    PayQuote: "Payment Quote",
    DataCapture: "Profile",
    DataCaptureOtpConfirm: "Confirm Email",
    FundWallet: "Fund Wallet",
    PayWithExchange: "Deposit from Exchange",
    PayWithExchangeSelectAsset: "Select Asset",
    SmartAccountSettings: "Smart Account Settings"
  };
}
let W3mHeader = class W3mHeader2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.heading = headings()[RouterController.state.view];
    this.network = ChainController.state.activeCaipNetwork;
    this.networkImage = AssetUtil.getNetworkImage(this.network);
    this.showBack = false;
    this.prevHistoryLength = 1;
    this.view = RouterController.state.view;
    this.viewDirection = "";
    this.unsubscribe.push(AssetController.subscribeNetworkImages(() => {
      this.networkImage = AssetUtil.getNetworkImage(this.network);
    }), RouterController.subscribeKey("view", (val) => {
      setTimeout(() => {
        this.view = val;
        this.heading = headings()[val];
      }, ConstantsUtil.ANIMATION_DURATIONS.HeaderText);
      this.onViewChange();
      this.onHistoryChange();
    }), ChainController.subscribeKey("activeCaipNetwork", (val) => {
      this.network = val;
      this.networkImage = AssetUtil.getNetworkImage(this.network);
    }));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const backgroundColor = BACKGROUND_OVERRIDES[RouterController.state.view] ?? vars.tokens.theme.backgroundPrimary;
    this.style.setProperty("--local-header-background-color", backgroundColor);
    return b`
      <wui-flex
        .padding=${["0", "4", "0", "4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
  }
  onWalletHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" });
    RouterController.push("WhatIsAWallet");
  }
  async onClose() {
    await ModalUtil.safeClose();
  }
  rightHeaderTemplate() {
    var _a, _b, _c;
    const isSmartSessionsEnabled = (_c = (_b = (_a = OptionsController) == null ? void 0 : _a.state) == null ? void 0 : _b.features) == null ? void 0 : _c.smartSessions;
    if (RouterController.state.view !== "Account" || !isSmartSessionsEnabled) {
      return this.closeButtonTemplate();
    }
    return b`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${() => RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
  }
  closeButtonTemplate() {
    return b`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `;
  }
  titleTemplate() {
    if (this.view === "PayQuote") {
      return b`<w3m-pay-header></w3m-pay-header>`;
    }
    const isBeta = BETA_SCREENS.includes(this.view);
    return b`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${isBeta ? b`<wui-tag variant="accent" size="md">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  leftHeaderTemplate() {
    var _a;
    const { view } = RouterController.state;
    const isConnectHelp = view === "Connect";
    const isEmbeddedEnable = OptionsController.state.enableEmbedded;
    const isApproveTransaction = view === "ApproveTransaction";
    const isConnectingSIWEView = view === "ConnectingSiwe";
    const isAccountView = view === "Account";
    const enableNetworkSwitch = OptionsController.state.enableNetworkSwitch;
    const shouldHideBack = isApproveTransaction || isConnectingSIWEView || isConnectHelp && isEmbeddedEnable;
    if (isAccountView && enableNetworkSwitch) {
      return b`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${o((_a = this.network) == null ? void 0 : _a.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${o(this.networkImage)}
      ></wui-select>`;
    }
    if (this.showBack && !shouldHideBack) {
      return b`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`;
    }
    return b`<wui-icon-button
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`;
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      RouterController.push("Networks");
    }
  }
  isAllowedNetworkSwitch() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a;
      return id === ((_a = this.network) == null ? void 0 : _a.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onViewChange() {
    const { history } = RouterController.state;
    let direction = ConstantsUtil.VIEW_DIRECTION.Next;
    if (history.length < this.prevHistoryLength) {
      direction = ConstantsUtil.VIEW_DIRECTION.Prev;
    }
    this.prevHistoryLength = history.length;
    this.viewDirection = direction;
  }
  async onHistoryChange() {
    var _a;
    const { history } = RouterController.state;
    const buttonEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("#dynamic");
    if (history.length > 1 && !this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = true;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    } else if (history.length <= 1 && this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = false;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onGoBack() {
    RouterController.goBack();
  }
};
W3mHeader.styles = styles$c;
__decorate$c([
  r()
], W3mHeader.prototype, "heading", void 0);
__decorate$c([
  r()
], W3mHeader.prototype, "network", void 0);
__decorate$c([
  r()
], W3mHeader.prototype, "networkImage", void 0);
__decorate$c([
  r()
], W3mHeader.prototype, "showBack", void 0);
__decorate$c([
  r()
], W3mHeader.prototype, "prevHistoryLength", void 0);
__decorate$c([
  r()
], W3mHeader.prototype, "view", void 0);
__decorate$c([
  r()
], W3mHeader.prototype, "viewDirection", void 0);
W3mHeader = __decorate$c([
  customElement("w3m-header")
], W3mHeader);
const styles$b = css`
  :host {
    display: flex;
    align-items: center;
    gap: ${({ spacing }) => spacing[1]};
    padding: ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({ tokens }) => tokens.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({ borderRadius }) => borderRadius.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({ spacing }) => spacing[1]};
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    border-radius: ${({ borderRadius }) => borderRadius.round} !important;
  }
`;
var __decorate$b = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiSnackbar = class WuiSnackbar2 extends i {
  constructor() {
    super(...arguments);
    this.message = "";
    this.variant = "success";
  }
  render() {
    return b`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
  }
  templateIcon() {
    const COLOR = {
      success: "success",
      error: "error",
      warning: "warning",
      info: "default"
    };
    const ICON = {
      success: "checkmark",
      error: "warning",
      warning: "warningCircle",
      info: "info"
    };
    if (this.variant === "loading") {
      return b`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`;
    }
    return b`<wui-icon-box
      size="md"
      color=${COLOR[this.variant]}
      icon=${ICON[this.variant]}
    ></wui-icon-box>`;
  }
};
WuiSnackbar.styles = [resetStyles, styles$b];
__decorate$b([
  n()
], WuiSnackbar.prototype, "message", void 0);
__decorate$b([
  n()
], WuiSnackbar.prototype, "variant", void 0);
WuiSnackbar = __decorate$b([
  customElement("wui-snackbar")
], WuiSnackbar);
const styles$a = i$1`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;
var __decorate$a = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mSnackBar = class W3mSnackBar2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.open = SnackController.state.open;
    this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = SnackController.state;
    return b` <wui-snackbar message=${message} variant=${variant}></wui-snackbar> `;
  }
  onOpen() {
    clearTimeout(this.timeout);
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      if (SnackController.state.autoClose) {
        this.timeout = setTimeout(() => SnackController.hide(), 2500);
      }
    } else {
      this.animate([
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mSnackBar.styles = styles$a;
__decorate$a([
  r()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate$a([
  customElement("w3m-snackbar")
], W3mSnackBar);
const styles$9 = i$1`
  :host {
    width: 100%;
    display: block;
  }
`;
var __decorate$9 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiTooltipTrigger = class WuiTooltipTrigger2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.text = "";
    this.open = TooltipController.state.open;
    this.unsubscribe.push(RouterController.subscribeKey("view", () => {
      TooltipController.hide();
    }), ModalController.subscribeKey("open", (modalOpen) => {
      if (!modalOpen) {
        TooltipController.hide();
      }
    }), TooltipController.subscribeKey("open", (tooltipOpen) => {
      this.open = tooltipOpen;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    TooltipController.hide();
  }
  render() {
    return b`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `;
  }
  renderChildren() {
    return b`<slot></slot> `;
  }
  onMouseEnter() {
    const rect = this.getBoundingClientRect();
    if (!this.open) {
      const modalContainer = document.querySelector("w3m-modal");
      const triggerRect = {
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top
      };
      if (modalContainer) {
        const containerRect = modalContainer.getBoundingClientRect();
        triggerRect.left = rect.left - (window.innerWidth - containerRect.width) / 2;
        triggerRect.top = rect.top - (window.innerHeight - containerRect.height) / 2;
      }
      TooltipController.showTooltip({
        message: this.text,
        triggerRect,
        variant: "shade"
      });
    }
  }
  onMouseLeave(event) {
    if (!this.contains(event.relatedTarget)) {
      TooltipController.hide();
    }
  }
};
WuiTooltipTrigger.styles = [styles$9];
__decorate$9([
  n()
], WuiTooltipTrigger.prototype, "text", void 0);
__decorate$9([
  r()
], WuiTooltipTrigger.prototype, "open", void 0);
WuiTooltipTrigger = __decorate$9([
  customElement("w3m-tooltip-trigger")
], WuiTooltipTrigger);
const styles$8 = css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({ spacing }) => spacing["3"]} 10px ${({ spacing }) => spacing["3"]};
    border-radius: ${({ borderRadius }) => borderRadius["3"]};
    color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({ spacing }) => spacing["5"]});
    transition: opacity ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({ durations }) => durations["xl"]};
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var __decorate$8 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mTooltip = class W3mTooltip2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.open = TooltipController.state.open;
    this.message = TooltipController.state.message;
    this.triggerRect = TooltipController.state.triggerRect;
    this.variant = TooltipController.state.variant;
    this.unsubscribe.push(...[
      TooltipController.subscribe((newState) => {
        this.open = newState.open;
        this.message = newState.message;
        this.triggerRect = newState.triggerRect;
        this.variant = newState.variant;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    this.dataset["variant"] = this.variant;
    const topValue = this.triggerRect.top;
    const leftValue = this.triggerRect.left;
    this.style.cssText = `
    --w3m-tooltip-top: ${topValue}px;
    --w3m-tooltip-left: ${leftValue}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `;
    return b`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`;
  }
};
W3mTooltip.styles = [styles$8];
__decorate$8([
  r()
], W3mTooltip.prototype, "open", void 0);
__decorate$8([
  r()
], W3mTooltip.prototype, "message", void 0);
__decorate$8([
  r()
], W3mTooltip.prototype, "triggerRect", void 0);
__decorate$8([
  r()
], W3mTooltip.prototype, "variant", void 0);
W3mTooltip = __decorate$8([
  customElement("w3m-tooltip")
], W3mTooltip);
const HelpersUtil = {
  getTabsByNamespace(namespace) {
    var _a;
    const isEVM = Boolean(namespace) && namespace === ConstantsUtil$1.CHAIN.EVM;
    if (!isEVM) {
      return [];
    }
    if (((_a = OptionsController.state.remoteFeatures) == null ? void 0 : _a.activity) === false) {
      return ConstantsUtil.ACCOUNT_TABS.filter((tab) => tab.label !== "Activity");
    }
    return ConstantsUtil.ACCOUNT_TABS;
  },
  isValidReownName(name) {
    return /^[a-zA-Z0-9]+$/gu.test(name);
  },
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(email);
  },
  validateReownName(name) {
    const sanitizedName = name.replace(/\^/gu, "").toLowerCase();
    return sanitizedName.replace(/[^a-zA-Z0-9]/gu, "");
  },
  hasFooter() {
    var _a;
    const view = RouterController.state.view;
    if (ConstantsUtil.VIEWS_WITH_LEGAL_FOOTER.includes(view)) {
      const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
      const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
      const showOnlyBranding = !termsConditionsUrl && !privacyPolicyUrl || legalCheckbox;
      if (showOnlyBranding) {
        return false;
      }
      return true;
    }
    return ConstantsUtil.VIEWS_WITH_DEFAULT_FOOTER.includes(view);
  }
};
const styles$7 = css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({ spacing }) => spacing["3"]};
  }

  a {
    text-decoration: none;
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
    font-weight: 500;
  }
`;
var __decorate$7 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mLegalFooter = class W3mLegalFooter2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.remoteFeatures = OptionsController.state.remoteFeatures;
    this.unsubscribe.push(OptionsController.subscribeKey("remoteFeatures", (val) => this.remoteFeatures = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
    const showOnlyBranding = !termsConditionsUrl && !privacyPolicyUrl || legalCheckbox;
    if (showOnlyBranding) {
      return b`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(true)} </wui-flex>
      `;
    }
    return b`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4", "3", "3", "3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return b`<a href=${termsConditionsUrl} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return b`<a href=${privacyPolicyUrl} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`;
  }
  reownBrandingTemplate(showOnlyBranding = false) {
    var _a;
    if (!((_a = this.remoteFeatures) == null ? void 0 : _a.reownBranding)) {
      return null;
    }
    if (showOnlyBranding) {
      return b`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`;
    }
    return b`<wui-ux-by-reown></wui-ux-by-reown>`;
  }
};
W3mLegalFooter.styles = [styles$7];
__decorate$7([
  r()
], W3mLegalFooter.prototype, "remoteFeatures", void 0);
W3mLegalFooter = __decorate$7([
  customElement("w3m-legal-footer")
], W3mLegalFooter);
const styles$6 = i$1``;
var __decorate$6 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter2 extends i {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return b`
      <wui-flex
        .padding=${["4", "3", "3", "3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `;
  }
  howDoesItWorkTemplate() {
    return b` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
  }
  onWhatIsBuy() {
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WHAT_IS_A_BUY",
      properties: {
        isSmartAccount: getPreferredAccountType(ChainController.state.activeChain) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("WhatIsABuy");
  }
};
W3mOnRampProvidersFooter.styles = [styles$6];
W3mOnRampProvidersFooter = __decorate$6([
  customElement("w3m-onramp-providers-footer")
], W3mOnRampProvidersFooter);
const styles$5 = css`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;
var __decorate$5 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mFooter = class W3mFooter2 extends i {
  constructor() {
    super(...arguments);
    this.resizeObserver = void 0;
    this.unsubscribe = [];
    this.status = "hide";
    this.view = RouterController.state.view;
  }
  firstUpdated() {
    this.status = HelpersUtil.hasFooter() ? "show" : "hide";
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => {
      this.view = val;
      this.status = HelpersUtil.hasFooter() ? "show" : "hide";
      if (this.status === "hide") {
        const globalStyles = document.documentElement.style;
        globalStyles.setProperty("--apkt-footer-height", "0px");
      }
    }));
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === this.getWrapper()) {
          const newHeight = `${entry.contentRect.height}px`;
          const globalStyles = document.documentElement.style;
          globalStyles.setProperty("--apkt-footer-height", newHeight);
        }
      }
    });
    this.resizeObserver.observe(this.getWrapper());
  }
  render() {
    return b`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `;
  }
  templatePageContainer() {
    if (HelpersUtil.hasFooter()) {
      return b` ${this.templateFooter()}`;
    }
    return null;
  }
  templateFooter() {
    switch (this.view) {
      case "Networks":
        return this.templateNetworksFooter();
      case "Connect":
      case "ConnectWallets":
      case "OnRampFiatSelect":
      case "OnRampTokenSelect":
        return b`<w3m-legal-footer></w3m-legal-footer>`;
      case "OnRampProviders":
        return b`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;
      default:
        return null;
    }
  }
  templateNetworksFooter() {
    return b` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`;
  }
  onNetworkHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" });
    RouterController.push("WhatIsANetwork");
  }
  getWrapper() {
    var _a;
    return (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div.container");
  }
};
W3mFooter.styles = [styles$5];
__decorate$5([
  r()
], W3mFooter.prototype, "status", void 0);
__decorate$5([
  r()
], W3mFooter.prototype, "view", void 0);
W3mFooter = __decorate$5([
  customElement("w3m-footer")
], W3mFooter);
const styles$4 = css`
  :host {
    display: block;
    width: inherit;
  }
`;
var __decorate$4 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mRouter = class W3mRouter2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.viewState = RouterController.state.view;
    this.history = RouterController.state.history.join(",");
    this.unsubscribe.push(RouterController.subscribeKey("view", () => {
      this.history = RouterController.state.history.join(",");
      document.documentElement.style.setProperty("--apkt-duration-dynamic", "var(--apkt-durations-lg)");
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    document.documentElement.style.setProperty("--apkt-duration-dynamic", "0s");
  }
  render() {
    return b`${this.templatePageContainer()}`;
  }
  templatePageContainer() {
    return b`<w3m-router-container
      history=${this.history}
      .setView=${() => {
      this.viewState = RouterController.state.view;
    }}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`;
  }
  viewTemplate(view) {
    switch (view) {
      case "AccountSettings":
        return b`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "Account":
        return b`<w3m-account-view></w3m-account-view>`;
      case "AllWallets":
        return b`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "ApproveTransaction":
        return b`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "BuyInProgress":
        return b`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "ChooseAccountName":
        return b`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
      case "Connect":
        return b`<w3m-connect-view></w3m-connect-view>`;
      case "Create":
        return b`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return b`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingWalletConnectBasic":
        return b`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
      case "ConnectingExternal":
        return b`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return b`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "ConnectWallets":
        return b`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
      case "ConnectSocials":
        return b`<w3m-connect-socials-view></w3m-connect-socials-view>`;
      case "ConnectingSocial":
        return b`<w3m-connecting-social-view></w3m-connecting-social-view>`;
      case "DataCapture":
        return b`<w3m-data-capture-view></w3m-data-capture-view>`;
      case "DataCaptureOtpConfirm":
        return b`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;
      case "Downloads":
        return b`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailLogin":
        return b`<w3m-email-login-view></w3m-email-login-view>`;
      case "EmailVerifyOtp":
        return b`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return b`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "GetWallet":
        return b`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Networks":
        return b`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return b`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "ProfileWallets":
        return b`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;
      case "Transactions":
        return b`<w3m-transactions-view></w3m-transactions-view>`;
      case "OnRampProviders":
        return b`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampTokenSelect":
        return b`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return b`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "UpgradeEmailWallet":
        return b`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpdateEmailWallet":
        return b`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return b`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return b`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return b`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "Swap":
        return b`<w3m-swap-view></w3m-swap-view>`;
      case "SwapSelectToken":
        return b`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
      case "SwapPreview":
        return b`<w3m-swap-preview-view></w3m-swap-preview-view>`;
      case "WalletSend":
        return b`<w3m-wallet-send-view></w3m-wallet-send-view>`;
      case "WalletSendSelectToken":
        return b`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
      case "WalletSendPreview":
        return b`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
      case "WalletSendConfirmed":
        return b`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;
      case "WhatIsABuy":
        return b`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "WalletReceive":
        return b`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return b`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      case "WhatIsAWallet":
        return b`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "ConnectingMultiChain":
        return b`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
      case "WhatIsANetwork":
        return b`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "ConnectingFarcaster":
        return b`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
      case "SwitchActiveChain":
        return b`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
      case "RegisterAccountName":
        return b`<w3m-register-account-name-view></w3m-register-account-name-view>`;
      case "RegisterAccountNameSuccess":
        return b`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
      case "SmartSessionCreated":
        return b`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
      case "SmartSessionList":
        return b`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
      case "SIWXSignMessage":
        return b`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
      case "Pay":
        return b`<w3m-pay-view></w3m-pay-view>`;
      case "PayLoading":
        return b`<w3m-pay-loading-view></w3m-pay-loading-view>`;
      case "PayQuote":
        return b`<w3m-pay-quote-view></w3m-pay-quote-view>`;
      case "FundWallet":
        return b`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;
      case "PayWithExchange":
        return b`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;
      case "PayWithExchangeSelectAsset":
        return b`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;
      case "UsageExceeded":
        return b`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;
      case "SmartAccountSettings":
        return b`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;
      default:
        return b`<w3m-connect-view></w3m-connect-view>`;
    }
  }
};
W3mRouter.styles = [styles$4];
__decorate$4([
  r()
], W3mRouter.prototype, "viewState", void 0);
__decorate$4([
  r()
], W3mRouter.prototype, "history", void 0);
W3mRouter = __decorate$4([
  customElement("w3m-router")
], W3mRouter);
const styles$3 = css`
  :host {
    z-index: ${({ tokens }) => tokens.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({ tokens }) => tokens.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      backdrop-filter ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      border-radius ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]},
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]},
      box-shadow ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    transition-delay: ${({ durations }) => durations["md"]};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({ tokens }) => tokens.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      w3m-shake ${({ durations }) => durations["xl"]}
        ${({ easings }) => easings["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({ easings }) => easings["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    }
    to {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
    to {
      background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    }
  }
`;
var __decorate$3 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const SCROLL_LOCK = "scroll-lock";
const PADDING_OVERRIDES = {
  PayWithExchange: "0",
  PayWithExchangeSelectAsset: "0",
  Pay: "0",
  PayQuote: "0",
  PayLoading: "0"
};
class W3mModalBase extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.abortController = void 0;
    this.hasPrefetched = false;
    this.enableEmbedded = OptionsController.state.enableEmbedded;
    this.open = ModalController.state.open;
    this.caipAddress = ChainController.state.activeCaipAddress;
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    this.shake = ModalController.state.shake;
    this.filterByNamespace = ConnectorController.state.filterByNamespace;
    this.padding = vars.spacing[1];
    this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
    this.initializeTheming();
    ApiController.prefetchAnalyticsConfig();
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (val) => val ? this.onOpen() : this.onClose()),
      ModalController.subscribeKey("shake", (val) => this.shake = val),
      ChainController.subscribeKey("activeCaipNetwork", (val) => this.onNewNetwork(val)),
      ChainController.subscribeKey("activeCaipAddress", (val) => this.onNewAddress(val)),
      OptionsController.subscribeKey("enableEmbedded", (val) => this.enableEmbedded = val),
      ConnectorController.subscribeKey("filterByNamespace", (val) => {
        var _a;
        if (this.filterByNamespace !== val && !((_a = ChainController.getAccountData(val)) == null ? void 0 : _a.caipAddress)) {
          ApiController.fetchRecommendedWallets();
          this.filterByNamespace = val;
        }
      }),
      RouterController.subscribeKey("view", () => {
        this.dataset["border"] = HelpersUtil.hasFooter() ? "true" : "false";
        this.padding = PADDING_OVERRIDES[RouterController.state.view] ?? vars.spacing[1];
      })
    ]);
  }
  firstUpdated() {
    this.dataset["border"] = HelpersUtil.hasFooter() ? "true" : "false";
    if (this.mobileFullScreen) {
      this.setAttribute("data-mobile-fullscreen", "true");
    }
    if (this.caipAddress) {
      if (this.enableEmbedded) {
        ModalController.close();
        this.prefetch();
        return;
      }
      this.onNewAddress(this.caipAddress);
    }
    if (this.open) {
      this.onOpen();
    }
    if (this.enableEmbedded) {
      this.prefetch();
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    this.onRemoveKeyboardListener();
  }
  render() {
    this.style.setProperty("--local-modal-padding", this.padding);
    if (this.enableEmbedded) {
      return b`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;
    }
    return this.open ? b`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        ` : null;
  }
  contentTemplate() {
    return b` <wui-card
      shake="${this.shake}"
      data-embedded="${o(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
  }
  async onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      if (this.mobileFullScreen) {
        return;
      }
      await this.handleClose();
    }
  }
  async handleClose() {
    await ModalUtil.safeClose();
  }
  initializeTheming() {
    const { themeVariables, themeMode } = ThemeController.state;
    const defaultThemeMode = UiHelperUtil.getColorTheme(themeMode);
    initializeTheming(themeVariables, defaultThemeMode);
  }
  onClose() {
    this.open = false;
    this.classList.remove("open");
    this.onScrollUnlock();
    SnackController.hide();
    this.onRemoveKeyboardListener();
  }
  onOpen() {
    this.open = true;
    this.classList.add("open");
    this.onScrollLock();
    this.onAddKeyboardListener();
  }
  onScrollLock() {
    const styleTag = document.createElement("style");
    styleTag.dataset["w3m"] = SCROLL_LOCK;
    styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
    document.head.appendChild(styleTag);
  }
  onScrollUnlock() {
    const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
    if (styleTag) {
      styleTag.remove();
    }
  }
  onAddKeyboardListener() {
    var _a;
    this.abortController = new AbortController();
    const card = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-card");
    card == null ? void 0 : card.focus();
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.handleClose();
      } else if (event.key === "Tab") {
        const { tagName } = event.target;
        if (tagName && !tagName.includes("W3M-") && !tagName.includes("WUI-")) {
          card == null ? void 0 : card.focus();
        }
      }
    }, this.abortController);
  }
  onRemoveKeyboardListener() {
    var _a;
    (_a = this.abortController) == null ? void 0 : _a.abort();
    this.abortController = void 0;
  }
  async onNewAddress(caipAddress) {
    const isSwitchingNamespace = ChainController.state.isSwitchingNamespace;
    const isInProfileView = RouterController.state.view === "ProfileWallets";
    const shouldClose = !caipAddress && !isSwitchingNamespace && !isInProfileView;
    if (shouldClose) {
      ModalController.close();
    }
    await SIWXUtil.initializeIfEnabled(caipAddress);
    this.caipAddress = caipAddress;
    ChainController.setIsSwitchingNamespace(false);
  }
  onNewNetwork(nextCaipNetwork) {
    var _a, _b;
    const prevCaipNetwork = this.caipNetwork;
    const prevCaipNetworkId = (_a = prevCaipNetwork == null ? void 0 : prevCaipNetwork.caipNetworkId) == null ? void 0 : _a.toString();
    const nextNetworkId = (_b = nextCaipNetwork == null ? void 0 : nextCaipNetwork.caipNetworkId) == null ? void 0 : _b.toString();
    const didNetworkChange = prevCaipNetworkId !== nextNetworkId;
    const isUnsupportedNetworkScreen = RouterController.state.view === "UnsupportedChain";
    const isModalOpen = ModalController.state.open;
    let shouldGoBack = false;
    if (this.enableEmbedded && RouterController.state.view === "SwitchNetwork") {
      shouldGoBack = true;
    }
    if (didNetworkChange) {
      SwapController.resetState();
    }
    if (isModalOpen && isUnsupportedNetworkScreen) {
      shouldGoBack = true;
    }
    if (shouldGoBack && RouterController.state.view !== "SIWXSignMessage") {
      RouterController.goBack();
    }
    this.caipNetwork = nextCaipNetwork;
  }
  prefetch() {
    if (!this.hasPrefetched) {
      ApiController.prefetch();
      ApiController.fetchWalletsByPage({ page: 1 });
      this.hasPrefetched = true;
    }
  }
}
W3mModalBase.styles = styles$3;
__decorate$3([
  n({ type: Boolean })
], W3mModalBase.prototype, "enableEmbedded", void 0);
__decorate$3([
  r()
], W3mModalBase.prototype, "open", void 0);
__decorate$3([
  r()
], W3mModalBase.prototype, "caipAddress", void 0);
__decorate$3([
  r()
], W3mModalBase.prototype, "caipNetwork", void 0);
__decorate$3([
  r()
], W3mModalBase.prototype, "shake", void 0);
__decorate$3([
  r()
], W3mModalBase.prototype, "filterByNamespace", void 0);
__decorate$3([
  r()
], W3mModalBase.prototype, "padding", void 0);
__decorate$3([
  r()
], W3mModalBase.prototype, "mobileFullScreen", void 0);
let W3mModal = class W3mModal2 extends W3mModalBase {
};
W3mModal = __decorate$3([
  customElement("w3m-modal")
], W3mModal);
let AppKitModal = class AppKitModal2 extends W3mModalBase {
};
AppKitModal = __decorate$3([
  customElement("appkit-modal")
], AppKitModal);
const styles$2 = css`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    background-color: ${({ colors }) => colors.semanticError010};
  }
`;
var __decorate$2 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mUsageExceededView = class W3mUsageExceededView2 extends i {
  constructor() {
    super();
  }
  render() {
    return b`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1", "3", "4", "3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `;
  }
  onTryAgainClick() {
    RouterController.goBack();
  }
};
W3mUsageExceededView.styles = styles$2;
W3mUsageExceededView = __decorate$2([
  customElement("w3m-usage-exceeded-view")
], W3mUsageExceededView);
const styles$1 = css`
  :host {
    width: 100%;
  }
`;
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mListWallet = class W3mListWallet2 extends i {
  constructor() {
    super(...arguments);
    this.hasImpressionSent = false;
    this.walletImages = [];
    this.imageSrc = "";
    this.name = "";
    this.size = "md";
    this.tabIdx = void 0;
    this.disabled = false;
    this.showAllWallets = false;
    this.loading = false;
    this.loadingSpinnerColor = "accent-100";
    this.rdnsId = "";
    this.displayIndex = void 0;
    this.walletRank = void 0;
    this.namespaces = [];
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupIntersectionObserver();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("name") || changedProperties.has("imageSrc") || changedProperties.has("walletRank")) {
      this.hasImpressionSent = false;
    }
    const hasWalletRankChanged = changedProperties.has("walletRank") && this.walletRank;
    if (hasWalletRankChanged && !this.intersectionObserver) {
      this.setupIntersectionObserver();
    }
  }
  setupIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.loading && !this.hasImpressionSent) {
          this.sendImpressionEvent();
        }
      });
    }, { threshold: 0.1 });
    this.intersectionObserver.observe(this);
  }
  cleanupIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = void 0;
    }
  }
  sendImpressionEvent() {
    if (!this.name || this.hasImpressionSent || !this.walletRank) {
      return;
    }
    this.hasImpressionSent = true;
    if (this.rdnsId || this.name) {
      EventsController.sendWalletImpressionEvent({
        name: this.name,
        walletRank: this.walletRank,
        rdnsId: this.rdnsId,
        view: RouterController.state.view,
        displayIndex: this.displayIndex
      });
    }
  }
  handleGetWalletNamespaces() {
    const isMultiChain = Object.keys(AdapterController.state.adapters).length > 1;
    if (isMultiChain) {
      return this.namespaces;
    }
    return [];
  }
  render() {
    return b`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${o(this.imageSrc)}
        name=${this.name}
        size=${o(this.size)}
        tagLabel=${o(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `;
  }
};
W3mListWallet.styles = styles$1;
__decorate$1([
  n({ type: Array })
], W3mListWallet.prototype, "walletImages", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "imageSrc", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "name", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "size", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "tagLabel", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "tagVariant", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "walletIcon", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "tabIdx", void 0);
__decorate$1([
  n({ type: Boolean })
], W3mListWallet.prototype, "disabled", void 0);
__decorate$1([
  n({ type: Boolean })
], W3mListWallet.prototype, "showAllWallets", void 0);
__decorate$1([
  n({ type: Boolean })
], W3mListWallet.prototype, "loading", void 0);
__decorate$1([
  n({ type: String })
], W3mListWallet.prototype, "loadingSpinnerColor", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "rdnsId", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "displayIndex", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "walletRank", void 0);
__decorate$1([
  n({ type: Array })
], W3mListWallet.prototype, "namespaces", void 0);
W3mListWallet = __decorate$1([
  customElement("w3m-list-wallet")
], W3mListWallet);
const styles = css`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({ durations }) => durations["lg"]};
    --local-transition: ${({ easings }) => easings["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations }) => durations["lg"]});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations }) => durations["lg"]});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const HEADER_HEIGHT = 60;
let W3mRouterContainer = class W3mRouterContainer2 extends i {
  constructor() {
    super(...arguments);
    this.resizeObserver = void 0;
    this.transitionDuration = "0.15s";
    this.transitionFunction = "";
    this.history = "";
    this.view = "";
    this.setView = void 0;
    this.viewDirection = "";
    this.historyState = "";
    this.previousHeight = "0px";
    this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
    this.onViewportResize = () => {
      this.updateContainerHeight();
    };
  }
  updated(changedProps) {
    if (changedProps.has("history")) {
      const newHistory = this.history;
      if (this.historyState !== "" && this.historyState !== newHistory) {
        this.onViewChange(newHistory);
      }
    }
    if (changedProps.has("transitionDuration")) {
      this.style.setProperty("--local-duration", this.transitionDuration);
    }
    if (changedProps.has("transitionFunction")) {
      this.style.setProperty("--local-transition", this.transitionFunction);
    }
  }
  firstUpdated() {
    var _a;
    if (this.transitionFunction) {
      this.style.setProperty("--local-transition", this.transitionFunction);
    }
    this.style.setProperty("--local-duration", this.transitionDuration);
    this.historyState = this.history;
    this.resizeObserver = new ResizeObserver((entries) => {
      var _a2;
      for (const entry of entries) {
        if (entry.target === this.getWrapper()) {
          let newHeight = entry.contentRect.height;
          const footerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height") || "0");
          if (this.mobileFullScreen) {
            const viewportHeight = ((_a2 = window.visualViewport) == null ? void 0 : _a2.height) || window.innerHeight;
            const headerHeight = this.getHeaderHeight();
            newHeight = viewportHeight - headerHeight - footerHeight;
            this.style.setProperty("--local-border-bottom-radius", "0px");
          } else {
            const totalHeight = newHeight + footerHeight;
            newHeight = totalHeight;
            this.style.setProperty("--local-border-bottom-radius", footerHeight ? "var(--apkt-borderRadius-5)" : "0px");
          }
          this.style.setProperty("--local-container-height", `${newHeight}px`);
          if (this.previousHeight !== "0px") {
            this.style.setProperty("--local-duration-height", this.transitionDuration);
          }
          this.previousHeight = `${newHeight}px`;
        }
      }
    });
    this.resizeObserver.observe(this.getWrapper());
    this.updateContainerHeight();
    window.addEventListener("resize", this.onViewportResize);
    (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", this.onViewportResize);
  }
  disconnectedCallback() {
    var _a;
    const wrapper = this.getWrapper();
    if (wrapper && this.resizeObserver) {
      this.resizeObserver.unobserve(wrapper);
    }
    window.removeEventListener("resize", this.onViewportResize);
    (_a = window.visualViewport) == null ? void 0 : _a.removeEventListener("resize", this.onViewportResize);
  }
  render() {
    return b`
      <div class="container" data-mobile-fullscreen="${o(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${o(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
  onViewChange(history) {
    const historyArr = history.split(",").filter(Boolean);
    const prevArr = this.historyState.split(",").filter(Boolean);
    const prevLength = prevArr.length;
    const newLength = historyArr.length;
    const newView = historyArr[historyArr.length - 1] || "";
    const duration = UiHelperUtil.cssDurationToNumber(this.transitionDuration);
    let direction = "";
    if (newLength > prevLength) {
      direction = "next";
    } else if (newLength < prevLength) {
      direction = "prev";
    } else if (newLength === prevLength && historyArr[newLength - 1] !== prevArr[prevLength - 1]) {
      direction = "next";
    }
    this.viewDirection = `${direction}-${newView}`;
    setTimeout(() => {
      var _a;
      this.historyState = history;
      (_a = this.setView) == null ? void 0 : _a.call(this, newView);
    }, duration);
    setTimeout(() => {
      this.viewDirection = "";
    }, duration * 2);
  }
  getWrapper() {
    var _a;
    return (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div.page");
  }
  updateContainerHeight() {
    var _a;
    const wrapper = this.getWrapper();
    if (!wrapper) {
      return;
    }
    const footerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height") || "0");
    let newHeight = 0;
    if (this.mobileFullScreen) {
      const viewportHeight = ((_a = window.visualViewport) == null ? void 0 : _a.height) || window.innerHeight;
      const headerHeight = this.getHeaderHeight();
      newHeight = viewportHeight - headerHeight - footerHeight;
      this.style.setProperty("--local-border-bottom-radius", "0px");
    } else {
      newHeight = wrapper.getBoundingClientRect().height + footerHeight;
      this.style.setProperty("--local-border-bottom-radius", footerHeight ? "var(--apkt-borderRadius-5)" : "0px");
    }
    this.style.setProperty("--local-container-height", `${newHeight}px`);
    if (this.previousHeight !== "0px") {
      this.style.setProperty("--local-duration-height", this.transitionDuration);
    }
    this.previousHeight = `${newHeight}px`;
  }
  getHeaderHeight() {
    return HEADER_HEIGHT;
  }
};
W3mRouterContainer.styles = [styles];
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "transitionDuration", void 0);
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "transitionFunction", void 0);
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "history", void 0);
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "view", void 0);
__decorate([
  n({ attribute: false })
], W3mRouterContainer.prototype, "setView", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "viewDirection", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "historyState", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "previousHeight", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "mobileFullScreen", void 0);
W3mRouterContainer = __decorate([
  customElement("w3m-router-container")
], W3mRouterContainer);
export {
  AppKitModal,
  W3mListWallet,
  W3mModal,
  W3mModalBase,
  W3mRouterContainer,
  W3mUsageExceededView
};
