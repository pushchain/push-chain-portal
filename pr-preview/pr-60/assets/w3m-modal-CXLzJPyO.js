const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-rF4UFtN5.js","assets/main-DydtRt0H.js","assets/main-BOzf5NW-.css","assets/parseSignature-CEW9rnVz.js","assets/ccip-BDmDm1zH.js"])))=>i.map(i=>d[i]);
import{dg as ce,dh as we,di as se,dj as mn,dl as X,dm as l,er as xt,eq as Ve,dG as jt,bX as Po,ed as Xo,bJ as Zt,es as Zo,dD as Ro,dn as Tn}from"./main-DydtRt0H.js";import{n as b,r as v,a as Uo}from"./class-map-C3eRGC1L.js";import{o as Q}from"./if-defined-BV2jFcU6.js";import{t as ue,w as $o,R as U,l as me,e as rn,a as et,E as ht,u as cn,x as ln,C as oe,B as Dt,d as _n,y as Lt,z as dn,D as es,p as Fn,F as ts,c as fn,M as Fe,G as Do,f as te,r as Ge,k as vn,v as Vt,j as xn,h as ns,O as fe,A as en,T as os,I as ss,J as as}from"./core-D5hxVW7-.js";import{c as J,n as rs,U as In}from"./index-CUBucSkh.js";const ct={getGasPriceInEther(e,t){const n=t*e;return Number(n)/1e18},getGasPriceInUSD(e,t,n){const o=ct.getGasPriceInEther(t,n);return ue.bigNumber(e).times(o).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:n,toTokenAmount:o}){const s=ue.bigNumber(e).times(t),a=ue.bigNumber(o).times(n);return s.minus(a).div(s).times(100).toNumber()},getMaxSlippage(e,t){const n=ue.bigNumber(e).div(100);return ue.multiply(t,n).toNumber()},getProviderFee(e,t=.0085){return ue.bigNumber(e).times(t).toString()},isInsufficientNetworkTokenForGas(e,t){const n=t||"0";return ue.bigNumber(e).eq(0)?!0:ue.bigNumber(ue.bigNumber(n)).gt(e)},isInsufficientSourceTokenForSwap(e,t,n){var a,r;const o=(r=(a=n==null?void 0:n.find(i=>i.address===t))==null?void 0:a.quantity)==null?void 0:r.numeric;return ue.bigNumber(o||"0").lt(e)}},lo=15e4,is=6,ye={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Fn.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},u=se({...ye}),un={state:u,subscribe(e){return we(u,()=>e(u))},subscribeKey(e,t){return ce(u,e,t)},getParams(){var c,h,m,g,W,j,M,F,ae;const e=oe.state.activeChain,t=((c=oe.getAccountData(e))==null?void 0:c.caipAddress)??oe.state.activeCaipAddress,n=_n.getPlainAddress(t),o=ts(),s=fn.getConnectorId(oe.state.activeChain);if(!n)throw new Error("No address found to swap the tokens from.");const a=!((h=u.toToken)!=null&&h.address)||!((m=u.toToken)!=null&&m.decimals),r=!((g=u.sourceToken)!=null&&g.address)||!((W=u.sourceToken)!=null&&W.decimals)||!ue.bigNumber(u.sourceTokenAmount).gt(0),i=!u.sourceTokenAmount;return{networkAddress:o,fromAddress:n,fromCaipAddress:t,sourceTokenAddress:(j=u.sourceToken)==null?void 0:j.address,toTokenAddress:(M=u.toToken)==null?void 0:M.address,toTokenAmount:u.toTokenAmount,toTokenDecimals:(F=u.toToken)==null?void 0:F.decimals,sourceTokenAmount:u.sourceTokenAmount,sourceTokenDecimals:(ae=u.sourceToken)==null?void 0:ae.decimals,invalidToToken:a,invalidSourceToken:r,invalidSourceTokenAmount:i,availableToSwap:t&&!a&&!r&&!i,isAuthConnector:s===et.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){u.sourceToken=e,u.sourceTokenAmount="",u.sourceTokenPriceInUSD=0;return}u.sourceToken=e,await P.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){u.sourceTokenAmount=e},async setToToken(e){if(!e){u.toToken=e,u.toTokenAmount="",u.toTokenPriceInUSD=0;return}u.toToken=e,await P.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){u.toTokenAmount=e?ue.toFixed(e,is):""},async setTokenPrice(e,t){let n=u.tokensPriceMap[e]||0;n||(u.loadingPrices=!0,n=await P.getAddressPrice(e)),t==="sourceToken"?u.sourceTokenPriceInUSD=n:t==="toToken"&&(u.toTokenPriceInUSD=n),u.loadingPrices&&(u.loadingPrices=!1),P.getParams().availableToSwap&&!u.switchingTokens&&P.swapTokens()},async switchTokens(){if(!(u.initializing||!u.initialized||u.switchingTokens)){u.switchingTokens=!0;try{const e=u.toToken?{...u.toToken}:void 0,t=u.sourceToken?{...u.sourceToken}:void 0,n=e&&u.toTokenAmount===""?"1":u.toTokenAmount;P.setSourceTokenAmount(n),P.setToTokenAmount(""),await P.setSourceToken(e),await P.setToToken(t),u.switchingTokens=!1,P.swapTokens()}catch(e){throw u.switchingTokens=!1,e}}},resetState(){u.myTokensWithBalance=ye.myTokensWithBalance,u.tokensPriceMap=ye.tokensPriceMap,u.initialized=ye.initialized,u.initializing=ye.initializing,u.switchingTokens=ye.switchingTokens,u.sourceToken=ye.sourceToken,u.sourceTokenAmount=ye.sourceTokenAmount,u.sourceTokenPriceInUSD=ye.sourceTokenPriceInUSD,u.toToken=ye.toToken,u.toTokenAmount=ye.toTokenAmount,u.toTokenPriceInUSD=ye.toTokenPriceInUSD,u.networkPrice=ye.networkPrice,u.networkTokenSymbol=ye.networkTokenSymbol,u.networkBalanceInUSD=ye.networkBalanceInUSD,u.inputError=ye.inputError},resetValues(){var n;const{networkAddress:e}=P.getParams(),t=(n=u.tokens)==null?void 0:n.find(o=>o.address===e);P.setSourceToken(t),P.setToToken(void 0)},getApprovalLoadingState(){return u.loadingApprovalTransaction},clearError(){u.transactionError=void 0},async initializeState(){if(!u.initializing){if(u.initializing=!0,!u.initialized)try{await P.fetchTokens(),u.initialized=!0}catch{u.initialized=!1,me.showError("Failed to initialize swap"),U.goBack()}u.initializing=!1}},async fetchTokens(){var n;const{networkAddress:e}=P.getParams();await P.getNetworkTokenPrice(),await P.getMyTokensWithBalance();const t=(n=u.myTokensWithBalance)==null?void 0:n.find(o=>o.address===e);t&&(u.networkTokenSymbol=t.symbol,P.setSourceToken(t),P.setSourceTokenAmount("0"))},async getTokenList(){var t,n;const e=(t=oe.state.activeCaipNetwork)==null?void 0:t.caipNetworkId;if(!(u.caipNetworkId===e&&u.tokens))try{u.tokensLoading=!0;const o=await Lt.getTokenList(e);u.tokens=o,u.caipNetworkId=e,u.popularTokens=o.sort((c,h)=>c.symbol<h.symbol?-1:c.symbol>h.symbol?1:0);const a=(e&&((n=Fn.SUGGESTED_TOKENS_BY_CHAIN)==null?void 0:n[e])||[]).map(c=>o.find(h=>h.symbol===c)).filter(c=>!!c),i=(Fn.SWAP_SUGGESTED_TOKENS||[]).map(c=>o.find(h=>h.symbol===c)).filter(c=>!!c).filter(c=>!a.some(h=>h.address===c.address));u.suggestedTokens=[...a,...i]}catch{u.tokens=[],u.popularTokens=[],u.suggestedTokens=[]}finally{u.tokensLoading=!1}},async getAddressPrice(e){var c,h;const t=u.tokensPriceMap[e];if(t)return t;const n=await Dt.fetchTokenPrice({addresses:[e]}),o=(n==null?void 0:n.fungibles)||[],s=[...u.tokens||[],...u.myTokensWithBalance||[]],a=(c=s==null?void 0:s.find(m=>m.address===e))==null?void 0:c.symbol,r=((h=o.find(m=>m.symbol.toLowerCase()===(a==null?void 0:a.toLowerCase())))==null?void 0:h.price)||0,i=parseFloat(r.toString());return u.tokensPriceMap[e]=i,i},async getNetworkTokenPrice(){var s;const{networkAddress:e}=P.getParams(),n=(s=(await Dt.fetchTokenPrice({addresses:[e]}).catch(()=>(me.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles)==null?void 0:s[0],o=(n==null?void 0:n.price.toString())||"0";u.tokensPriceMap[e]=parseFloat(o),u.networkTokenSymbol=(n==null?void 0:n.symbol)||"",u.networkPrice=o},async getMyTokensWithBalance(e){var o;const t=await es.getMyTokensWithBalance({forceUpdate:e,caipNetwork:oe.state.activeCaipNetwork,address:(o=oe.getAccountData())==null?void 0:o.address}),n=Lt.mapBalancesToSwapTokens(t);n&&(await P.getInitialGasPrice(),P.setBalances(n))},setBalances(e){const{networkAddress:t}=P.getParams(),n=oe.state.activeCaipNetwork;if(!n)return;const o=e.find(s=>s.address===t);e.forEach(s=>{u.tokensPriceMap[s.address]=s.price||0}),u.myTokensWithBalance=e.filter(s=>s.address.startsWith(n.caipNetworkId)),u.networkBalanceInUSD=o?ue.multiply(o.quantity.numeric,o.price).toString():"0"},async getInitialGasPrice(){var t,n;const e=await Lt.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch((n=(t=oe.state)==null?void 0:t.activeCaipNetwork)==null?void 0:n.chainNamespace){case et.CHAIN.SOLANA:return u.gasFee=e.standard??"0",u.gasPriceInUSD=ue.multiply(e.standard,u.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(u.gasFee),gasPriceInUSD:Number(u.gasPriceInUSD)};case et.CHAIN.EVM:default:const o=e.standard??"0",s=BigInt(o),a=BigInt(lo),r=ct.getGasPriceInUSD(u.networkPrice,a,s);return u.gasFee=o,u.gasPriceInUSD=r,{gasPrice:s,gasPriceInUSD:r}}},async swapTokens(){var a,r,i;const e=(a=oe.getAccountData())==null?void 0:a.address,t=u.sourceToken,n=u.toToken,o=ue.bigNumber(u.sourceTokenAmount).gt(0);if(o||P.setToTokenAmount(""),!n||!t||u.loadingPrices||!o||!e)return;u.loadingQuote=!0;const s=ue.bigNumber(u.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{const c=await Dt.fetchSwapQuote({userAddress:e,from:t.address,to:n.address,gasPrice:u.gasFee,amount:s.toString()});u.loadingQuote=!1;const h=(i=(r=c==null?void 0:c.quotes)==null?void 0:r[0])==null?void 0:i.toAmount;if(!h){dn.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");return}const m=ue.bigNumber(h).div(10**n.decimals).toString();P.setToTokenAmount(m),P.hasInsufficientToken(u.sourceTokenAmount,t.address)?u.inputError="Insufficient balance":(u.inputError=void 0,P.setTransactionDetails())}catch(c){const h=await Lt.handleSwapError(c);u.loadingQuote=!1,u.inputError=h||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=P.getParams(),n=u.sourceToken,o=u.toToken;if(!(!e||!t||!n||!o||u.loadingQuote))try{u.loadingBuildTransaction=!0;const s=await Lt.fetchSwapAllowance({userAddress:e,tokenAddress:n.address,sourceTokenAmount:u.sourceTokenAmount,sourceTokenDecimals:n.decimals});let a;return s?a=await P.createSwapTransaction():a=await P.createAllowanceTransaction(),u.loadingBuildTransaction=!1,u.fetchError=!1,a}catch{U.goBack(),me.showError("Failed to check allowance"),u.loadingBuildTransaction=!1,u.approvalTransaction=void 0,u.swapTransaction=void 0,u.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:n}=P.getParams();if(!(!e||!n)){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await Dt.generateApproveCalldata({from:t,to:n,userAddress:e}),s=_n.getPlainAddress(o.tx.from);if(!s)throw new Error("SwapController:createAllowanceTransaction - address is required");const a={data:o.tx.data,to:s,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:u.toTokenAmount};return u.swapTransaction=void 0,u.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch{U.goBack(),me.showError("Failed to create approval transaction"),u.approvalTransaction=void 0,u.swapTransaction=void 0,u.fetchError=!0;return}}},async createSwapTransaction(){var r;const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:n}=P.getParams(),o=u.sourceToken,s=u.toToken;if(!t||!n||!o||!s)return;const a=(r=rn.parseUnits(n,o.decimals))==null?void 0:r.toString();try{const i=await Dt.generateSwapCalldata({userAddress:t,from:o.address,to:s.address,amount:a,disableEstimate:!0}),c=o.address===e,h=BigInt(i.tx.eip155.gas),m=BigInt(i.tx.eip155.gasPrice),g=_n.getPlainAddress(i.tx.to);if(!g)throw new Error("SwapController:createSwapTransaction - address is required");const W={data:i.tx.data,to:g,gas:h,gasPrice:m,value:BigInt(c?a??"0":"0"),toAmount:u.toTokenAmount};return u.gasPriceInUSD=ct.getGasPriceInUSD(u.networkPrice,h,m),u.approvalTransaction=void 0,u.swapTransaction=W,W}catch{U.goBack(),me.showError("Failed to create transaction"),u.approvalTransaction=void 0,u.swapTransaction=void 0,u.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){me.showLoading("Approve limit increase in your wallet"),U.replace("SwapPreview")},async sendTransactionForApproval(e){var s,a,r;const{fromAddress:t,isAuthConnector:n}=P.getParams();u.loadingApprovalTransaction=!0,n?U.pushTransactionStack({onSuccess:P.onEmbeddedWalletApprovalSuccess}):me.showLoading("Approve limit increase in your wallet");try{await rn.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:et.CHAIN.EVM}),await P.swapTokens(),await P.getTransaction(),u.approvalTransaction=void 0,u.loadingApprovalTransaction=!1}catch(i){const c=i;u.transactionError=c==null?void 0:c.displayMessage,u.loadingApprovalTransaction=!1,me.showError((c==null?void 0:c.displayMessage)||"Transaction error"),ht.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:(c==null?void 0:c.displayMessage)||(c==null?void 0:c.message)||"Unknown",network:((s=oe.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||"",swapFromToken:((a=P.state.sourceToken)==null?void 0:a.symbol)||"",swapToToken:((r=P.state.toToken)==null?void 0:r.symbol)||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:cn(et.CHAIN.EVM)===ln.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){var r,i,c,h,m,g,W,j,M,F,ae,Xe;if(!e)return;const{fromAddress:t,toTokenAmount:n,isAuthConnector:o}=P.getParams();u.loadingTransaction=!0;const s=`Swapping ${(r=u.sourceToken)==null?void 0:r.symbol} to ${ue.formatNumberToLocalString(n,3)} ${(i=u.toToken)==null?void 0:i.symbol}`,a=`Swapped ${(c=u.sourceToken)==null?void 0:c.symbol} to ${ue.formatNumberToLocalString(n,3)} ${(h=u.toToken)==null?void 0:h.symbol}`;o?U.pushTransactionStack({onSuccess(){U.replace("Account"),me.showLoading(s),un.resetState()}}):me.showLoading("Confirm transaction in your wallet");try{const Ee=[(m=u.sourceToken)==null?void 0:m.address,(g=u.toToken)==null?void 0:g.address].join(","),Te=await rn.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:et.CHAIN.EVM});return u.loadingTransaction=!1,me.showSuccess(a),ht.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:((W=oe.state.activeCaipNetwork)==null?void 0:W.caipNetworkId)||"",swapFromToken:((j=P.state.sourceToken)==null?void 0:j.symbol)||"",swapToToken:((M=P.state.toToken)==null?void 0:M.symbol)||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:cn(et.CHAIN.EVM)===ln.ACCOUNT_TYPES.SMART_ACCOUNT}}),un.resetState(),o||U.replace("Account"),un.getMyTokensWithBalance(Ee),Te}catch(Ee){const Te=Ee;u.transactionError=Te==null?void 0:Te.displayMessage,u.loadingTransaction=!1,me.showError((Te==null?void 0:Te.displayMessage)||"Transaction error"),ht.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:(Te==null?void 0:Te.displayMessage)||(Te==null?void 0:Te.message)||"Unknown",network:((F=oe.state.activeCaipNetwork)==null?void 0:F.caipNetworkId)||"",swapFromToken:((ae=P.state.sourceToken)==null?void 0:ae.symbol)||"",swapToToken:((Xe=P.state.toToken)==null?void 0:Xe.symbol)||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:cn(et.CHAIN.EVM)===ln.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){return ct.isInsufficientSourceTokenForSwap(e,t,u.myTokensWithBalance)},setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=P.getParams();!e||!t||(u.gasPriceInUSD=ct.getGasPriceInUSD(u.networkPrice,BigInt(u.gasFee),BigInt(lo)),u.priceImpact=ct.getPriceImpact({sourceTokenAmount:u.sourceTokenAmount,sourceTokenPriceInUSD:u.sourceTokenPriceInUSD,toTokenPriceInUSD:u.toTokenPriceInUSD,toTokenAmount:u.toTokenAmount}),u.maxSlippage=ct.getMaxSlippage(u.slippage,u.toTokenAmount),u.providerFee=ct.getProviderFee(u.sourceTokenAmount))}},P=$o(un),Be=se({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),cs={state:Be,subscribe(e){return we(Be,()=>e(Be))},subscribeKey(e,t){return ce(Be,e,t)},showTooltip({message:e,triggerRect:t,variant:n}){Be.open=!0,Be.message=e,Be.triggerRect=t,Be.variant=n},hide(){Be.open=!1,Be.message="",Be.triggerRect={width:0,height:0,top:0,left:0}}},Ue=$o(cs),Lo={isUnsupportedChainView(){return U.state.view==="UnsupportedChain"||U.state.view==="SwitchNetwork"&&U.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){Fe.shake();return}if(await Do.isSIWXCloseDisabled()){Fe.shake();return}(U.state.view==="DataCapture"||U.state.view==="DataCaptureOtpConfirm")&&rn.disconnect(),Fe.close()}},uo={interpolate(e,t,n){if(e.length!==2||t.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const o=e[0]||0,s=e[1]||0,a=t[0]||0,r=t[1]||0;return n<o?a:n>s?r:(r-a)/(s-o)*(n-o)+a}};var po={};const Ft={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",BASE_ACCOUNT:"baseAccount",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122",TON:"ton"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos",sui:"Sui",stacks:"Stacks",ton:"TON"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",TON:"ton"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],SOLANA_SPL_TOKEN_ADDRESSES:{SOL:"So11111111111111111111111111111111111111112"},NATIVE_IMAGE_IDS_BY_NAMESPACE:{eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"3e8119e5-2a6f-4818-c50c-1937011d5900",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},TOKEN_SYMBOLS_BY_ADDRESS:{"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48":"USDC","0x833589fcd6edb6e08f4c7c32d4f71b54bda02913":"USDC","0x0b2c639c533813f4aa9d7837caf62653d097ff85":"USDC","0xaf88d065e77c8cc2239327c5edb3a432268e5831":"USDC","0x3c499c542cef5e3811e1192ce70d8cc03d5c3359":"USDC","0x2791bca1f2de4661ed88a30c99a7a9449aa84174":"USDC",EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:"USDC","0xdac17f958d2ee523a2206206994597c13d831ec7":"USDT","0x94b008aa00579c1307b0ef2c499ad98a8ce58e58":"USDT","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9":"USDT","0xc2132d05d31c914a87c6611c10748aeb04b58e8f":"USDT",Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:"USDT"},HTTP_STATUS_CODES:{SERVER_ERROR:500,TOO_MANY_REQUESTS:429,SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(typeof mn<"u"&&typeof po<"u"?po.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",REMOTE_FEATURES_ALERTS:{MULTI_WALLET_NOT_ENABLED:{DEFAULT:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."},CONNECTIONS_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."},CONNECTION_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."}},HEADLESS_NOT_ENABLED:{DEFAULT:{displayMessage:"",debugMessage:"Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."}}},IS_DEVELOPMENT:typeof mn<"u"&&!1,DEFAULT_ALLOWED_ANCESTORS:["http://localhost:*","https://localhost:*","http://127.0.0.1:*","https://127.0.0.1:*","https://*.pages.dev","https://*.vercel.app","https://*.ngrok-free.app","https://secure-mobile.walletconnect.com","https://secure-mobile.walletconnect.org"],METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH"},k={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",RECENT_WALLET:"@appkit/recent_wallet",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections",DISCONNECTED_CONNECTOR_IDS:"@appkit/disconnected_connector_ids",HISTORY_TRANSACTIONS_CACHE:"@appkit/history_transactions_cache",TOKEN_PRICE_CACHE:"@appkit/token_price_cache",RECENT_EMAILS:"@appkit/recent_emails",LATEST_APPKIT_VERSION:"@appkit/latest_version",TON_WALLETS_CACHE:"@appkit/ton_wallets_cache"};function On(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const N={setItem(e,t){tn()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(tn())return localStorage.getItem(e)||void 0},removeItem(e){tn()&&localStorage.removeItem(e)},clear(){tn()&&localStorage.clear()}};function tn(){return typeof window<"u"&&typeof localStorage<"u"}const ls=te`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var ds=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Hn=class extends X{render(){return l`<slot></slot>`}};Hn.styles=[Ge,ls];Hn=ds([J("wui-card")],Hn);const nt={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1,reownAuthentication:!1,headless:!1},DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa",ton:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal"},SIWX_DEFAULTS:{signOutOnDisconnect:!0}},H={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5,transactionsHistory:15e3,tokenPrice:15e3,latestAppKitVersion:6048e5,tonWallets:864e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){const e=H.getActiveNamespace(),t=H.getActiveCaipNetworkId(),n=t?t.split(":")[1]:void 0,o=n?isNaN(Number(n))?n:Number(n):void 0;return{namespace:e,caipNetworkId:t,chainId:o}},setWalletConnectDeepLink({name:e,href:t}){try{N.setItem(k.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=N.getItem(k.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{N.removeItem(k.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{N.setItem(k.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{N.setItem(k.ACTIVE_CAIP_NETWORK_ID,e),H.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return N.getItem(k.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{N.removeItem(k.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=On(e);N.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=H.getRecentWallets();t.find(o=>o.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),N.setItem(k.RECENT_WALLETS,JSON.stringify(t)),N.setItem(k.RECENT_WALLET,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=N.getItem(k.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},getRecentWallet(){try{const e=N.getItem(k.RECENT_WALLET);return e?JSON.parse(e):null}catch{console.info("Unable to get AppKit recent")}return null},deleteRecentWallet(){try{N.removeItem(k.RECENT_WALLET)}catch{console.info("Unable to delete AppKit recent")}},setConnectedConnectorId(e,t){try{const n=On(e);N.setItem(n,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return N.getItem(k.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=On(e);return N.getItem(t)}catch{console.info("Unable to get connected connector id in namespace",e)}},setConnectedSocialProvider(e){try{N.setItem(k.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return N.getItem(k.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{N.removeItem(k.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return N.getItem(k.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var n;const e=N.getItem(k.ACTIVE_CAIP_NETWORK_ID);return(n=e==null?void 0:e.split(":"))==null?void 0:n[1]},setConnectionStatus(e){try{N.setItem(k.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return N.getItem(k.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const e=N.getItem(k.CONNECTED_NAMESPACES);return e!=null&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));N.setItem(k.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=H.getConnectedNamespaces();t.includes(e)||(t.push(e),H.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=H.getConnectedNamespaces(),n=t.indexOf(e);n>-1&&(t.splice(n,1),H.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return N.getItem(k.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{N.setItem(k.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{N.removeItem(k.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=N.getItem(k.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=H.getBalanceCache();N.setItem(k.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const n=H.getBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.portfolio))return n.balance;H.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=H.getBalanceCache();t[e.caipAddress]=e,N.setItem(k.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=N.getItem(k.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=H.getBalanceCache();N.setItem(k.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const n=H.getNativeBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.nativeBalance))return n;console.info("Discarding cache for address",e),H.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=H.getNativeBalanceCache();t[e.caipAddress]=e,N.setItem(k.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=N.getItem(k.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const n=H.getEnsCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.ens))return n.ens;H.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=H.getEnsCache();t[e.address]=e,N.setItem(k.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=H.getEnsCache();N.setItem(k.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=N.getItem(k.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const n=H.getIdentityCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.identity))return n.identity;H.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=H.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},N.setItem(k.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=H.getIdentityCache();N.setItem(k.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},getTonWalletsCache(){try{const e=N.getItem(k.TON_WALLETS_CACHE),t=e?JSON.parse(e):void 0;if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tonWallets))return t;H.removeTonWalletsCache()}catch{console.info("Unable to get ton wallets cache")}},updateTonWalletsCache(e){try{const t=H.getTonWalletsCache()||{timestamp:0,wallets:[]};t.timestamp=new Date().getTime(),t.wallets=e,N.setItem(k.TON_WALLETS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ton wallets cache",e)}},removeTonWalletsCache(){try{N.removeItem(k.TON_WALLETS_CACHE)}catch{console.info("Unable to remove ton wallets cache")}},clearAddressCache(){try{N.removeItem(k.PORTFOLIO_CACHE),N.removeItem(k.NATIVE_BALANCE_CACHE),N.removeItem(k.ENS_CACHE),N.removeItem(k.IDENTITY_CACHE),N.removeItem(k.HISTORY_TRANSACTIONS_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{N.setItem(k.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=N.getItem(k.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{const n=H.getConnections(),o=n[t]??[],s=new Map;for(const r of o)s.set(r.connectorId,{...r});for(const r of e){const i=s.get(r.connectorId),c=r.connectorId===Ft.CONNECTOR_ID.AUTH;if(i&&!c){const h=new Set(i.accounts.map(g=>g.address.toLowerCase())),m=r.accounts.filter(g=>!h.has(g.address.toLowerCase()));i.accounts.push(...m)}else s.set(r.connectorId,{...r})}const a={...n,[t]:Array.from(s.values())};N.setItem(k.CONNECTIONS,JSON.stringify(a))}catch(n){console.error("Unable to sync connections to storage",n)}},getConnections(){try{const e=N.getItem(k.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}},deleteAddressFromConnection({connectorId:e,address:t,namespace:n}){try{const o=H.getConnections(),s=o[n]??[],a=new Map(s.map(i=>[i.connectorId,i])),r=a.get(e);r&&(r.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase()).length===0?a.delete(e):a.set(e,{...r,accounts:r.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase())})),N.setItem(k.CONNECTIONS,JSON.stringify({...o,[n]:Array.from(a.values())}))}catch{console.error(`Unable to remove address "${t}" from connector "${e}" in namespace "${n}"`)}},getDisconnectedConnectorIds(){try{const e=N.getItem(k.DISCONNECTED_CONNECTOR_IDS);return e?JSON.parse(e):{}}catch{console.info("Unable to get disconnected connector ids")}return{}},addDisconnectedConnectorId(e,t){try{const n=H.getDisconnectedConnectorIds(),o=n[t]??[];o.push(e),N.setItem(k.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`)}},removeDisconnectedConnectorId(e,t){try{const n=H.getDisconnectedConnectorIds();let o=n[t]??[];o=o.filter(s=>s.toLowerCase()!==e.toLowerCase()),N.setItem(k.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`)}},isConnectorDisconnected(e,t){try{return(H.getDisconnectedConnectorIds()[t]??[]).some(s=>s.toLowerCase()===e.toLowerCase())}catch{console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`)}return!1},getTransactionsCache(){try{const e=N.getItem(k.HISTORY_TRANSACTIONS_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get transactions cache")}return{}},getTransactionsCacheForAddress({address:e,chainId:t=""}){var n;try{const s=(n=H.getTransactionsCache()[e])==null?void 0:n[t];if(s&&!this.isCacheExpired(s.timestamp,this.cacheExpiry.transactionsHistory))return s.transactions;H.removeTransactionsCache({address:e,chainId:t})}catch{console.info("Unable to get transactions cache")}},updateTransactionsCache({address:e,chainId:t="",timestamp:n,transactions:o}){try{const s=H.getTransactionsCache();s[e]={...s[e],[t]:{timestamp:n,transactions:o}},N.setItem(k.HISTORY_TRANSACTIONS_CACHE,JSON.stringify(s))}catch{console.info("Unable to update transactions cache",{address:e,chainId:t,timestamp:n,transactions:o})}},removeTransactionsCache({address:e,chainId:t}){try{const n=H.getTransactionsCache(),o=(n==null?void 0:n[e])||{},{[t]:s,...a}=o;N.setItem(k.HISTORY_TRANSACTIONS_CACHE,JSON.stringify({...n,[e]:a}))}catch{console.info("Unable to remove transactions cache",{address:e,chainId:t})}},getTokenPriceCache(){try{const e=N.getItem(k.TOKEN_PRICE_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get token price cache")}return{}},getTokenPriceCacheForAddresses(e){try{const n=H.getTokenPriceCache()[e.join(",")];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.tokenPrice))return n.tokenPrice;H.removeTokenPriceCache(e)}catch{console.info("Unable to get token price cache for addresses",e)}},updateTokenPriceCache(e){try{const t=H.getTokenPriceCache();t[e.addresses.join(",")]={timestamp:e.timestamp,tokenPrice:e.tokenPrice},N.setItem(k.TOKEN_PRICE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update token price cache",e)}},removeTokenPriceCache(e){try{const t=H.getTokenPriceCache();N.setItem(k.TOKEN_PRICE_CACHE,JSON.stringify({...t,[e.join(",")]:void 0}))}catch{console.info("Unable to remove token price cache",e)}},getLatestAppKitVersion(){try{const e=this.getLatestAppKitVersionCache(),t=e==null?void 0:e.version;return t&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.latestAppKitVersion)?t:void 0}catch{console.info("Unable to get latest AppKit version")}},getLatestAppKitVersionCache(){try{const e=N.getItem(k.LATEST_APPKIT_VERSION);return e?JSON.parse(e):{}}catch{console.info("Unable to get latest AppKit version cache")}return{}},updateLatestAppKitVersion(e){try{const t=H.getLatestAppKitVersionCache();t.timestamp=e.timestamp,t.version=e.version,N.setItem(k.LATEST_APPKIT_VERSION,JSON.stringify(t))}catch{console.info("Unable to update latest AppKit version on local storage",e)}}},xe={getWindow(){if(!(typeof window>"u"))return window},isMobile(){var e;return this.isClient()?!!(window!=null&&window.matchMedia&&typeof window.matchMedia=="function"&&((e=window.matchMedia("(pointer:coarse)"))!=null&&e.matches)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e==null?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return xe.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=nt.TEN_SEC_MS:!0},isAllowedRetry(e,t=nt.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},isSafeApp(){var e,t;if(xe.isClient()&&window.self!==window.top)try{const n=(t=(e=window==null?void 0:window.location)==null?void 0:e.ancestorOrigins)==null?void 0:t[0],o="https://app.safe.global";if(n){const s=new URL(n),a=new URL(o);return s.hostname===a.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+nt.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(":")[1]},getPlainAddress(e){return e==null?void 0:e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...o)=>{function s(){e(...o)}n&&clearTimeout(n),n=setTimeout(s,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,n=null){if(xe.isHttpUrl(e))return this.formatUniversalUrl(e,t);let o=e,s=n;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),s&&!(s!=null&&s.endsWith("/"))&&(s=`${s}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const a=encodeURIComponent(t);return{redirect:`${o}wc?uri=${a}`,redirectUniversalLink:s?`${s}wc?uri=${a}`:void 0,href:o}},formatUniversalUrl(e,t){if(!xe.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const o=encodeURIComponent(t);return{redirect:`${n}wc?uri=${o}`,href:n}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?H.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,n){window==null||window.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},returnOpenHref(e,t,n){return window==null?void 0:window.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){var n,o;if(typeof window>"u")return!1;const e=window!=null&&window.matchMedia&&typeof window.matchMedia=="function"?(n=window.matchMedia("(display-mode: standalone)"))==null?void 0:n.matches:!1,t=(o=window==null?void 0:window.navigator)==null?void 0:o.standalone;return!!(e||t)},async preloadImage(e){const t=new Promise((n,o)=>{const s=new Image;s.onload=n,s.onerror=o,s.crossOrigin="anonymous",s.src=e});return Promise.race([t,xe.wait(2e3)])},parseBalance(e,t){let n="0.000";if(typeof e=="string"){const c=Number(e);if(!isNaN(c)){const h=(Math.floor(c*1e3)/1e3).toFixed(3);h&&(n=h)}}const[o,s]=n.split("."),a=o||"0",r=s||"000";return{formattedText:`${a}.${r}${t?` ${t}`:""}`,value:a,decimals:r,symbol:t}},getApiUrl(){return Ft.W3M_API_URL},getBlockchainApiUrl(){return Ft.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return Ft.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){var t,n;return typeof e=="string"?e:typeof((n=(t=e==null?void 0:e.issues)==null?void 0:t[0])==null?void 0:n.message)=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const n={};return t&&e&&(e.forEach((o,s)=>{n[o]=s}),t.sort((o,s)=>{const a=n[o.id],r=n[s.id];return a!==void 0&&r!==void 0?a-r:a!==void 0?-1:r!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const n of e)t+=n.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[n,o]=t.split(".");return{dollars:n,pennies:o}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);case"bip122":{const n=/^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),o=/^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),s=/^bc1[a-z0-9]{39,87}$/u.test(e),a=/^bc1p[a-z0-9]{58}$/u.test(e);return n||o||s||a}default:return!1}},uniqueBy(e,t){const n=new Set;return e.filter(o=>{const s=o[t];return n.has(s)?!1:(n.add(s),!0)})},generateSdkVersion(e,t,n){const s=e.length===0?nt.ADAPTER_TYPES.UNIVERSAL:e.map(a=>a.adapterType).join(",");return`${t}-${s}-${n}`},createAccount(e,t,n,o,s){return{namespace:e,address:t,type:n,publicKey:o,path:s}},isCaipAddress(e){if(typeof e!="string")return!1;const t=e.split(":"),n=t[0];return t.filter(Boolean).length===3&&n in Ft.CHAIN_NAME_MAP},getAccount(e){return e?typeof e=="string"?{address:e,chainId:void 0}:{address:e.address,chainId:e.chainId}:{address:void 0,chainId:void 0}},isMac(){const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){const t=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,n="state=";if(new URL(e).host==="auth.magic.link"){const s="provider_authorization_url=",a=e.substring(e.indexOf(s)+s.length),r=this.injectIntoUrl(decodeURIComponent(a),n,t);return e.replace(a,encodeURIComponent(r))}return this.injectIntoUrl(e,n,t)},injectIntoUrl(e,t,n){const o=e.indexOf(t);if(o===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);const s=e.indexOf("&",o),a=t.length,r=s!==-1?s:e.length,i=e.substring(0,o+a),c=e.substring(o+a,r),h=e.substring(s),m=c+n;return i+m+h},isNumber(e){return typeof e!="number"&&typeof e!="string"?!1:!isNaN(Number(e))}};async function Wt(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}let us=class{constructor({baseUrl:t,clientId:n}){this.baseUrl=t,this.clientId=n}async get({headers:t,signal:n,cache:o,...s}){const a=this.createUrl(s);return(await Wt(a,{method:"GET",headers:t,signal:n,cache:o})).json()}async getBlob({headers:t,signal:n,...o}){const s=this.createUrl(o);return(await Wt(s,{method:"GET",headers:t,signal:n})).blob()}async post({body:t,headers:n,signal:o,...s}){const a=this.createUrl(s);return(await Wt(a,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0,signal:o})).json()}async put({body:t,headers:n,signal:o,...s}){const a=this.createUrl(s);return(await Wt(a,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0,signal:o})).json()}async delete({body:t,headers:n,signal:o,...s}){const a=this.createUrl(s);return(await Wt(a,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0,signal:o})).json()}createUrl({path:t,params:n}){const o=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([s,a])=>{a&&o.searchParams.append(s,a)}),this.clientId&&o.searchParams.append("clientId",this.clientId),o}sendBeacon({body:t,...n}){const o=this.createUrl(n);return navigator.sendBeacon(o.toString(),t?JSON.stringify(t):void 0)}};const ps={getFeatureValue(e,t){const n=t==null?void 0:t[e];return n===void 0?nt.DEFAULT_FEATURES[e]:n},filterSocialsByPlatform(e){if(!e||!e.length)return e;let t=e;return xe.isTelegram()&&(xe.isIos()&&(t=t.filter(n=>n!=="google")),xe.isMac()&&(t=t.filter(n=>n!=="x")),xe.isAndroid()&&(t=t.filter(n=>!["facebook","x"].includes(n)))),xe.isMobile()&&(t=t.filter(n=>n!=="facebook")),t},isSocialsEnabled(){var e,t,n,o;return Array.isArray((e=lt.state.features)==null?void 0:e.socials)&&((t=lt.state.features)==null?void 0:t.socials.length)>0||Array.isArray((n=lt.state.remoteFeatures)==null?void 0:n.socials)&&((o=lt.state.remoteFeatures)==null?void 0:o.socials.length)>0},isEmailEnabled(){var e,t;return!!((e=lt.state.features)!=null&&e.email||(t=lt.state.remoteFeatures)!=null&&t.email)}},x=se({features:nt.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:nt.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{},enableMobileFullScreen:!1,coinbasePreference:"all"}),lt={state:x,subscribeKey(e,t){return ce(x,e,t)},setOptions(e){Object.assign(x,e)},setRemoteFeatures(e){var n,o;if(!e)return;const t={...x.remoteFeatures,...e};x.remoteFeatures=t,(n=x.remoteFeatures)!=null&&n.socials&&(x.remoteFeatures.socials=ps.filterSocialsByPlatform(x.remoteFeatures.socials)),(o=x.features)!=null&&o.pay&&(x.remoteFeatures.email=!1,x.remoteFeatures.socials=!1)},setFeatures(e){var n;if(!e)return;x.features||(x.features=nt.DEFAULT_FEATURES);const t={...x.features,...e};x.features=t,(n=x.features)!=null&&n.pay&&x.remoteFeatures&&(x.remoteFeatures.email=!1,x.remoteFeatures.socials=!1)},setProjectId(e){x.projectId=e},setCustomRpcUrls(e){x.customRpcUrls=e},setAllWallets(e){x.allWallets=e},setIncludeWalletIds(e){x.includeWalletIds=e},setExcludeWalletIds(e){x.excludeWalletIds=e},setFeaturedWalletIds(e){x.featuredWalletIds=e},setTokens(e){x.tokens=e},setTermsConditionsUrl(e){x.termsConditionsUrl=e},setPrivacyPolicyUrl(e){x.privacyPolicyUrl=e},setCustomWallets(e){x.customWallets=e},setIsSiweEnabled(e){x.isSiweEnabled=e},setIsUniversalProvider(e){x.isUniversalProvider=e},setSdkVersion(e){x.sdkVersion=e},setMetadata(e){x.metadata=e},setDisableAppend(e){x.disableAppend=e},setEIP6963Enabled(e){x.enableEIP6963=e},setDebug(e){x.debug=e},setEnableWalletGuide(e){x.enableWalletGuide=e},setEnableAuthLogger(e){x.enableAuthLogger=e},setEnableWallets(e){x.enableWallets=e},setPreferUniversalLinks(e){x.experimental_preferUniversalLinks=e},setSIWX(e){if(e)for(const[t,n]of Object.entries(nt.SIWX_DEFAULTS))e[t]??(e[t]=n);x.siwx=e},setConnectMethodsOrder(e){x.features={...x.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){x.features={...x.features,walletFeaturesOrder:e}},setSocialsOrder(e){x.remoteFeatures={...x.remoteFeatures,socials:e}},setCollapseWallets(e){x.features={...x.features,collapseWallets:e}},setEnableEmbedded(e){x.enableEmbedded=e},setAllowUnsupportedChain(e){x.allowUnsupportedChain=e},setManualWCControl(e){x.manualWCControl=e},setEnableNetworkSwitch(e){x.enableNetworkSwitch=e},setEnableMobileFullScreen(e){x.enableMobileFullScreen=xe.isMobile()&&e},setEnableReconnect(e){x.enableReconnect=e},setCoinbasePreference(e){x.coinbasePreference=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,n])=>{n&&(x.defaultAccountTypes[t]=n)})},setUniversalProviderConfigOverride(e){x.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return x.universalProviderConfigOverride},getSnapshot(){return xt(x)}},hs=Object.freeze({enabled:!0,events:[]}),ms=new us({baseUrl:xe.getAnalyticsUrl(),clientId:null}),fs=5,gs=60*1e3,rt=se({...hs}),ws={state:rt,subscribeKey(e,t){return ce(rt,e,t)},async sendError(e,t){if(!rt.enabled)return;const n=Date.now();if(rt.events.filter(a=>{const r=new Date(a.properties.timestamp||"").getTime();return n-r<gs}).length>=fs)return;const s={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};rt.events.push(s);try{if(typeof window>"u")return;const{projectId:a,sdkType:r,sdkVersion:i}=lt.state;await ms.post({path:"/e",params:{projectId:a,st:r,sv:i||"html-wagmi-4.2.2"},body:{eventId:xe.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){rt.enabled=!0},disable(){rt.enabled=!1},clearEvents(){rt.events=[]}};let ho=class jn extends Error{constructor(t,n,o){super(t),this.originalName="AppKitError",this.name="AppKitError",this.category=n,this.originalError=o,o&&o instanceof Error&&(this.originalName=o.name),Object.setPrototypeOf(this,jn.prototype);let s=!1;if(o instanceof Error&&typeof o.stack=="string"&&o.stack){const a=o.stack,r=a.indexOf(`
`);if(r>-1){const i=a.substring(r+1);this.stack=`${this.name}: ${this.message}
${i}`,s=!0}}s||(Error.captureStackTrace?Error.captureStackTrace(this,jn):this.stack||(this.stack=`${this.name}: ${this.message}`))}};function mo(e,t){let n="";try{e instanceof Error?n=e.message:typeof e=="string"?n=e:typeof e=="object"&&e!==null?Object.keys(e).length===0?n="Unknown error":n=(e==null?void 0:e.message)||JSON.stringify(e):n=String(e)}catch(s){n="Unknown error",console.error("Error parsing error message",s)}const o=e instanceof ho?e:new ho(n,t,e);throw ws.sendError(o,o.category),o}function Cs(e,t="INTERNAL_SDK_ERROR"){const n={};return Object.keys(e).forEach(o=>{const s=e[o];if(typeof s=="function"){let a=s;s.constructor.name==="AsyncFunction"?a=async(...r)=>{try{return await s(...r)}catch(i){return mo(i,t)}}:a=(...r)=>{try{return s(...r)}catch(i){return mo(i,t)}},n[o]=a}else n[o]=s}),n}const Me=se({message:"",variant:"info",open:!1}),ys={state:Me,subscribeKey(e,t){return ce(Me,e,t)},open(e,t){const{debug:n}=lt.state,{code:o,displayMessage:s,debugMessage:a}=e;s&&n&&(Me.message=s,Me.variant=t,Me.open=!0)},warn(e,t,n){Me.open=!0,Me.message=e,Me.variant="warning",t&&console.warn(t,n)},close(){Me.open=!1,Me.message="",Me.variant="info"}},bs=Cs(ys),Es=te`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
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
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var Zn=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const As={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let Kt=class extends X{constructor(){super(...arguments),this.message="",this.type="info"}render(){return l`
      <wui-flex
        data-type=${Q(this.type)}
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
            <wui-icon color="inherit" size="md" name=${As[this.type]}></wui-icon>
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
    `}onClose(){bs.close()}};Kt.styles=[Ge,Es];Zn([b()],Kt.prototype,"message",void 0);Zn([b()],Kt.prototype,"type",void 0);Kt=Zn([J("wui-alertbar")],Kt);const Ns=te`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var Wo=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ts={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let gn=class extends X{constructor(){super(),this.unsubscribe=[],this.open=dn.state.open,this.onOpen(!0),this.unsubscribe.push(dn.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=dn.state,o=Ts[n];return l`
      <wui-alertbar
        message=${t}
        backgroundColor=${o==null?void 0:o.backgroundColor}
        iconColor=${o==null?void 0:o.iconColor}
        icon=${o==null?void 0:o.icon}
        type=${n}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};gn.styles=Ns;Wo([v()],gn.prototype,"open",void 0);gn=Wo([J("w3m-alertbar")],gn);const vs=te`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
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
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
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
`;var wt=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Ke=class extends X{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return l`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${Q(this.iconSize)}></wui-icon>
    </button>`}};Ke.styles=[Ge,vn,vs];wt([b()],Ke.prototype,"icon",void 0);wt([b()],Ke.prototype,"variant",void 0);wt([b()],Ke.prototype,"type",void 0);wt([b()],Ke.prototype,"size",void 0);wt([b()],Ke.prototype,"iconSize",void 0);wt([b({type:Boolean})],Ke.prototype,"fullWidth",void 0);wt([b({type:Boolean})],Ke.prototype,"disabled",void 0);Ke=wt([J("wui-icon-button")],Ke);const Is=te`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
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
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var Pt=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ss={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ks={lg:"lg",md:"md",sm:"sm"};let mt=class extends X{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return l`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=Ss[this.size];return this.text?l`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return l`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=ks[this.size];return l` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};mt.styles=[Ge,vn,Is];Pt([b()],mt.prototype,"imageSrc",void 0);Pt([b()],mt.prototype,"text",void 0);Pt([b()],mt.prototype,"size",void 0);Pt([b()],mt.prototype,"type",void 0);Pt([b({type:Boolean})],mt.prototype,"disabled",void 0);mt=Pt([J("wui-select")],mt);const At={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]},Bo={isLowerCaseMatch(e,t){return(e==null?void 0:e.toLowerCase())===(t==null?void 0:t.toLowerCase())}};var fo={};const f={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",BASE_ACCOUNT:"baseAccount",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122",TON:"ton"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos",sui:"Sui",stacks:"Stacks",ton:"TON"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",TON:"ton"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],SOLANA_SPL_TOKEN_ADDRESSES:{SOL:"So11111111111111111111111111111111111111112"},NATIVE_IMAGE_IDS_BY_NAMESPACE:{eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"3e8119e5-2a6f-4818-c50c-1937011d5900",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},TOKEN_SYMBOLS_BY_ADDRESS:{"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48":"USDC","0x833589fcd6edb6e08f4c7c32d4f71b54bda02913":"USDC","0x0b2c639c533813f4aa9d7837caf62653d097ff85":"USDC","0xaf88d065e77c8cc2239327c5edb3a432268e5831":"USDC","0x3c499c542cef5e3811e1192ce70d8cc03d5c3359":"USDC","0x2791bca1f2de4661ed88a30c99a7a9449aa84174":"USDC",EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:"USDC","0xdac17f958d2ee523a2206206994597c13d831ec7":"USDT","0x94b008aa00579c1307b0ef2c499ad98a8ce58e58":"USDT","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9":"USDT","0xc2132d05d31c914a87c6611c10748aeb04b58e8f":"USDT",Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:"USDT"},HTTP_STATUS_CODES:{SERVER_ERROR:500,TOO_MANY_REQUESTS:429,SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(typeof mn<"u"&&typeof fo<"u"?fo.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",REMOTE_FEATURES_ALERTS:{MULTI_WALLET_NOT_ENABLED:{DEFAULT:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."},CONNECTIONS_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."},CONNECTION_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."}},HEADLESS_NOT_ENABLED:{DEFAULT:{displayMessage:"",debugMessage:"Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."}}},IS_DEVELOPMENT:typeof mn<"u"&&!1,DEFAULT_ALLOWED_ANCESTORS:["http://localhost:*","https://localhost:*","http://127.0.0.1:*","https://127.0.0.1:*","https://*.pages.dev","https://*.vercel.app","https://*.ngrok-free.app","https://secure-mobile.walletconnect.com","https://secure-mobile.walletconnect.org"],METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH"},_s={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace(e,t){return(e==null?void 0:e.filter(n=>n.chainNamespace===t))||[]},getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,t){var s;if(!t)return;const n=e.find(a=>a.caipNetworkId===t);if(n)return n.name;const[o]=t.split(":");return((s=f.CHAIN_NAME_MAP)==null?void 0:s[o])||void 0}},Mo=["eip155","solana","polkadot","bip122","cosmos","sui","stacks"],be={bigNumber(e,t={safe:!1}){try{return e?new Ve(e):new Ve(0)}catch(n){if(t.safe)return new Ve(0);throw n}},formatNumber(e,t){const{decimals:n,round:o=8,safe:s=!0}=t;return be.bigNumber(e,{safe:s}).div(new Ve(10).pow(n)).round(o)},multiply(e,t){if(e===void 0||t===void 0)return new Ve(0);const n=new Ve(e),o=new Ve(t);return n.times(o)},toFixed(e,t=2){return e===void 0||e===""?new Ve(0).toFixed(t):new Ve(e).toFixed(t)},formatNumberToLocalString(e,t=2){return e===void 0||e===""?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"})},parseLocalStringToNumber(e){if(e===void 0||e==="")return 0;const t=e.replace(/,/gu,"");return new Ve(t).toNumber()}},xs=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Os=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],Ps=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Fo={getERC20Abi:e=>f.USDT_CONTRACT_ADDRESSES.includes(e)?Ps:xs,getSwapAbi:()=>Os},St={ConnectorExplorerIds:{[f.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[f.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[f.CONNECTOR_ID.BASE_ACCOUNT]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[f.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[f.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[f.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[f.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[f.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[f.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[f.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[f.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[f.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[f.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[f.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[f.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[f.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[f.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",[f.OKX_CONNECTOR_NAME]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[f.BINANCE_CONNECTOR_NAME]:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"}},ne={validateCaipAddress(e){var t;if(((t=e.split(":"))==null?void 0:t.length)!==3)throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){const t=e.split(":");if(t.length!==3)throw new Error(`Invalid CAIP-10 address: ${e}`);const[n,o,s]=t;if(!n||!o||!s)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:n,chainId:o,address:s}},parseCaipNetworkId(e){const t=e.split(":");if(t.length!==2)throw new Error(`Invalid CAIP-2 network id: ${e}`);const[n,o]=t;if(!n||!o)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:n,chainId:o}}},tt={RPC_ERROR_CODE:{USER_REJECTED_REQUEST:4001,USER_REJECTED_METHODS:5002,USER_REJECTED:5e3,SEND_TRANSACTION_ERROR:5001},PROVIDER_RPC_ERROR_NAME:{PROVIDER_RPC:"ProviderRpcError",USER_REJECTED_REQUEST:"UserRejectedRequestError",SEND_TRANSACTION_ERROR:"SendTransactionError"},isRpcProviderError(e){try{if(typeof e=="object"&&e!==null){const t=e,n=typeof t.message=="string",o=typeof t.code=="number";return n&&o}return!1}catch{return!1}},isUserRejectedMessage(e){return e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user cancelled")||e.toLowerCase().includes("user canceled")},isUserRejectedRequestError(e){if(tt.isRpcProviderError(e)){const t=e.code===tt.RPC_ERROR_CODE.USER_REJECTED_REQUEST,n=e.code===tt.RPC_ERROR_CODE.USER_REJECTED_METHODS;return t||n||tt.isUserRejectedMessage(e.message)}return e instanceof Error?tt.isUserRejectedMessage(e.message):!1}};class Rs extends Error{constructor(t,n){super(n.message,{cause:t}),this.name=tt.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC,this.code=n.code}}class Us extends Rs{constructor(t){super(t,{code:tt.RPC_ERROR_CODE.USER_REJECTED_REQUEST,message:"User rejected the request"}),this.name=tt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST}}const _={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",RECENT_WALLET:"@appkit/recent_wallet",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections",DISCONNECTED_CONNECTOR_IDS:"@appkit/disconnected_connector_ids",HISTORY_TRANSACTIONS_CACHE:"@appkit/history_transactions_cache",TOKEN_PRICE_CACHE:"@appkit/token_price_cache",RECENT_EMAILS:"@appkit/recent_emails",LATEST_APPKIT_VERSION:"@appkit/latest_version",TON_WALLETS_CACHE:"@appkit/ton_wallets_cache"};function Pn(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const T={setItem(e,t){nn()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(nn())return localStorage.getItem(e)||void 0},removeItem(e){nn()&&localStorage.removeItem(e)},clear(){nn()&&localStorage.clear()}};function nn(){return typeof window<"u"&&typeof localStorage<"u"}function wn(e,t){const n=(e==null?void 0:e["--apkt-accent"])??(e==null?void 0:e["--w3m-accent"]);return t==="light"?{"--w3m-accent":n||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":n||"hsla(230, 100%, 67%, 1)","--w3m-background":"#202020"}}const pe={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SOLANA_NATIVE_TOKEN_ADDRESS:"So11111111111111111111111111111111111111111",NAMES_SUPPORTED_CHAIN_NAMESPACES:[f.CHAIN.EVM],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x",sui:"0x",stacks:"0x",ton:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,DEFAULT_REMOTE_FEATURES:{socials:["google","x","discord","farcaster","github","apple","facebook"]},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1,reownAuthentication:!1,headless:!1},DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa",ton:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal"},SIWX_DEFAULTS:{signOutOnDisconnect:!0},MANDATORY_WALLET_IDS_ON_MOBILE:[St.ConnectorExplorerIds[f.CONNECTOR_ID.COINBASE],St.ConnectorExplorerIds[f.CONNECTOR_ID.COINBASE_SDK],St.ConnectorExplorerIds[f.CONNECTOR_ID.BASE_ACCOUNT],St.ConnectorExplorerIds[f.SOLFLARE_CONNECTOR_NAME],St.ConnectorExplorerIds[f.PHANTOM_CONNECTOR_NAME],St.ConnectorExplorerIds[f.BINANCE_CONNECTOR_NAME]],DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"]},y={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5,transactionsHistory:15e3,tokenPrice:15e3,latestAppKitVersion:6048e5,tonWallets:864e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){const e=y.getActiveNamespace(),t=y.getActiveCaipNetworkId(),n=t?t.split(":")[1]:void 0,o=n?isNaN(Number(n))?n:Number(n):void 0;return{namespace:e,caipNetworkId:t,chainId:o}},setWalletConnectDeepLink({name:e,href:t}){try{T.setItem(_.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=T.getItem(_.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{T.removeItem(_.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{T.setItem(_.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{T.setItem(_.ACTIVE_CAIP_NETWORK_ID,e),y.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return T.getItem(_.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{T.removeItem(_.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=Pn(e);T.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=y.getRecentWallets();t.find(o=>o.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),T.setItem(_.RECENT_WALLETS,JSON.stringify(t)),T.setItem(_.RECENT_WALLET,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=T.getItem(_.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},getRecentWallet(){try{const e=T.getItem(_.RECENT_WALLET);return e?JSON.parse(e):null}catch{console.info("Unable to get AppKit recent")}return null},deleteRecentWallet(){try{T.removeItem(_.RECENT_WALLET)}catch{console.info("Unable to delete AppKit recent")}},setConnectedConnectorId(e,t){try{const n=Pn(e);T.setItem(n,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return T.getItem(_.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=Pn(e);return T.getItem(t)}catch{console.info("Unable to get connected connector id in namespace",e)}},setConnectedSocialProvider(e){try{T.setItem(_.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return T.getItem(_.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{T.removeItem(_.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return T.getItem(_.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var n;const e=T.getItem(_.ACTIVE_CAIP_NETWORK_ID);return(n=e==null?void 0:e.split(":"))==null?void 0:n[1]},setConnectionStatus(e){try{T.setItem(_.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return T.getItem(_.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const e=T.getItem(_.CONNECTED_NAMESPACES);return e!=null&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));T.setItem(_.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=y.getConnectedNamespaces();t.includes(e)||(t.push(e),y.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=y.getConnectedNamespaces(),n=t.indexOf(e);n>-1&&(t.splice(n,1),y.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return T.getItem(_.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{T.setItem(_.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{T.removeItem(_.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=T.getItem(_.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=y.getBalanceCache();T.setItem(_.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const n=y.getBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.portfolio))return n.balance;y.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=y.getBalanceCache();t[e.caipAddress]=e,T.setItem(_.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=T.getItem(_.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=y.getBalanceCache();T.setItem(_.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const n=y.getNativeBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.nativeBalance))return n;console.info("Discarding cache for address",e),y.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=y.getNativeBalanceCache();t[e.caipAddress]=e,T.setItem(_.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=T.getItem(_.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const n=y.getEnsCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.ens))return n.ens;y.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=y.getEnsCache();t[e.address]=e,T.setItem(_.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=y.getEnsCache();T.setItem(_.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=T.getItem(_.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const n=y.getIdentityCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.identity))return n.identity;y.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=y.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},T.setItem(_.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=y.getIdentityCache();T.setItem(_.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},getTonWalletsCache(){try{const e=T.getItem(_.TON_WALLETS_CACHE),t=e?JSON.parse(e):void 0;if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tonWallets))return t;y.removeTonWalletsCache()}catch{console.info("Unable to get ton wallets cache")}},updateTonWalletsCache(e){try{const t=y.getTonWalletsCache()||{timestamp:0,wallets:[]};t.timestamp=new Date().getTime(),t.wallets=e,T.setItem(_.TON_WALLETS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ton wallets cache",e)}},removeTonWalletsCache(){try{T.removeItem(_.TON_WALLETS_CACHE)}catch{console.info("Unable to remove ton wallets cache")}},clearAddressCache(){try{T.removeItem(_.PORTFOLIO_CACHE),T.removeItem(_.NATIVE_BALANCE_CACHE),T.removeItem(_.ENS_CACHE),T.removeItem(_.IDENTITY_CACHE),T.removeItem(_.HISTORY_TRANSACTIONS_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{T.setItem(_.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=T.getItem(_.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{const n=y.getConnections(),o=n[t]??[],s=new Map;for(const r of o)s.set(r.connectorId,{...r});for(const r of e){const i=s.get(r.connectorId),c=r.connectorId===f.CONNECTOR_ID.AUTH;if(i&&!c){const h=new Set(i.accounts.map(g=>g.address.toLowerCase())),m=r.accounts.filter(g=>!h.has(g.address.toLowerCase()));i.accounts.push(...m)}else s.set(r.connectorId,{...r})}const a={...n,[t]:Array.from(s.values())};T.setItem(_.CONNECTIONS,JSON.stringify(a))}catch(n){console.error("Unable to sync connections to storage",n)}},getConnections(){try{const e=T.getItem(_.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}},deleteAddressFromConnection({connectorId:e,address:t,namespace:n}){try{const o=y.getConnections(),s=o[n]??[],a=new Map(s.map(i=>[i.connectorId,i])),r=a.get(e);r&&(r.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase()).length===0?a.delete(e):a.set(e,{...r,accounts:r.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase())})),T.setItem(_.CONNECTIONS,JSON.stringify({...o,[n]:Array.from(a.values())}))}catch{console.error(`Unable to remove address "${t}" from connector "${e}" in namespace "${n}"`)}},getDisconnectedConnectorIds(){try{const e=T.getItem(_.DISCONNECTED_CONNECTOR_IDS);return e?JSON.parse(e):{}}catch{console.info("Unable to get disconnected connector ids")}return{}},addDisconnectedConnectorId(e,t){try{const n=y.getDisconnectedConnectorIds(),o=n[t]??[];o.push(e),T.setItem(_.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`)}},removeDisconnectedConnectorId(e,t){try{const n=y.getDisconnectedConnectorIds();let o=n[t]??[];o=o.filter(s=>s.toLowerCase()!==e.toLowerCase()),T.setItem(_.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`)}},isConnectorDisconnected(e,t){try{return(y.getDisconnectedConnectorIds()[t]??[]).some(s=>s.toLowerCase()===e.toLowerCase())}catch{console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`)}return!1},getTransactionsCache(){try{const e=T.getItem(_.HISTORY_TRANSACTIONS_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get transactions cache")}return{}},getTransactionsCacheForAddress({address:e,chainId:t=""}){var n;try{const s=(n=y.getTransactionsCache()[e])==null?void 0:n[t];if(s&&!this.isCacheExpired(s.timestamp,this.cacheExpiry.transactionsHistory))return s.transactions;y.removeTransactionsCache({address:e,chainId:t})}catch{console.info("Unable to get transactions cache")}},updateTransactionsCache({address:e,chainId:t="",timestamp:n,transactions:o}){try{const s=y.getTransactionsCache();s[e]={...s[e],[t]:{timestamp:n,transactions:o}},T.setItem(_.HISTORY_TRANSACTIONS_CACHE,JSON.stringify(s))}catch{console.info("Unable to update transactions cache",{address:e,chainId:t,timestamp:n,transactions:o})}},removeTransactionsCache({address:e,chainId:t}){try{const n=y.getTransactionsCache(),o=(n==null?void 0:n[e])||{},{[t]:s,...a}=o;T.setItem(_.HISTORY_TRANSACTIONS_CACHE,JSON.stringify({...n,[e]:a}))}catch{console.info("Unable to remove transactions cache",{address:e,chainId:t})}},getTokenPriceCache(){try{const e=T.getItem(_.TOKEN_PRICE_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get token price cache")}return{}},getTokenPriceCacheForAddresses(e){try{const n=y.getTokenPriceCache()[e.join(",")];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.tokenPrice))return n.tokenPrice;y.removeTokenPriceCache(e)}catch{console.info("Unable to get token price cache for addresses",e)}},updateTokenPriceCache(e){try{const t=y.getTokenPriceCache();t[e.addresses.join(",")]={timestamp:e.timestamp,tokenPrice:e.tokenPrice},T.setItem(_.TOKEN_PRICE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update token price cache",e)}},removeTokenPriceCache(e){try{const t=y.getTokenPriceCache();T.setItem(_.TOKEN_PRICE_CACHE,JSON.stringify({...t,[e.join(",")]:void 0}))}catch{console.info("Unable to remove token price cache",e)}},getLatestAppKitVersion(){try{const e=this.getLatestAppKitVersionCache(),t=e==null?void 0:e.version;return t&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.latestAppKitVersion)?t:void 0}catch{console.info("Unable to get latest AppKit version")}},getLatestAppKitVersionCache(){try{const e=T.getItem(_.LATEST_APPKIT_VERSION);return e?JSON.parse(e):{}}catch{console.info("Unable to get latest AppKit version cache")}return{}},updateLatestAppKitVersion(e){try{const t=y.getLatestAppKitVersionCache();t.timestamp=e.timestamp,t.version=e.version,T.setItem(_.LATEST_APPKIT_VERSION,JSON.stringify(t))}catch{console.info("Unable to update latest AppKit version on local storage",e)}}},S={getWindow(){if(!(typeof window>"u"))return window},isMobile(){var e;return this.isClient()?!!(window!=null&&window.matchMedia&&typeof window.matchMedia=="function"&&((e=window.matchMedia("(pointer:coarse)"))!=null&&e.matches)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e==null?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return S.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=pe.TEN_SEC_MS:!0},isAllowedRetry(e,t=pe.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},isSafeApp(){var e,t;if(S.isClient()&&window.self!==window.top)try{const n=(t=(e=window==null?void 0:window.location)==null?void 0:e.ancestorOrigins)==null?void 0:t[0],o="https://app.safe.global";if(n){const s=new URL(n),a=new URL(o);return s.hostname===a.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+pe.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(":")[1]},getPlainAddress(e){return e==null?void 0:e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...o)=>{function s(){e(...o)}n&&clearTimeout(n),n=setTimeout(s,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,n=null){if(S.isHttpUrl(e))return this.formatUniversalUrl(e,t);let o=e,s=n;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),s&&!(s!=null&&s.endsWith("/"))&&(s=`${s}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const a=encodeURIComponent(t);return{redirect:`${o}wc?uri=${a}`,redirectUniversalLink:s?`${s}wc?uri=${a}`:void 0,href:o}},formatUniversalUrl(e,t){if(!S.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const o=encodeURIComponent(t);return{redirect:`${n}wc?uri=${o}`,href:n}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?y.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,n){window==null||window.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},returnOpenHref(e,t,n){return window==null?void 0:window.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){var n,o;if(typeof window>"u")return!1;const e=window!=null&&window.matchMedia&&typeof window.matchMedia=="function"?(n=window.matchMedia("(display-mode: standalone)"))==null?void 0:n.matches:!1,t=(o=window==null?void 0:window.navigator)==null?void 0:o.standalone;return!!(e||t)},async preloadImage(e){const t=new Promise((n,o)=>{const s=new Image;s.onload=n,s.onerror=o,s.crossOrigin="anonymous",s.src=e});return Promise.race([t,S.wait(2e3)])},parseBalance(e,t){let n="0.000";if(typeof e=="string"){const c=Number(e);if(!isNaN(c)){const h=(Math.floor(c*1e3)/1e3).toFixed(3);h&&(n=h)}}const[o,s]=n.split("."),a=o||"0",r=s||"000";return{formattedText:`${a}.${r}${t?` ${t}`:""}`,value:a,decimals:r,symbol:t}},getApiUrl(){return f.W3M_API_URL},getBlockchainApiUrl(){return f.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return f.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){var t,n;return typeof e=="string"?e:typeof((n=(t=e==null?void 0:e.issues)==null?void 0:t[0])==null?void 0:n.message)=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const n={};return t&&e&&(e.forEach((o,s)=>{n[o]=s}),t.sort((o,s)=>{const a=n[o.id],r=n[s.id];return a!==void 0&&r!==void 0?a-r:a!==void 0?-1:r!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const n of e)t+=n.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[n,o]=t.split(".");return{dollars:n,pennies:o}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);case"bip122":{const n=/^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),o=/^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),s=/^bc1[a-z0-9]{39,87}$/u.test(e),a=/^bc1p[a-z0-9]{58}$/u.test(e);return n||o||s||a}default:return!1}},uniqueBy(e,t){const n=new Set;return e.filter(o=>{const s=o[t];return n.has(s)?!1:(n.add(s),!0)})},generateSdkVersion(e,t,n){const s=e.length===0?pe.ADAPTER_TYPES.UNIVERSAL:e.map(a=>a.adapterType).join(",");return`${t}-${s}-${n}`},createAccount(e,t,n,o,s){return{namespace:e,address:t,type:n,publicKey:o,path:s}},isCaipAddress(e){if(typeof e!="string")return!1;const t=e.split(":"),n=t[0];return t.filter(Boolean).length===3&&n in f.CHAIN_NAME_MAP},getAccount(e){return e?typeof e=="string"?{address:e,chainId:void 0}:{address:e.address,chainId:e.chainId}:{address:void 0,chainId:void 0}},isMac(){const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){const t=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,n="state=";if(new URL(e).host==="auth.magic.link"){const s="provider_authorization_url=",a=e.substring(e.indexOf(s)+s.length),r=this.injectIntoUrl(decodeURIComponent(a),n,t);return e.replace(a,encodeURIComponent(r))}return this.injectIntoUrl(e,n,t)},injectIntoUrl(e,t,n){const o=e.indexOf(t);if(o===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);const s=e.indexOf("&",o),a=t.length,r=s!==-1?s:e.length,i=e.substring(0,o+a),c=e.substring(o+a,r),h=e.substring(s),m=c+n;return i+m+h},isNumber(e){return typeof e!="number"&&typeof e!="string"?!1:!isNaN(Number(e))}},pn={STORAGE_KEY:"@appkit-wallet/",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS"},ut={ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},$s={set(e,t){Rn.isClient&&localStorage.setItem(`${pn.STORAGE_KEY}${e}`,t)},get(e){return Rn.isClient?localStorage.getItem(`${pn.STORAGE_KEY}${e}`):null},delete(e,t){Rn.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${pn.STORAGE_KEY}${e}`))}},Rn={isClient:typeof window<"u"};async function Bt(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}class Rt{constructor({baseUrl:t,clientId:n}){this.baseUrl=t,this.clientId=n}async get({headers:t,signal:n,cache:o,...s}){const a=this.createUrl(s);return(await Bt(a,{method:"GET",headers:t,signal:n,cache:o})).json()}async getBlob({headers:t,signal:n,...o}){const s=this.createUrl(o);return(await Bt(s,{method:"GET",headers:t,signal:n})).blob()}async post({body:t,headers:n,signal:o,...s}){const a=this.createUrl(s);return(await Bt(a,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0,signal:o})).json()}async put({body:t,headers:n,signal:o,...s}){const a=this.createUrl(s);return(await Bt(a,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0,signal:o})).json()}async delete({body:t,headers:n,signal:o,...s}){const a=this.createUrl(s);return(await Bt(a,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0,signal:o})).json()}createUrl({path:t,params:n}){const o=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([s,a])=>{a&&o.searchParams.append(s,a)}),this.clientId&&o.searchParams.append("clientId",this.clientId),o}sendBeacon({body:t,...n}){const o=this.createUrl(n);return navigator.sendBeacon(o.toString(),t?JSON.stringify(t):void 0)}}const Vn={getFeatureValue(e,t){const n=t==null?void 0:t[e];return n===void 0?pe.DEFAULT_FEATURES[e]:n},filterSocialsByPlatform(e){if(!e||!e.length)return e;let t=e;return S.isTelegram()&&(S.isIos()&&(t=t.filter(n=>n!=="google")),S.isMac()&&(t=t.filter(n=>n!=="x")),S.isAndroid()&&(t=t.filter(n=>!["facebook","x"].includes(n)))),S.isMobile()&&(t=t.filter(n=>n!=="facebook")),t},isSocialsEnabled(){var e,t,n,o;return Array.isArray((e=R.state.features)==null?void 0:e.socials)&&((t=R.state.features)==null?void 0:t.socials.length)>0||Array.isArray((n=R.state.remoteFeatures)==null?void 0:n.socials)&&((o=R.state.remoteFeatures)==null?void 0:o.socials.length)>0},isEmailEnabled(){var e,t;return!!((e=R.state.features)!=null&&e.email||(t=R.state.remoteFeatures)!=null&&t.email)}},O=se({features:pe.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:pe.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{},enableMobileFullScreen:!1,coinbasePreference:"all"}),R={state:O,subscribeKey(e,t){return ce(O,e,t)},setOptions(e){Object.assign(O,e)},setRemoteFeatures(e){var n,o;if(!e)return;const t={...O.remoteFeatures,...e};O.remoteFeatures=t,(n=O.remoteFeatures)!=null&&n.socials&&(O.remoteFeatures.socials=Vn.filterSocialsByPlatform(O.remoteFeatures.socials)),(o=O.features)!=null&&o.pay&&(O.remoteFeatures.email=!1,O.remoteFeatures.socials=!1)},setFeatures(e){var n;if(!e)return;O.features||(O.features=pe.DEFAULT_FEATURES);const t={...O.features,...e};O.features=t,(n=O.features)!=null&&n.pay&&O.remoteFeatures&&(O.remoteFeatures.email=!1,O.remoteFeatures.socials=!1)},setProjectId(e){O.projectId=e},setCustomRpcUrls(e){O.customRpcUrls=e},setAllWallets(e){O.allWallets=e},setIncludeWalletIds(e){O.includeWalletIds=e},setExcludeWalletIds(e){O.excludeWalletIds=e},setFeaturedWalletIds(e){O.featuredWalletIds=e},setTokens(e){O.tokens=e},setTermsConditionsUrl(e){O.termsConditionsUrl=e},setPrivacyPolicyUrl(e){O.privacyPolicyUrl=e},setCustomWallets(e){O.customWallets=e},setIsSiweEnabled(e){O.isSiweEnabled=e},setIsUniversalProvider(e){O.isUniversalProvider=e},setSdkVersion(e){O.sdkVersion=e},setMetadata(e){O.metadata=e},setDisableAppend(e){O.disableAppend=e},setEIP6963Enabled(e){O.enableEIP6963=e},setDebug(e){O.debug=e},setEnableWalletGuide(e){O.enableWalletGuide=e},setEnableAuthLogger(e){O.enableAuthLogger=e},setEnableWallets(e){O.enableWallets=e},setPreferUniversalLinks(e){O.experimental_preferUniversalLinks=e},setSIWX(e){if(e)for(const[t,n]of Object.entries(pe.SIWX_DEFAULTS))e[t]??(e[t]=n);O.siwx=e},setConnectMethodsOrder(e){O.features={...O.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){O.features={...O.features,walletFeaturesOrder:e}},setSocialsOrder(e){O.remoteFeatures={...O.remoteFeatures,socials:e}},setCollapseWallets(e){O.features={...O.features,collapseWallets:e}},setEnableEmbedded(e){O.enableEmbedded=e},setAllowUnsupportedChain(e){O.allowUnsupportedChain=e},setManualWCControl(e){O.manualWCControl=e},setEnableNetworkSwitch(e){O.enableNetworkSwitch=e},setEnableMobileFullScreen(e){O.enableMobileFullScreen=S.isMobile()&&e},setEnableReconnect(e){O.enableReconnect=e},setCoinbasePreference(e){O.coinbasePreference=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,n])=>{n&&(O.defaultAccountTypes[t]=n)})},setUniversalProviderConfigOverride(e){O.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return O.universalProviderConfigOverride},getSnapshot(){return xt(O)}},Et=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),de=se({...Et}),Ds={state:de,subscribeKey(e,t){return ce(de,e,t)},showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){const t=S.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){de.message=Et.message,de.variant=Et.variant,de.svg=Et.svg,de.open=Et.open,de.autoClose=Et.autoClose},_showMessage({message:e,svg:t,variant:n="success",autoClose:o=Et.autoClose}){de.open?(de.open=!1,setTimeout(()=>{de.message=e,de.variant=n,de.svg=t,de.open=!0,de.autoClose=o},150)):(de.message=e,de.variant=n,de.svg=t,de.open=!0,de.autoClose=o)}},_e=Ds,Ls={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Ho=S.getBlockchainApiUrl(),Ae=se({clientId:null,api:new Rt({baseUrl:Ho,clientId:null}),supportedChains:{http:[],ws:[]}}),B={state:Ae,async get(e){const{st:t,sv:n}=B.getSdkProperties(),o=R.state.projectId,s={...e.params||{},st:t,sv:n,projectId:o};return Ae.api.get({...e,params:s})},getSdkProperties(){const{sdkType:e,sdkVersion:t}=R.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{Ae.supportedChains.http.length||await B.getSupportedNetworks()}catch{return!1}return Ae.supportedChains.http.includes(e)},async getSupportedNetworks(){try{const e=await B.get({path:"v1/supported-chains"});return Ae.supportedChains=e,e}catch{return Ae.supportedChains}},async fetchIdentity({address:e}){const t=y.getIdentityFromCacheForAddress(e);if(t)return t;const n=await B.get({path:`/v1/identity/${e}`,params:{sender:d.state.activeCaipAddress?S.getPlainAddress(d.state.activeCaipAddress):void 0}});return y.updateIdentityCache({address:e,identity:n,timestamp:Date.now()}),n},async fetchTransactions({account:e,cursor:t,signal:n,cache:o,chainId:s}){var c;if(!await B.isNetworkSupported((c=d.state.activeCaipNetwork)==null?void 0:c.caipNetworkId))return{data:[],next:void 0};const r=y.getTransactionsCacheForAddress({address:e,chainId:s});if(r)return r;const i=await B.get({path:`/v1/account/${e}/history`,params:{cursor:t,chainId:s},signal:n,cache:o});return y.updateTransactionsCache({address:e,chainId:s,timestamp:Date.now(),transactions:i}),i},async fetchSwapQuote({amount:e,userAddress:t,from:n,to:o,gasPrice:s}){var r;return await B.isNetworkSupported((r=d.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?B.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:n,to:o,gasPrice:s}}):{quotes:[]}},async fetchSwapTokens({chainId:e}){var n;return await B.isNetworkSupported((n=d.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?B.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}},async getAddressBalance({caipNetworkId:e,address:t}){return Ae.api.post({path:`/v1?chainId=${e}&projectId=${R.state.projectId}`,body:{id:"1",jsonrpc:"2.0",method:"getAddressBalance",params:{address:t}}}).then(n=>n.result)},async fetchTokenPrice({addresses:e,caipNetworkId:t=(n=>(n=d.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)()}){if(!await B.isNetworkSupported(t))return{fungibles:[]};const s=y.getTokenPriceCacheForAddresses(e);if(s)return s;const a=await Ae.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:R.state.projectId},headers:{"Content-Type":"application/json"}});return y.updateTokenPriceCache({addresses:e,timestamp:Date.now(),tokenPrice:a}),a},async fetchSwapAllowance({tokenAddress:e,userAddress:t}){var o;return await B.isNetworkSupported((o=d.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?B.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:e}){var s;const{st:t,sv:n}=B.getSdkProperties();if(!await B.isNetworkSupported((s=d.state.activeCaipNetwork)==null?void 0:s.caipNetworkId))throw new Error("Network not supported for Gas Price");return B.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:n}})},async generateSwapCalldata({amount:e,from:t,to:n,userAddress:o,disableEstimate:s}){var r;if(!await B.isNetworkSupported((r=d.state.activeCaipNetwork)==null?void 0:r.caipNetworkId))throw new Error("Network not supported for Swaps");return Ae.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:pe.CONVERT_SLIPPAGE_TOLERANCE},projectId:R.state.projectId,from:t,to:n,userAddress:o,disableEstimate:s}})},async generateApproveCalldata({from:e,to:t,userAddress:n}){var r;const{st:o,sv:s}=B.getSdkProperties();if(!await B.isNetworkSupported((r=d.state.activeCaipNetwork)==null?void 0:r.caipNetworkId))throw new Error("Network not supported for Swaps");return B.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:n,from:e,to:t,st:o,sv:s}})},async getBalance(e,t,n){var h;const{st:o,sv:s}=B.getSdkProperties();if(!await B.isNetworkSupported((h=d.state.activeCaipNetwork)==null?void 0:h.caipNetworkId))return _e.showError("Token Balance Unavailable"),{balances:[]};const r=`${t}:${e}`,i=y.getBalanceCacheForCaipAddress(r);if(i)return i;const c=await B.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:n,st:o,sv:s}});return y.updateBalanceCache({caipAddress:r,balance:c,timestamp:Date.now()}),c},async lookupEnsName(e){var n;return await B.isNetworkSupported((n=d.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?B.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:e}){var o,s;if(!await B.isNetworkSupported((o=d.state.activeCaipNetwork)==null?void 0:o.caipNetworkId))return[];const n=(s=d.getAccountData())==null?void 0:s.address;return B.get({path:`/v1/profile/reverse/${e}`,params:{sender:n,apiVersion:"2"}})},async getEnsNameSuggestions(e){var n;return await B.isNetworkSupported((n=d.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?B.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:e,address:t,message:n,signature:o}){var a;return await B.isNetworkSupported((a=d.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)?Ae.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:n,signature:o},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:n,purchaseAmount:o,paymentAmount:s}){var i;return await B.isNetworkSupported((i=d.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?(await Ae.api.post({path:"/v1/generators/onrampurl",params:{projectId:R.state.projectId},body:{destinationWallets:e,defaultNetwork:n,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:o,presetFiatAmount:s}})).url:""},async getOnrampOptions(){var t;if(!await B.isNetworkSupported((t=d.state.activeCaipNetwork)==null?void 0:t.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await B.get({path:"/v1/onramp/options"})}catch{return Ls}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:n,network:o}){var s;try{return await B.isNetworkSupported((s=d.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?await Ae.api.post({path:"/v1/onramp/quote",params:{projectId:R.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:n,network:o}}):null}catch{return{networkFee:{amount:n,currency:t.id},paymentSubtotal:{amount:n,currency:t.id},paymentTotal:{amount:n,currency:t.id},purchaseAmount:{amount:n,currency:t.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){var n;return await B.isNetworkSupported((n=d.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?B.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,n){var s;return await B.isNetworkSupported((s=d.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?Ae.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:R.state.projectId},body:{pci:t,signature:n}}):{success:!1}},setClientId(e){Ae.clientId=e,Ae.api=new Rt({baseUrl:Ho,clientId:e})}},Ws=Object.freeze({enabled:!0,events:[]}),Bs=new Rt({baseUrl:S.getAnalyticsUrl(),clientId:null}),Ms=5,Fs=60*1e3,it=se({...Ws}),Hs={state:it,subscribeKey(e,t){return ce(it,e,t)},async sendError(e,t){if(!it.enabled)return;const n=Date.now();if(it.events.filter(a=>{const r=new Date(a.properties.timestamp||"").getTime();return n-r<Fs}).length>=Ms)return;const s={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};it.events.push(s);try{if(typeof window>"u")return;const{projectId:a,sdkType:r,sdkVersion:i}=R.state;await Bs.post({path:"/e",params:{projectId:a,st:r,sv:i||"html-wagmi-4.2.2"},body:{eventId:S.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){it.enabled=!0},disable(){it.enabled=!1},clearEvents(){it.events=[]}};class Tt extends Error{constructor(t,n,o){super(t),this.originalName="AppKitError",this.name="AppKitError",this.category=n,this.originalError=o,o&&o instanceof Error&&(this.originalName=o.name),Object.setPrototypeOf(this,Tt.prototype);let s=!1;if(o instanceof Error&&typeof o.stack=="string"&&o.stack){const a=o.stack,r=a.indexOf(`
`);if(r>-1){const i=a.substring(r+1);this.stack=`${this.name}: ${this.message}
${i}`,s=!0}}s||(Error.captureStackTrace?Error.captureStackTrace(this,Tt):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function go(e,t){let n="";try{e instanceof Error?n=e.message:typeof e=="string"?n=e:typeof e=="object"&&e!==null?Object.keys(e).length===0?n="Unknown error":n=(e==null?void 0:e.message)||JSON.stringify(e):n=String(e)}catch(s){n="Unknown error",console.error("Error parsing error message",s)}const o=e instanceof Tt?e:new Tt(n,t,e);throw Hs.sendError(o,o.category),o}function at(e,t="INTERNAL_SDK_ERROR"){const n={};return Object.keys(e).forEach(o=>{const s=e[o];if(typeof s=="function"){let a=s;s.constructor.name==="AsyncFunction"?a=async(...r)=>{try{return await s(...r)}catch(i){return go(i,t)}}:a=(...r)=>{try{return s(...r)}catch(i){return go(i,t)}},n[o]=a}else n[o]=s}),n}const ke=se({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),js={state:ke,subscribeNetworkImages(e){return we(ke.networkImages,()=>e(ke.networkImages))},subscribeKey(e,t){return ce(ke,e,t)},subscribe(e){return we(ke,()=>e(ke))},setWalletImage(e,t){ke.walletImages[e]=t},setNetworkImage(e,t){ke.networkImages[e]=t},setChainImage(e,t){ke.chainImages[e]=t},setConnectorImage(e,t){ke.connectorImages={...ke.connectorImages,[e]:t}},setTokenImage(e,t){ke.tokenImages[e]=t},setCurrencyImage(e,t){ke.currencyImages[e]=t}},$e=at(js),wo={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:"",sui:"",stacks:"",ton:"20f673c0-095e-49b2-07cf-eb5049dcf600"},kt=se({networkImagePromises:{},tokenImagePromises:{}}),Oe={async fetchWalletImage(e){if(e)return await I._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;const t=this.getNetworkImageById(e);return t||(kt.networkImagePromises[e]||(kt.networkImagePromises[e]=I._fetchNetworkImage(e)),await kt.networkImagePromises[e],this.getNetworkImageById(e))},async fetchTokenImage(e){if(e)return kt.tokenImagePromises[e]||(kt.tokenImagePromises[e]=I._fetchTokenImage(e)),await kt.tokenImagePromises[e],this.getTokenImage(e)},getWalletImageById(e){if(e)return $e.state.walletImages[e]},getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return $e.state.walletImages[e.image_id]},getNetworkImage(e){var t,n,o;if((t=e==null?void 0:e.assets)!=null&&t.imageUrl)return(n=e==null?void 0:e.assets)==null?void 0:n.imageUrl;if((o=e==null?void 0:e.assets)!=null&&o.imageId)return $e.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return $e.state.networkImages[e]},getConnectorImage(e){var t;if(e!=null&&e.imageUrl)return e.imageUrl;if((t=e==null?void 0:e.info)!=null&&t.icon)return e.info.icon;if(e!=null&&e.imageId)return $e.state.connectorImages[e.imageId]},getChainImage(e){return $e.state.networkImages[wo[e]]},getTokenImage(e){if(e)return $e.state.tokenImages[e]},getWalletImageUrl(e){if(!e)return"";const{projectId:t,sdkType:n,sdkVersion:o}=R.state,s=new URL(`${f.W3M_API_URL}/getWalletImage/${e}`);return s.searchParams.set("projectId",t),s.searchParams.set("st",n),s.searchParams.set("sv",o),s.toString()},getAssetImageUrl(e){if(!e)return"";const{projectId:t,sdkType:n,sdkVersion:o}=R.state,s=new URL(`${f.W3M_API_URL}/public/getAssetImage/${e}`);return s.searchParams.set("projectId",t),s.searchParams.set("st",n),s.searchParams.set("sv",o),s.toString()},getChainNamespaceImageUrl(e){return this.getAssetImageUrl(wo[e])},async getImageByToken(e,t){if(e==="native"){const o=f.NATIVE_IMAGE_IDS_BY_NAMESPACE[t]??null;return o?Oe.fetchNetworkImage(o):void 0}const[,n]=Object.entries(f.TOKEN_SYMBOLS_BY_ADDRESS).find(([o])=>o.toLowerCase()===e.toLowerCase())??[];if(n)return Oe.fetchTokenImage(n)}},Re={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"},BINANCE:{id:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",appId:"yFK5FCqYprrXDiVFbhyRx7",deeplink:"bnc://app.binance.com/mp/app",url:"https://app.binance.com/en/download"}},Vs={handleMobileDeeplinkRedirect(e,t){const n=window.location.href,o=encodeURIComponent(n);if(e===Re.PHANTOM.id&&!("phantom"in window)){const s=n.startsWith("https")?"https":"http",a=n.split("/")[2],r=encodeURIComponent(`${s}://${a}`);window.location.href=`${Re.PHANTOM.url}/ul/browse/${o}?ref=${r}`}if(e===Re.SOLFLARE.id&&!("solflare"in window)&&(window.location.href=`${Re.SOLFLARE.url}/ul/v1/browse/${o}?ref=${o}`),t===f.CHAIN.SOLANA&&e===Re.COINBASE.id&&!("coinbaseSolana"in window)&&(window.location.href=`${Re.COINBASE.url}/dapp?cb_url=${o}`),t===f.CHAIN.BITCOIN&&e===Re.BINANCE.id&&!("binancew3w"in window)){const s=d.state.activeCaipNetwork,a=window.btoa("/pages/browser/index"),r=window.btoa(`url=${o}&defaultChainId=${(s==null?void 0:s.id)??1}`),i=new URL(Re.BINANCE.deeplink);i.searchParams.set("appId",Re.BINANCE.appId),i.searchParams.set("startPagePath",a),i.searchParams.set("startPageQuery",r);const c=new URL(Re.BINANCE.url);c.searchParams.set("_dp",window.btoa(i.toString())),window.location.href=c.toString()}}},Ks=S.getAnalyticsUrl(),zs=new Rt({baseUrl:Ks,clientId:null}),qs=["MODAL_CREATED"],Gs=45,Co=1e3*10,ie=se({timestamp:Date.now(),lastFlush:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"},pendingEvents:[],subscribedToVisibilityChange:!1,walletImpressions:[]}),Y={state:ie,subscribe(e){return we(ie,()=>e(ie))},getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=R.state;return{projectId:e,st:t,sv:n||"html-wagmi-4.2.2"}},shouldFlushEvents(){const e=JSON.stringify(ie.pendingEvents).length/1024>Gs,t=ie.lastFlush+Co<Date.now();return e||t},_setPendingEvent(e){var t,n;try{let o=(t=d.getAccountData())==null?void 0:t.address;if("address"in e.data&&e.data.address&&(o=e.data.address),qs.includes(e.data.event)||typeof window>"u")return;const s=(n=d.getActiveCaipNetwork())==null?void 0:n.caipNetworkId;this.state.pendingEvents.push({eventId:S.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:o,properties:{..."properties"in e.data?e.data.properties:{},caipNetworkId:s}}}),ie.reportedErrors.FORBIDDEN=!1,Y.shouldFlushEvents()&&Y._submitPendingEvents()}catch(o){console.warn("_setPendingEvent",o)}},sendEvent(e){var n;ie.timestamp=Date.now(),ie.data=e;const t=["INITIALIZE","CONNECT_SUCCESS","SOCIAL_LOGIN_SUCCESS"];((n=R.state.features)!=null&&n.analytics||t.includes(e.event))&&Y._setPendingEvent(ie),this.subscribeToFlushTriggers()},sendWalletImpressionEvent(e){ie.walletImpressions.push(e)},_transformPendingEventsForBatch(e){try{return e.filter(t=>t.props.event!=="WALLET_IMPRESSION_V2")}catch{return e}},_submitPendingEvents(){if(ie.lastFlush=Date.now(),!(ie.pendingEvents.length===0&&ie.walletImpressions.length===0))try{const e=Y._transformPendingEventsForBatch(ie.pendingEvents);ie.walletImpressions.length&&e.push({eventId:S.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:Date.now(),props:{type:"track",event:"WALLET_IMPRESSION_V2",items:[...ie.walletImpressions]}}),zs.sendBeacon({path:"/batch",params:Y.getSdkProperties(),body:e}),ie.reportedErrors.FORBIDDEN=!1,ie.pendingEvents=[],ie.walletImpressions=[]}catch{ie.reportedErrors.FORBIDDEN=!0}},subscribeToFlushTriggers(){var e,t,n;ie.subscribedToVisibilityChange||typeof document>"u"||(ie.subscribedToVisibilityChange=!0,(e=document==null?void 0:document.addEventListener)==null||e.call(document,"visibilitychange",()=>{document.visibilityState==="hidden"&&Y._submitPendingEvents()}),(t=document==null?void 0:document.addEventListener)==null||t.call(document,"freeze",()=>{Y._submitPendingEvents()}),(n=window==null?void 0:window.addEventListener)==null||n.call(window,"pagehide",()=>{Y._submitPendingEvents()}),setInterval(()=>{Y._submitPendingEvents()},Co))}},Ys=S.getApiUrl(),Ne=new Rt({baseUrl:Ys,clientId:null}),Js=40,yo=4,Qs=20,$=se({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1,explorerWallets:[],explorerFilteredWallets:[],plan:{tier:"none",hasExceededUsageLimit:!1,limits:{isAboveRpcLimit:!1,isAboveMauLimit:!1}}}),I={state:$,subscribeKey(e,t){return ce($,e,t)},_getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=R.state;return{projectId:e,st:t||"appkit",sv:n||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return R.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){const t=`${Ne.baseUrl}/getWalletImage/${e}`,n=await Ne.getBlob({path:t,params:I._getSdkProperties()});$e.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${Ne.baseUrl}/public/getAssetImage/${e}`,n=await Ne.getBlob({path:t,params:I._getSdkProperties()});$e.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${Ne.baseUrl}/public/getAssetImage/${e}`,n=await Ne.getBlob({path:t,params:I._getSdkProperties()});$e.setConnectorImage(e,URL.createObjectURL(n))},async _fetchCurrencyImage(e){const t=`${Ne.baseUrl}/public/getCurrencyImage/${e}`,n=await Ne.getBlob({path:t,params:I._getSdkProperties()});$e.setCurrencyImage(e,URL.createObjectURL(n))},async _fetchTokenImage(e){const t=`${Ne.baseUrl}/public/getTokenImage/${e}`,n=await Ne.getBlob({path:t,params:I._getSdkProperties()});$e.setTokenImage(e,URL.createObjectURL(n))},_filterWalletsByPlatform(e){const t=e.length,n=S.isMobile()?e==null?void 0:e.filter(s=>s.mobile_link||s.webapp_link?!0:Object.values(Re).map(r=>r.id).includes(s.id)):e,o=t-n.length;return{filteredWallets:n,mobileFilteredOutWalletsLength:o}},async fetchProjectConfig(){return(await Ne.get({path:"/appkit/v1/config",params:I._getSdkProperties()})).features},async fetchUsage(){try{const e=await Ne.get({path:"/appkit/v1/project-limits",params:I._getSdkProperties()}),{tier:t,isAboveMauLimit:n,isAboveRpcLimit:o}=e.planLimits,s=t==="starter",a=n||o;I.state.plan={tier:t,hasExceededUsageLimit:s&&a,limits:{isAboveRpcLimit:o,isAboveMauLimit:n}}}catch(e){console.warn("Failed to fetch usage",e)}},async fetchAllowedOrigins(){try{const{allowedOrigins:e}=await Ne.get({path:"/projects/v1/origins",params:I._getSdkProperties()});return e}catch(e){if(e instanceof Error&&e.cause instanceof Response){const t=e.cause.status;if(t===f.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)throw new Error("RATE_LIMITED",{cause:e});if(t>=f.HTTP_STATUS_CODES.SERVER_ERROR&&t<600)throw new Error("SERVER_ERROR",{cause:e});return[]}return[]}},async fetchNetworkImages(){const e=d.getAllRequestedCaipNetworks(),t=e==null?void 0:e.map(({assets:n})=>n==null?void 0:n.imageId).filter(Boolean).filter(n=>!Oe.getNetworkImageById(n));t&&await Promise.allSettled(t.map(n=>I._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=w.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>I._fetchConnectorImage(n)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>I._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>I._fetchTokenImage(t)))},async fetchWallets(e){var r;const t=e.exclude??[];I._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(Re).map(i=>i.id));const o=await Ne.get({path:"/getWallets",params:{...I._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:(r=e.include)==null?void 0:r.join(","),exclude:t.join(",")}}),{filteredWallets:s,mobileFilteredOutWalletsLength:a}=I._filterWalletsByPlatform(o==null?void 0:o.data);return{data:s||[],count:o==null?void 0:o.count,mobileFilteredOutWalletsLength:a}},async prefetchWalletRanks(){const e=w.state.connectors;if(!(e!=null&&e.length))return;const t={page:1,entries:20,badge:"certified"};if(t.names=e.map(s=>s.name).join(","),d.state.activeChain===f.CHAIN.EVM){const s=[...e.flatMap(a=>{var r;return((r=a.connectors)==null?void 0:r.map(i=>{var c;return(c=i.info)==null?void 0:c.rdns}))||[]}),...e.map(a=>{var r;return(r=a.info)==null?void 0:r.rdns})].filter(a=>typeof a=="string"&&a.length>0);s.length&&(t.rdns=s.join(","))}const{data:n}=await I.fetchWallets(t);$.explorerWallets=n,w.extendConnectorsWithExplorerWallets(n);const o=d.getRequestedCaipNetworkIds().join(",");$.explorerFilteredWallets=n.filter(s=>{var a;return(a=s.chains)==null?void 0:a.some(r=>o.includes(r))})},async fetchFeaturedWallets(){const{featuredWalletIds:e}=R.state;if(e!=null&&e.length){const t={...I._getSdkProperties(),page:1,entries:(e==null?void 0:e.length)??yo,include:e},{data:n}=await I.fetchWallets(t),o=[...n].sort((a,r)=>e.indexOf(a.id)-e.indexOf(r.id)),s=o.map(a=>a.image_id).filter(Boolean);await Promise.allSettled(s.map(a=>I._fetchWalletImage(a))),$.featured=o,$.allFeatured=o}},async fetchRecommendedWallets(){try{$.isFetchingRecommendedWallets=!0;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=R.state,o=[...t??[],...n??[]].filter(Boolean),s=d.getRequestedCaipNetworkIds().join(","),a={page:1,entries:yo,include:e,exclude:o,chains:s},{data:r,count:i}=await I.fetchWallets(a),c=y.getRecentWallets(),h=r.map(g=>g.image_id).filter(Boolean),m=c.map(g=>g.image_id).filter(Boolean);await Promise.allSettled([...h,...m].map(g=>I._fetchWalletImage(g))),$.recommended=r,$.allRecommended=r,$.count=i??0}catch{}finally{$.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:o}=R.state,s=d.getRequestedCaipNetworkIds().join(","),a=[...$.recommended.map(({id:g})=>g),...n??[],...o??[]].filter(Boolean),r={page:e,entries:Js,include:t,exclude:a,chains:s},{data:i,count:c,mobileFilteredOutWalletsLength:h}=await I.fetchWallets(r);$.mobileFilteredOutWalletsLength=h+($.mobileFilteredOutWalletsLength??0);const m=i.slice(0,Qs).map(g=>g.image_id).filter(Boolean);await Promise.allSettled(m.map(g=>I._fetchWalletImage(g))),$.wallets=S.uniqueBy([...$.wallets,...I._filterOutExtensions(i)],"id").filter(g=>{var W;return(W=g.chains)==null?void 0:W.some(j=>s.includes(j))}),$.count=c>$.count?c:$.count,$.page=e},async initializeExcludedWallets({ids:e}){const t={page:1,entries:e.length,include:e},{data:n}=await I.fetchWallets(t);n&&n.forEach(o=>{$.excludedWallets.push({rdns:o.rdns,name:o.name})})},async searchWallet({search:e,badge:t}){const{includeWalletIds:n,excludeWalletIds:o}=R.state,s=d.getRequestedCaipNetworkIds().join(",");$.search=[];const a={page:1,entries:100,search:e==null?void 0:e.trim(),badge_type:t,include:n,exclude:o,chains:s},{data:r}=await I.fetchWallets(a);Y.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});const i=r.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...i.map(c=>I._fetchWalletImage(c)),S.wait(300)]),$.search=I._filterOutExtensions(r)},initPromise(e,t){const n=$.promises[e];return n||($.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:n=!0,fetchNetworkImages:o=!0,fetchWalletRanks:s=!0}={}){const a=[e&&I.initPromise("connectorImages",I.fetchConnectorImages),t&&I.initPromise("featuredWallets",I.fetchFeaturedWallets),n&&I.initPromise("recommendedWallets",I.fetchRecommendedWallets),o&&I.initPromise("networkImages",I.fetchNetworkImages),s&&I.initPromise("walletRanks",I.prefetchWalletRanks)].filter(Boolean);return Promise.allSettled(a)},prefetchAnalyticsConfig(){var e;(e=R.state.features)!=null&&e.analytics&&I.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:e}=await Ne.get({path:"/getAnalyticsConfig",params:I._getSdkProperties()});R.setFeatures({analytics:e})}catch{R.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!(e!=null&&e.length)){$.featured=$.allFeatured,$.recommended=$.allRecommended;return}const t=d.getRequestedCaipNetworkIds().join(",");$.featured=$.allFeatured.filter(n=>{var o;return(o=n.chains)==null?void 0:o.some(s=>t.includes(s))}),$.recommended=$.allRecommended.filter(n=>{var o;return(o=n.chains)==null?void 0:o.some(s=>t.includes(s))}),$.filteredWallets=$.wallets.filter(n=>{var o;return(o=n.chains)==null?void 0:o.some(s=>t.includes(s))})},clearFilterByNamespaces(){$.filteredWallets=[]},setFilterByNamespace(e){if(!e){$.featured=$.allFeatured,$.recommended=$.allRecommended;return}const t=d.getRequestedCaipNetworkIds().join(",");$.featured=$.allFeatured.filter(n=>{var o;return(o=n.chains)==null?void 0:o.some(s=>t.includes(s))}),$.recommended=$.allRecommended.filter(n=>{var o;return(o=n.chains)==null?void 0:o.some(s=>t.includes(s))}),$.filteredWallets=$.wallets.filter(n=>{var o;return(o=n.chains)==null?void 0:o.some(s=>t.includes(s))})}},Nt={filterOutDuplicatesByRDNS(e){const t=R.state.enableEIP6963?w.state.connectors:[],n=y.getRecentWallets(),o=t.map(i=>{var c;return(c=i.info)==null?void 0:c.rdns}).filter(Boolean),s=n.map(i=>i.rdns).filter(Boolean),a=o.concat(s);if(a.includes("io.metamask.mobile")&&S.isMobile()){const i=a.indexOf("io.metamask.mobile");a[i]="io.metamask"}return e.filter(i=>!(i!=null&&i.rdns&&a.includes(String(i.rdns))||!(i!=null&&i.rdns)&&t.some(h=>h.name===i.name)))},filterOutDuplicatesByIds(e){const t=w.state.connectors.filter(i=>i.type==="ANNOUNCED"||i.type==="INJECTED"||i.type==="MULTI_CHAIN"),n=y.getRecentWallets(),o=t.map(i=>{var c;return i.explorerId||((c=i.explorerWallet)==null?void 0:c.id)||i.id}),s=n.map(i=>i.id),a=o.concat(s);return e.filter(i=>!a.includes(i==null?void 0:i.id))},filterOutDuplicateWallets(e){const t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){const{connectors:t}=w.state,{featuredWalletIds:n}=R.state,o=t.filter(r=>r.type==="ANNOUNCED").reduce((r,i)=>{var c;return(c=i.info)!=null&&c.rdns&&(r[i.info.rdns]=!0),r},{});return e.map(r=>({...r,installed:!!r.rdns&&!!o[r.rdns??""]})).sort((r,i)=>{const c=Number(i.installed)-Number(r.installed);if(c!==0)return c;if(n!=null&&n.length){const h=n.indexOf(r.id),m=n.indexOf(i.id);if(h!==-1&&m!==-1)return h-m;if(h!==-1)return-1;if(m!==-1)return 1}return 0})},getConnectOrderMethod(e,t){var c;const n=(e==null?void 0:e.connectMethodsOrder)||((c=R.state.features)==null?void 0:c.connectMethodsOrder),o=t||w.state.connectors;if(n)return n;const{injected:s,announced:a}=Se.getConnectorsByType(o,I.state.recommended,I.state.featured),r=s.filter(Se.showConnector),i=a.filter(Se.showConnector);return r.length||i.length?["wallet","email","social"]:pe.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(e){const t=!!e.rdns&&I.state.excludedWallets.some(o=>o.rdns===e.rdns),n=!!e.name&&I.state.excludedWallets.some(o=>Bo.isLowerCaseMatch(o.name,e.name));return t||n},markWalletsWithDisplayIndex(e){return e.map((t,n)=>({...t,display_index:n}))},filterWalletsByWcSupport(e){return E.state.wcBasic?e.filter(t=>t.supports_wc):S.isMobile()?e.filter(t=>t.supports_wc||pe.MANDATORY_WALLET_IDS_ON_MOBILE.includes(t.id)):e},getWalletConnectWallets(e){var a;const t=[...I.state.featured,...I.state.recommended];((a=I.state.filteredWallets)==null?void 0:a.length)>0?t.push(...I.state.filteredWallets):t.push(...e);const n=S.uniqueBy(t,"id"),o=Nt.markWalletsAsInstalled(n),s=Nt.filterWalletsByWcSupport(o);return Nt.markWalletsWithDisplayIndex(s)}},Se={getConnectorsByType(e,t,n){const{customWallets:o}=R.state,s=y.getRecentWallets(),a=Nt.filterOutDuplicateWallets(t),r=Nt.filterOutDuplicateWallets(n),i=e.filter(g=>g.type==="MULTI_CHAIN"),c=e.filter(g=>g.type==="ANNOUNCED"),h=e.filter(g=>g.type==="INJECTED"),m=e.filter(g=>g.type==="EXTERNAL");return{custom:o,recent:s,external:m,multiChain:i,announced:c,injected:h,recommended:a,featured:r}},showConnector(e){var s;const t=(s=e.info)==null?void 0:s.rdns,n=!!t&&I.state.excludedWallets.some(a=>!!a.rdns&&a.rdns===t),o=!!e.name&&I.state.excludedWallets.some(a=>Bo.isLowerCaseMatch(a.name,e.name));return!(e.type==="INJECTED"&&(e.name==="Browser Wallet"&&(!S.isMobile()||S.isMobile()&&!t&&!E.checkInstalled())||n||o)||(e.type==="ANNOUNCED"||e.type==="EXTERNAL")&&(n||o))},getIsConnectedWithWC(){return Array.from(d.state.chains.values()).some(n=>w.getConnectorId(n.namespace)===f.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:e,featured:t,custom:n,recent:o,announced:s,injected:a,multiChain:r,external:i,overriddenConnectors:c=(h=>(h=R.state.features)==null?void 0:h.connectorTypeOrder)()??[]}){const g=[{type:"walletConnect",isEnabled:!0},{type:"recent",isEnabled:o.length>0},{type:"injected",isEnabled:[...a,...s,...r].length>0},{type:"featured",isEnabled:t.length>0},{type:"custom",isEnabled:n&&n.length>0},{type:"external",isEnabled:i.length>0},{type:"recommended",isEnabled:e.length>0}].filter(F=>F.isEnabled),W=new Set(g.map(F=>F.type)),j=c.filter(F=>W.has(F)).map(F=>({type:F,isEnabled:!0})),M=g.filter(({type:F})=>!j.some(({type:Xe})=>Xe===F));return Array.from(new Set([...j,...M].map(({type:F})=>F)))},sortConnectorsByExplorerWallet(e){return[...e].sort((t,n)=>t.explorerWallet&&n.explorerWallet?(t.explorerWallet.order??0)-(n.explorerWallet.order??0):t.explorerWallet?-1:n.explorerWallet?1:0)},getPriority(e){return e.id===f.CONNECTOR_ID.BASE_ACCOUNT?0:e.id===f.CONNECTOR_ID.COINBASE||e.id===f.CONNECTOR_ID.COINBASE_SDK?1:2},sortConnectorsByPriority(e){return[...e].sort((t,n)=>Se.getPriority(t)-Se.getPriority(n))},getAuthName({email:e,socialUsername:t,socialProvider:n}){return t?n&&n==="discord"&&t.endsWith("0")?t.slice(0,-1):t:e.length>30?`${e.slice(0,-3)}...`:e},async fetchProviderData(e){var t,n;try{if(e.name==="Browser Wallet"&&!S.isMobile())return{accounts:[],chainId:void 0};if(e.id===f.CONNECTOR_ID.AUTH)return{accounts:[],chainId:void 0};const[o,s]=await Promise.all([(t=e.provider)==null?void 0:t.request({method:"eth_accounts"}),(n=e.provider)==null?void 0:n.request({method:"eth_chainId"}).then(a=>Number(a))]);return{accounts:o,chainId:s}}catch(o){return console.warn(`Failed to fetch provider data for ${e.name}`,o),{accounts:[],chainId:void 0}}},getFilteredCustomWallets(e){const t=y.getRecentWallets(),n=w.state.connectors.map(r=>{var i;return(i=r.info)==null?void 0:i.rdns}).filter(Boolean),o=t.map(r=>r.rdns).filter(Boolean),s=n.concat(o);if(s.includes("io.metamask.mobile")&&S.isMobile()){const r=s.indexOf("io.metamask.mobile");s[r]="io.metamask"}return e.filter(r=>!s.includes(String(r==null?void 0:r.rdns)))},hasWalletConnector(e){return w.state.connectors.some(t=>t.id===e.id||t.name===e.name)},isWalletCompatibleWithCurrentChain(e){const t=d.state.activeChain;return t&&e.chains?e.chains.some(n=>{const o=n.split(":")[0];return t===o}):!0},getFilteredRecentWallets(){return y.getRecentWallets().filter(n=>!Nt.isExcluded(n)).filter(n=>!this.hasWalletConnector(n)).filter(n=>this.isWalletCompatibleWithCurrentChain(n))},getCappedRecommendedWallets(e){const{connectors:t}=w.state,{customWallets:n,featuredWalletIds:o}=R.state,s=t.find(Ee=>Ee.id==="walletConnect"),a=t.filter(Ee=>Ee.type==="INJECTED"||Ee.type==="ANNOUNCED"||Ee.type==="MULTI_CHAIN");if(!s&&!a.length&&!(n!=null&&n.length))return[];const r=Vn.isEmailEnabled(),i=Vn.isSocialsEnabled(),c=a.filter(Ee=>Ee.name!=="Browser Wallet"&&Ee.name!=="WalletConnect"),h=(o==null?void 0:o.length)||0,m=(n==null?void 0:n.length)||0,g=c.length||0,W=r?1:0,j=i?1:0,M=h+m+g+W+j,ae=Math.max(0,4-M);return ae<=0?[]:Nt.filterOutDuplicateWallets(e).slice(0,ae)},processConnectorsByType(e,t=!0){const n=Se.sortConnectorsByExplorerWallet([...e]);return t?n.filter(Se.showConnector):n},connectorList(){const e=Se.getConnectorsByType(w.state.connectors,I.state.recommended,I.state.featured),t=this.processConnectorsByType(e.announced.filter(j=>j.id!=="walletConnect")),n=this.processConnectorsByType(e.injected),o=this.processConnectorsByType(e.multiChain.filter(j=>j.name!=="WalletConnect"),!1),s=e.custom,a=e.recent,r=this.processConnectorsByType(e.external.filter(j=>j.id!==f.CONNECTOR_ID.COINBASE_SDK&&j.id!==f.CONNECTOR_ID.BASE_ACCOUNT)),i=e.recommended,c=e.featured,h=Se.getConnectorTypeOrder({custom:s,recent:a,announced:t,injected:n,multiChain:o,recommended:i,featured:c,external:r}),m=w.state.connectors.find(j=>j.id==="walletConnect"),g=S.isMobile(),W=[];for(const j of h)switch(j){case"walletConnect":{!g&&m&&W.push({kind:"connector",subtype:"walletConnect",connector:m});break}case"recent":{Se.getFilteredRecentWallets().forEach(F=>W.push({kind:"wallet",subtype:"recent",wallet:F}));break}case"injected":{o.forEach(M=>W.push({kind:"connector",subtype:"multiChain",connector:M})),t.forEach(M=>W.push({kind:"connector",subtype:"announced",connector:M})),n.forEach(M=>W.push({kind:"connector",subtype:"injected",connector:M}));break}case"featured":{c.forEach(M=>W.push({kind:"wallet",subtype:"featured",wallet:M}));break}case"custom":{Se.getFilteredCustomWallets(s??[]).forEach(F=>W.push({kind:"wallet",subtype:"custom",wallet:F}));break}case"external":{r.forEach(M=>W.push({kind:"connector",subtype:"external",connector:M}));break}case"recommended":{Se.getCappedRecommendedWallets(i).forEach(F=>W.push({kind:"wallet",subtype:"recommended",wallet:F}));break}default:console.warn(`Unknown connector type: ${j}`)}return W},hasInjectedConnectors(){return w.state.connectors.filter(e=>(e.type==="INJECTED"||e.type==="ANNOUNCED"||e.type==="MULTI_CHAIN")&&e.name!=="Browser Wallet"&&e.name!=="WalletConnect").length}},Xs=["ConnectingExternal","ConnectingMultiChain","ConnectingSocial","ConnectingFarcaster"],Z=se({view:"Connect",history:["Connect"],transactionStack:[]}),Zs={state:Z,subscribeKey(e,t){return ce(Z,e,t)},pushTransactionStack(e){Z.transactionStack.push(e)},popTransactionStack(e){const t=Z.transactionStack.pop();if(!t)return;const{onSuccess:n,onError:o,onCancel:s}=t;switch(e){case"success":n==null||n();break;case"error":o==null||o(),L.goBack();break;case"cancel":s==null||s(),L.goBack();break}},push(e,t){let n=e,o=t;I.state.plan.hasExceededUsageLimit&&Xs.includes(e)&&(n="UsageExceeded",o=void 0),n!==Z.view&&(Z.view=n,Z.history.push(n),Z.data=o)},reset(e,t){Z.view=e,Z.history=[e],Z.data=t},replace(e,t){Z.history.at(-1)===e||(Z.view=e,Z.history[Z.history.length-1]=e,Z.data=t)},goBack(){var o,s;const e=d.state.activeCaipAddress,t=L.state.view==="ConnectingFarcaster",n=!e&&t;if(Z.history.length>1){Z.history.pop();const[a]=Z.history.slice(-1);a&&(e&&a==="Connect"?Z.view="Account":Z.view=a)}else ee.close();(o=Z.data)!=null&&o.wallet&&(Z.data.wallet=void 0),(s=Z.data)!=null&&s.redirectView&&(Z.data.redirectView=void 0),setTimeout(()=>{var a,r,i;if(n){d.setAccountProp("farcasterUrl",void 0,d.state.activeChain);const c=w.getAuthConnector();(a=c==null?void 0:c.provider)==null||a.reload();const h=xt(R.state);(i=(r=c==null?void 0:c.provider)==null?void 0:r.syncDappData)==null||i.call(r,{metadata:h.metadata,sdkVersion:h.sdkVersion,projectId:h.projectId,sdkType:h.sdkType})}},100)},goBackToIndex(e){if(Z.history.length>1){Z.history=Z.history.slice(0,e+1);const[t]=Z.history.slice(-1);t&&(Z.view=t)}},goBackOrCloseModal(){L.state.history.length>1?L.goBack():ee.close()}},L=at(Zs),Ze=se({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Kn={state:Ze,subscribe(e){return we(Ze,()=>e(Ze))},setThemeMode(e){Ze.themeMode=e;try{const t=w.getAuthConnector();if(t){const n=Kn.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:n,w3mThemeVariables:wn(n,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){Ze.themeVariables={...Ze.themeVariables,...e};try{const t=w.getAuthConnector();if(t){const n=Kn.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:n,w3mThemeVariables:wn(Ze.themeVariables,Ze.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return xt(Ze)}},on=at(Kn),jo=Object.fromEntries(Mo.map(e=>[e,void 0])),ea=Object.fromEntries(Mo.map(e=>[e,!0])),q=se({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:jo,filterByNamespaceMap:ea}),ta={state:q,subscribe(e){return we(q,()=>{e(q)})},subscribeKey(e,t){return ce(q,e,t)},initialize(e){e.forEach(t=>{const n=y.getConnectedConnectorId(t);n&&w.setConnectorId(n,t)})},setActiveConnector(e){e&&(q.activeConnector=jt(e))},setConnectors(e){e.filter(s=>!q.allConnectors.some(a=>a.id===s.id&&w.getConnectorName(a.name)===w.getConnectorName(s.name)&&a.chain===s.chain)).forEach(s=>{s.type!=="MULTI_CHAIN"&&q.allConnectors.push(jt(s))});const n=w.getEnabledNamespaces(),o=w.getEnabledConnectors(n);q.connectors=w.mergeMultiChainConnectors(o)},filterByNamespaces(e){Object.keys(q.filterByNamespaceMap).forEach(t=>{q.filterByNamespaceMap[t]=!1}),e.forEach(t=>{q.filterByNamespaceMap[t]=!0}),w.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){q.filterByNamespaceMap[e]=t,w.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){const e=w.getEnabledNamespaces(),t=w.getEnabledConnectors(e),n=w.areAllNamespacesEnabled();q.connectors=w.mergeMultiChainConnectors(t),n?I.clearFilterByNamespaces():I.filterByNamespaces(e)},getEnabledNamespaces(){return Object.entries(q.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e)},getEnabledConnectors(e){return q.allConnectors.filter(t=>e.includes(t.chain))},areAllNamespacesEnabled(){return Object.values(q.filterByNamespaceMap).every(e=>e)},mergeMultiChainConnectors(e){const t=w.generateConnectorMapByName(e),n=[];return t.forEach(o=>{const s=o[0],a=(s==null?void 0:s.id)===f.CONNECTOR_ID.AUTH;o.length>1&&s?n.push({name:s.name,imageUrl:s.imageUrl,imageId:s.imageId,connectors:[...o],type:a?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(s==null?void 0:s.id)||""}):s&&n.push(s)}),n},generateConnectorMapByName(e){const t=new Map;return e.forEach(n=>{const{name:o}=n,s=w.getConnectorName(o);if(!s)return;const a=t.get(s)||[];a.find(i=>i.chain===n.chain)||a.push(n),t.set(s,a)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){const t=[];return e.forEach(n=>{t.find(o=>o.chain===n.chain)||t.push(n)}),t},addConnector(e){var t,n,o;if(e.id===f.CONNECTOR_ID.AUTH){const s=e,a=xt(R.state),r=on.getSnapshot().themeMode,i=on.getSnapshot().themeVariables;(n=(t=s==null?void 0:s.provider)==null?void 0:t.syncDappData)==null||n.call(t,{metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType}),(o=s==null?void 0:s.provider)==null||o.syncTheme({themeMode:r,themeVariables:i,w3mThemeVariables:wn(i,r)}),w.setConnectors([e])}else w.setConnectors([e])},getAuthConnector(e){var o;const t=e||d.state.activeChain,n=q.connectors.find(s=>s.id===f.CONNECTOR_ID.AUTH);if(n)return(o=n==null?void 0:n.connectors)!=null&&o.length?n.connectors.find(a=>a.chain===t):n},getAnnouncedConnectorRdns(){return q.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>{var t;return(t=e.info)==null?void 0:t.rdns})},getConnectorById(e){return Se.sortConnectorsByPriority(q.allConnectors).find(n=>n.id===e)},getConnector({id:e,namespace:t}){const n=t||d.state.activeChain,o=q.allConnectors.filter(r=>r.chain===n);return Se.sortConnectorsByPriority(o).find(r=>r.id===e||r.explorerId===e)},syncIfAuthConnector(e){var a,r;if(e.id!=="AUTH")return;const t=e,n=xt(R.state),o=on.getSnapshot().themeMode,s=on.getSnapshot().themeVariables;(r=(a=t==null?void 0:t.provider)==null?void 0:a.syncDappData)==null||r.call(a,{metadata:n.metadata,sdkVersion:n.sdkVersion,sdkType:n.sdkType,projectId:n.projectId}),t.provider.syncTheme({themeMode:o,themeVariables:s,w3mThemeVariables:wn(s,o)})},getConnectorsByNamespace(e){const t=q.allConnectors.filter(n=>n.chain===e);return w.mergeMultiChainConnectors(t)},canSwitchToSmartAccount(e){return d.checkIfSmartAccountEnabled()&&pt(e)===ut.ACCOUNT_TYPES.EOA},selectWalletConnector(e){var s;const t=(s=L.state.data)==null?void 0:s.redirectView,n=d.state.activeChain,o=n?w.getConnector({id:e.id,namespace:n}):void 0;Vs.handleMobileDeeplinkRedirect((o==null?void 0:o.explorerId)||e.id,d.state.activeChain),o?L.push("ConnectingExternal",{connector:o,wallet:e,redirectView:t}):L.push("ConnectingWalletConnect",{wallet:e,redirectView:t})},getConnectors(e){return e?w.getConnectorsByNamespace(e):w.mergeMultiChainConnectors(q.allConnectors)},setFilterByNamespace(e){q.filterByNamespace=e,q.connectors=w.getConnectors(e),I.setFilterByNamespace(e)},setConnectorId(e,t){e&&(q.activeConnectorIds={...q.activeConnectorIds,[t]:e},y.setConnectedConnectorId(t,e))},removeConnectorId(e){q.activeConnectorIds={...q.activeConnectorIds,[e]:void 0},y.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return q.activeConnectorIds[e]},isConnected(e){return e?!!q.activeConnectorIds[e]:Object.values(q.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){q.activeConnectorIds={...jo}},extendConnectorsWithExplorerWallets(e){q.allConnectors.forEach(o=>{const s=e.find(a=>{var r;return a.id===o.id||a.rdns&&a.rdns===((r=o.info)==null?void 0:r.rdns)});s&&(o.explorerWallet=s)});const t=w.getEnabledNamespaces(),n=w.getEnabledConnectors(t);q.connectors=w.mergeMultiChainConnectors(n)},async connect(e={}){const{namespace:t}=e;return w.setFilterByNamespace(t),L.push("Connect",{addWalletForNamespace:t}),new Promise((n,o)=>{if(t){const s=d.subscribeChainProp("accountState",r=>{r!=null&&r.caipAddress&&(n({caipAddress:r==null?void 0:r.caipAddress}),s())},t),a=ee.subscribeKey("open",r=>{r||(o(new Error("Modal closed")),a())})}else{const s=d.subscribeKey("activeCaipAddress",r=>{r&&(n({caipAddress:r}),s())}),a=ee.subscribeKey("open",r=>{r||(o(new Error("Modal closed")),a())})}})}},w=at(ta),na=1e3,Mt={checkNamespaceConnectorId(e,t){return w.getConnectorId(e)===t},isSocialProvider(e){return pe.DEFAULT_REMOTE_FEATURES.socials.includes(e)},connectWalletConnect({walletConnect:e,connector:t,closeModalOnConnect:n=!0,redirectViewOnModalClose:o="Connect",onOpen:s,onConnect:a}){return new Promise((r,i)=>{if(e&&w.setActiveConnector(t),s==null||s(S.isMobile()&&e),o){const h=ee.subscribeKey("open",m=>{m||(L.state.view!==o&&L.replace(o),h(),i(new Error("Modal closed")))})}const c=d.subscribeKey("activeCaipAddress",h=>{h&&(a==null||a(),n&&ee.close(),c(),r(ne.parseCaipAddress(h)))})})},connectExternal(e){return new Promise((t,n)=>{const o=d.subscribeKey("activeCaipAddress",s=>{s&&(ee.close(),o(),t(ne.parseCaipAddress(s)))});E.connectExternal(e,e.chain).catch(()=>{o(),n(new Error("Connection rejected"))})})},connectSocial({social:e,namespace:t,closeModalOnConnect:n=!0,onOpenFarcaster:o,onConnect:s}){let a,r=!1,i=null;const c=t||d.state.activeChain,h=d.subscribeKey("activeCaipAddress",m=>{m&&(n&&ee.close(),h())});return new Promise((m,g)=>{async function W(M){var F;if((F=M.data)!=null&&F.resultUri)if(M.origin===f.SECURE_SITE_SDK_ORIGIN){window.removeEventListener("message",W,!1);try{const ae=w.getAuthConnector(c);if(ae&&!r){a&&a.close(),r=!0;const Xe=M.data.resultUri;Y.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:e}}),y.setConnectedSocialProvider(e),await E.connectExternal({id:ae.id,type:ae.type,socialUri:Xe},ae.chain);const Ee=d.state.activeCaipAddress;if(!Ee){g(new Error("Failed to connect"));return}m(ne.parseCaipAddress(Ee)),Y.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:e}})}}catch(ae){Y.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:S.parseError(ae)}}),g(new Error("Failed to connect"))}}else Y.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:"Untrusted Origin"}})}async function j(){if(Y.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"){o==null||o();const M=ee.subscribeKey("open",ae=>{!ae&&e==="farcaster"&&(g(new Error("Popup closed")),s==null||s(),M())}),F=w.getAuthConnector();if(F){const ae=d.getAccountData(c);if(!(ae!=null&&ae.farcasterUrl))try{const{url:Xe}=await F.provider.getFarcasterUri();d.setAccountProp("farcasterUrl",Xe,c)}catch{g(new Error("Failed to connect to farcaster"))}}}else{const M=w.getAuthConnector();i=S.returnOpenHref(`${f.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes");try{if(M){const{uri:F}=await M.provider.getSocialRedirectUri({provider:e});if(i&&F){i.location.href=F,a=i;const ae=setInterval(()=>{a!=null&&a.closed&&!r&&(g(new Error("Popup closed")),clearInterval(ae))},1e3);window.addEventListener("message",W,!1)}else i==null||i.close(),g(new Error("Failed to initiate social connection"))}}catch{g(new Error("Failed to initiate social connection")),i==null||i.close()}}}j()})},connectEmail({closeModalOnConnect:e=!0,redirectViewOnModalClose:t="Connect",onOpen:n,onConnect:o}){return new Promise((s,a)=>{if(n==null||n(),t){const i=ee.subscribeKey("open",c=>{c||(L.state.view!==t&&L.replace(t),i(),a(new Error("Modal closed")))})}const r=d.subscribeKey("activeCaipAddress",i=>{i&&(o==null||o(),e&&ee.close(),r(),s(ne.parseCaipAddress(i)))})})},async updateEmail(){const e=y.getConnectedConnectorId(d.state.activeChain),t=w.getAuthConnector();if(!t)throw new Error("No auth connector found");if(e!==f.CONNECTOR_ID.AUTH)throw new Error("Not connected to email or social");const n=t.provider.getEmail()??"";return await ee.open({view:"UpdateEmailWallet",data:{email:n,redirectView:void 0}}),new Promise((o,s)=>{const a=setInterval(()=>{const i=t.provider.getEmail()??"";i!==n&&(ee.close(),clearInterval(a),r(),o({email:i}))},na),r=ee.subscribeKey("open",i=>{i||(L.state.view!=="Connect"&&L.push("Connect"),clearInterval(a),r(),s(new Error("Modal closed")))})})},canSwitchToSmartAccount(e){return d.checkIfSmartAccountEnabled()&&pt(e)===ut.ACCOUNT_TYPES.EOA}};function Vo(){var o,s;const e=((o=d.state.activeCaipNetwork)==null?void 0:o.chainNamespace)||"eip155",t=((s=d.state.activeCaipNetwork)==null?void 0:s.id)||1,n=pe.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${n}`}function bo(e){return pe.NATIVE_TOKEN_ADDRESS[e]}function pt(e){var n;return(n=d.getAccountData(e))==null?void 0:n.preferredAccountType}const Ko={getConnectionStatus(e,t){const n=w.state.activeConnectorIds[t],o=E.getConnections(t);return!!n&&e.connectorId===n?"connected":o.some(r=>r.connectorId.toLowerCase()===e.connectorId.toLowerCase())?"active":"disconnected"},excludeConnectorAddressFromConnections({connections:e,connectorId:t,addresses:n}){return e.map(o=>{if((t?o.connectorId.toLowerCase()===t.toLowerCase():!1)&&n){const a=o.accounts.filter(r=>!n.some(c=>c.toLowerCase()===r.address.toLowerCase()));return{...o,accounts:a}}return o})},excludeExistingConnections(e,t){const n=new Set(e);return t.filter(o=>!n.has(o.connectorId))},getConnectionsByConnectorId(e,t){return e.filter(n=>n.connectorId.toLowerCase()===t.toLowerCase())},getConnectionsData(e){var i;const t=!!((i=R.state.remoteFeatures)!=null&&i.multiWallet),n=w.state.activeConnectorIds[e],o=E.getConnections(e),a=(E.state.recentConnections.get(e)??[]).filter(c=>w.getConnectorById(c.connectorId)),r=Ko.excludeExistingConnections([...o.map(c=>c.connectorId),...n?[n]:[]],a);return t?{connections:o,recentConnections:r}:{connections:o.filter(c=>c.connectorId.toLowerCase()===(n==null?void 0:n.toLowerCase())),recentConnections:[]}},onConnectMobile(e){const t=E.state.wcUri;if(e!=null&&e.mobile_link&&t)try{E.setWcError(!1);const{mobile_link:n,link_mode:o,name:s}=e,{redirect:a,redirectUniversalLink:r,href:i}=S.formatNativeUrl(n,t,o),c=a,h=r,m=S.isIframe()?"_top":"_self";E.setWcLinking({name:s,href:i}),E.setRecentWallet(e),R.state.experimental_preferUniversalLinks&&h?S.openHref(h,m):S.openHref(c,m)}catch(n){Y.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:n instanceof Error?n.message:"Error parsing the deep link",uri:t,mobile_link:e.mobile_link,name:e.name}}),E.setWcError(!0)}}},_t=se({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1,connectingWallet:void 0}),ot={state:_t,subscribe(e){return we(_t,()=>e(_t))},subscribeOpen(e){return ce(_t,"open",e)},set(e){Object.assign(_t,{..._t,...e})}},re=se({transactions:[],transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),oa={state:re,subscribe(e){return we(re,()=>e(re))},setLastNetworkInView(e){re.lastNetworkInView=e},async fetchTransactions(e){var t;if(!e)throw new Error("Transactions can't be fetched without an accountAddress");re.loading=!0;try{const n=await B.fetchTransactions({account:e,cursor:re.next,chainId:(t=d.state.activeCaipNetwork)==null?void 0:t.caipNetworkId}),o=hn.filterSpamTransactions(n.data),s=hn.filterByConnectedChain(o),a=[...re.transactions,...s];re.loading=!1,re.transactions=a,re.transactionsByYear=hn.groupTransactionsByYearAndMonth(re.transactionsByYear,s),re.empty=a.length===0,re.next=n.next?n.next:void 0}catch{const o=d.state.activeChain;Y.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:R.state.projectId,cursor:re.next,isSmartAccount:pt(o)===ut.ACCOUNT_TYPES.SMART_ACCOUNT}}),_e.showError("Failed to fetch transactions"),re.loading=!1,re.empty=!0,re.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const n=e;return t.forEach(o=>{const s=new Date(o.metadata.minedAt).getFullYear(),a=new Date(o.metadata.minedAt).getMonth(),r=n[s]??{},c=(r[a]??[]).filter(h=>h.id!==o.id);n[s]={...r,[a]:[...c,o].sort((h,m)=>new Date(m.metadata.minedAt).getTime()-new Date(h.metadata.minedAt).getTime())}}),n},filterSpamTransactions(e){return e.filter(t=>{var o;return!((o=t.transfers)==null?void 0:o.every(s=>{var a;return((a=s.nft_info)==null?void 0:a.flags.is_spam)===!0}))})},filterByConnectedChain(e){var o;const t=(o=d.state.activeCaipNetwork)==null?void 0:o.caipNetworkId;return e.filter(s=>s.metadata.chain===t)},clearCursor(){re.next=void 0},resetTransactions(){re.transactions=[],re.transactionsByYear={},re.lastNetworkInView=void 0,re.loading=!1,re.empty=!1,re.next=void 0}},hn=at(oa,"API_ERROR"),V=se({connections:new Map,recentConnections:new Map,isSwitchingConnection:!1,wcError:!1,wcFetchingUri:!1,buffering:!1,status:"disconnected"});let bt;const sa={state:V,subscribe(e){return we(V,()=>e(V))},subscribeKey(e,t){return ce(V,e,t)},_getClient(){return V._client},setClient(e){V._client=jt(e)},initialize(e){const t=e.filter(n=>!!n.namespace).map(n=>n.namespace);E.syncStorageConnections(t)},syncStorageConnections(e){const t=y.getConnections(),n=e??Array.from(d.state.chains.keys());for(const o of n){const s=t[o]??[],a=new Map(V.recentConnections);a.set(o,s),V.recentConnections=a}},getConnections(e){return e?V.connections.get(e)??[]:[]},hasAnyConnection(e){const t=E.state.connections;return Array.from(t.values()).flatMap(n=>n).some(({connectorId:n})=>n===e)},async connectWalletConnect({cache:e="auto"}={}){var n,o,s,a;V.wcFetchingUri=!0;const t=S.isTelegram()||S.isSafari()&&S.isIos();if(e==="always"||e==="auto"&&t){if(bt){await bt,bt=void 0;return}if(!S.isPairingExpired(V==null?void 0:V.wcPairingExpiry)){const r=V.wcUri;V.wcUri=r;return}bt=(o=(n=E._getClient())==null?void 0:n.connectWalletConnect)==null?void 0:o.call(n).catch(()=>{}),E.state.status="connecting",await bt,bt=void 0,V.wcPairingExpiry=void 0,E.state.status="connected"}else await((a=(s=E._getClient())==null?void 0:s.connectWalletConnect)==null?void 0:a.call(s))},async connectExternal(e,t,n=!0){var r,i,c;const o=await((i=(r=E._getClient())==null?void 0:r.connectExternal)==null?void 0:i.call(r,e));n&&d.setActiveNamespace(t);const s=w.state.allConnectors.find(h=>h.id===(e==null?void 0:e.id)),a=e.type==="AUTH"?"email":"browser";return Y.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:a,name:(s==null?void 0:s.name)||"Unknown",view:L.state.view,walletRank:(c=s==null?void 0:s.explorerWallet)==null?void 0:c.order}}),o},async reconnectExternal(e){var n,o;await((o=(n=E._getClient())==null?void 0:n.reconnectExternal)==null?void 0:o.call(n,e));const t=e.chain||d.state.activeChain;t&&w.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){var o;if(!t)return;ee.setLoading(!0,d.state.activeChain);const n=w.getAuthConnector();n&&(d.setAccountProp("preferredAccountType",e,t),await n.provider.setPreferredAccount(e),y.setPreferredAccountTypes(Object.entries(d.state.chains).reduce((s,[a,r])=>{const i=a,c=pt(i);return c!==void 0&&(s[i]=c),s},{})),await E.reconnectExternal(n),ee.setLoading(!1,d.state.activeChain),Y.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:((o=d.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||""}}))},async signMessage(e){var t;return(t=E._getClient())==null?void 0:t.signMessage(e)},parseUnits(e,t){var n;return(n=E._getClient())==null?void 0:n.parseUnits(e,t)},formatUnits(e,t){var n;return(n=E._getClient())==null?void 0:n.formatUnits(e,t)},updateBalance(e){var t;return(t=E._getClient())==null?void 0:t.updateBalance(e)},async sendTransaction(e){var t;return(t=E._getClient())==null?void 0:t.sendTransaction(e)},async getCapabilities(e){var t;return(t=E._getClient())==null?void 0:t.getCapabilities(e)},async grantPermissions(e){var t;return(t=E._getClient())==null?void 0:t.grantPermissions(e)},async walletGetAssets(e){var t;return((t=E._getClient())==null?void 0:t.walletGetAssets(e))??{}},async estimateGas(e){var t;return(t=E._getClient())==null?void 0:t.estimateGas(e)},async writeContract(e){var t;return(t=E._getClient())==null?void 0:t.writeContract(e)},async writeSolanaTransaction(e){var t;return(t=E._getClient())==null?void 0:t.writeSolanaTransaction(e)},async getEnsAddress(e){var t;return(t=E._getClient())==null?void 0:t.getEnsAddress(e)},async getEnsAvatar(e){var t;return(t=E._getClient())==null?void 0:t.getEnsAvatar(e)},checkInstalled(e){var t,n;return((n=(t=E._getClient())==null?void 0:t.checkInstalled)==null?void 0:n.call(t,e))||!1},resetWcConnection(){V.wcUri=void 0,V.wcPairingExpiry=void 0,V.wcLinking=void 0,V.recentWallet=void 0,V.wcFetchingUri=!1,V.status="disconnected",hn.resetTransactions(),y.deleteWalletConnectDeepLink(),y.deleteRecentWallet(),ot.set({connectingWallet:void 0})},resetUri(){V.wcUri=void 0,V.wcPairingExpiry=void 0,bt=void 0,V.wcFetchingUri=!1,ot.set({connectingWallet:void 0})},finalizeWcConnection(e){var o,s;const{wcLinking:t,recentWallet:n}=E.state;t&&y.setWalletConnectDeepLink(t),n&&y.setAppKitRecent(n),e&&Y.sendEvent({type:"track",event:"CONNECT_SUCCESS",address:e,properties:{method:t?"mobile":"qrcode",name:((s=(o=L.state.data)==null?void 0:o.wallet)==null?void 0:s.name)||"Unknown",view:L.state.view,walletRank:n==null?void 0:n.order}})},setWcBasic(e){V.wcBasic=e},setUri(e){V.wcUri=e,V.wcFetchingUri=!1,V.wcPairingExpiry=S.getPairingExpiry()},setWcLinking(e){V.wcLinking=e},setWcError(e){V.wcError=e,V.wcFetchingUri=!1,V.buffering=!1},setRecentWallet(e){V.recentWallet=e},setBuffering(e){V.buffering=e},setStatus(e){V.status=e},setIsSwitchingConnection(e){V.isSwitchingConnection=e},async disconnect({id:e,namespace:t,initialDisconnect:n}={}){var o;try{await((o=E._getClient())==null?void 0:o.disconnect({id:e,chainNamespace:t,initialDisconnect:n}))}catch(s){throw new Tt("Failed to disconnect","INTERNAL_SDK_ERROR",s)}},async disconnectConnector({id:e,namespace:t}){var n;try{await((n=E._getClient())==null?void 0:n.disconnectConnector({id:e,namespace:t}))}catch(o){throw new Tt("Failed to disconnect connector","INTERNAL_SDK_ERROR",o)}},setConnections(e,t){const n=new Map(V.connections);n.set(t,e),V.connections=n},async handleAuthAccountSwitch({address:e,namespace:t}){var a,r;const n=d.getAccountData(t),o=(r=(a=n==null?void 0:n.user)==null?void 0:a.accounts)==null?void 0:r.find(i=>i.type==="smartAccount"),s=o&&o.address.toLowerCase()===e.toLowerCase()&&Mt.canSwitchToSmartAccount(t)?"smartAccount":"eoa";await E.setPreferredAccountType(s,t)},async handleActiveConnection({connection:e,namespace:t,address:n}){const o=w.getConnectorById(e.connectorId),s=e.connectorId===f.CONNECTOR_ID.AUTH;if(!o)throw new Error(`No connector found for connection: ${e.connectorId}`);if(s)n&&await E.handleAuthAccountSwitch({address:n,namespace:t});else{const a=await E.connectExternal({id:o.id,type:o.type,provider:o.provider,address:n,chain:t},t);return a==null?void 0:a.address}return n},async handleDisconnectedConnection({connection:e,namespace:t,address:n,closeModalOnConnect:o}){var h,m;const s=w.getConnectorById(e.connectorId),a=(m=(h=e.auth)==null?void 0:h.name)==null?void 0:m.toLowerCase(),r=e.connectorId===f.CONNECTOR_ID.AUTH,i=e.connectorId===f.CONNECTOR_ID.WALLET_CONNECT;if(!s)throw new Error(`No connector found for connection: ${e.connectorId}`);let c;if(r)if(a&&Mt.isSocialProvider(a)){const{address:g}=await Mt.connectSocial({social:a,closeModalOnConnect:o,onOpenFarcaster(){ee.open({view:"ConnectingFarcaster"})},onConnect(){L.replace("ProfileWallets")}});c=g}else{const{address:g}=await Mt.connectEmail({closeModalOnConnect:o,onOpen(){ee.open({view:"EmailLogin"})},onConnect(){L.replace("ProfileWallets")}});c=g}else if(i){const{address:g}=await Mt.connectWalletConnect({walletConnect:!0,connector:s,closeModalOnConnect:o,onOpen(W){const j=W?"AllWallets":"ConnectingWalletConnect";ee.state.open?L.push(j):ee.open({view:j})},onConnect(){L.replace("ProfileWallets")}});c=g}else{const g=await E.connectExternal({id:s.id,type:s.type,provider:s.provider,chain:t},t);g&&(c=g.address)}return r&&n&&await E.handleAuthAccountSwitch({address:n,namespace:t}),c},async switchConnection({connection:e,address:t,namespace:n,closeModalOnConnect:o,onChange:s}){var c;let a;const r=(c=d.getAccountData(n))==null?void 0:c.caipAddress;if(r){const{address:h}=ne.parseCaipAddress(r);a=h}const i=Ko.getConnectionStatus(e,n);switch(i){case"connected":case"active":{const h=await E.handleActiveConnection({connection:e,namespace:n,address:t});if(a&&h){const m=h.toLowerCase()!==a.toLowerCase();s==null||s({address:h,namespace:n,hasSwitchedAccount:m,hasSwitchedWallet:i==="active"})}break}case"disconnected":{const h=await E.handleDisconnectedConnection({connection:e,namespace:n,address:t,closeModalOnConnect:o});h&&(s==null||s({address:h,namespace:n,hasSwitchedAccount:!0,hasSwitchedWallet:!0}));break}default:throw new Error(`Invalid connection status: ${i}`)}}},E=at(sa),Un={createBalance(e,t){const n={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:n.name,symbol:n.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:n.value,price:n.price,quantity:{decimals:n.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:n.decimals})},iconUrl:n.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return Po(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){const t=e.split(":");if(t.length<2||!t[1])return"0x0";const n=t[1],o=parseInt(n,10);return isNaN(o)?"0x0":`0x${o.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(n=>this.isValidAsset(n)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}};let $n;async function Eo(){if(!$n){const{createPublicClient:e,http:t,defineChain:n}=await Xo(async()=>{const{createPublicClient:o,http:s,defineChain:a}=await import("./index-rF4UFtN5.js");return{createPublicClient:o,http:s,defineChain:a}},__vite__mapDeps([0,1,2,3,4]));$n={createPublicClient:e,http:t,defineChain:n}}return $n}const zn={getBlockchainApiRpcUrl(e,t){const n=new URL("https://rpc.walletconnect.org/v1/");return n.searchParams.set("chainId",e),n.searchParams.set("projectId",t),n.toString()},async getViemChain(e){const{defineChain:t}=await Eo(),{chainId:n}=ne.parseCaipNetworkId(e.caipNetworkId);return t({...e,id:Number(n)})},async createViemPublicClient(e){const{createPublicClient:t,http:n}=await Eo(),o=R.state.projectId,s=await zn.getViemChain(e);if(!s)throw new Error(`Chain ${e.caipNetworkId} not found in viem/chains`);return t({chain:s,transport:n(zn.getBlockchainApiRpcUrl(e.caipNetworkId,o))})}},Sn={async getMyTokensWithBalance(e={forceUpdate:void 0,caipNetwork:d.state.activeCaipNetwork,address:(t=>(t=d.getAccountData())==null?void 0:t.address)()}){const{forceUpdate:n,caipNetwork:o,address:s}=e,a=w.getConnectorId("eip155")===f.CONNECTOR_ID.AUTH;if(!s)return[];const r=o?`${o.caipNetworkId}:${s}`:s,i=y.getBalanceCacheForCaipAddress(r);if(i)return i.balances;if(o&&o.chainNamespace===f.CHAIN.EVM&&a){const h=await this.getEIP155Balances(s,o);if(h)return this.filterLowQualityTokens(h)}const c=await B.getBalance(s,o==null?void 0:o.caipNetworkId,n);return this.filterLowQualityTokens(c.balances)},async getEIP155Balances(e,t){var n,o;try{const s=Un.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),a=await E.getCapabilities(e);if(!((o=(n=a==null?void 0:a[s])==null?void 0:n.assetDiscovery)!=null&&o.supported))return null;const r=await E.walletGetAssets({account:e,chainFilter:[s]});if(!Un.isWalletGetAssetsResponse(r))return null;const c=(r[s]||[]).map(h=>Un.createBalance(h,t.caipNetworkId));return y.updateBalanceCache({caipAddress:`${t.caipNetworkId}:${e}`,balance:{balances:c},timestamp:Date.now()}),c}catch{return null}},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},async fetchERC20Balance({caipAddress:e,assetAddress:t,caipNetwork:n}){const o=await zn.createViemPublicClient(n),{address:s}=ne.parseCaipAddress(e),[{result:a},{result:r},{result:i},{result:c}]=await o.multicall({contracts:[{address:t,functionName:"name",args:[],abi:Zt},{address:t,functionName:"symbol",args:[],abi:Zt},{address:t,functionName:"balanceOf",args:[s],abi:Zt},{address:t,functionName:"decimals",args:[],abi:Zt}]});return{name:a,symbol:r,decimals:c,balance:i&&c?Po(i,c):"0"}}},Dn={adapters:{}},aa={state:Dn,initialize(e){Dn.adapters={...e}},get(e){return Dn.adapters[e]}},Cn={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:void 0},ve=se({providers:{...Cn},providerIds:{...Cn}}),zo={state:ve,subscribeKey(e,t){return ce(ve,e,t)},subscribe(e){return we(ve,()=>{e(ve)})},subscribeProviders(e){return we(ve.providers,()=>e(ve.providers))},setProvider(e,t){e&&t&&(ve.providers[e]=jt(t))},getProvider(e){if(e)return ve.providers[e]},setProviderId(e,t){t&&(ve.providerIds[e]=t)},getProviderId(e){if(e)return ve.providerIds[e]},reset(){ve.providers={...Cn},ve.providerIds={...Cn}},resetChain(e){ve.providers[e]=void 0,ve.providerIds[e]=void 0}},ra={async getTokenList(e){var o;const t=await B.fetchSwapTokens({chainId:e});return((o=t==null?void 0:t.tokens)==null?void 0:o.map(s=>({...s,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){var t;const e=d.state.activeCaipNetwork;if(!e)return null;try{switch(e.chainNamespace){case"solana":const n=(t=await(E==null?void 0:E.estimateGas({chainNamespace:"solana"})))==null?void 0:t.toString();return{standard:n,fast:n,instant:n};case"eip155":default:return await B.fetchGasPrice({chainId:e.caipNetworkId})}}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:n,sourceTokenDecimals:o}){const s=await B.fetchSwapAllowance({tokenAddress:e,userAddress:t});if(s!=null&&s.allowance&&n&&o){const a=E.parseUnits(n,o)||0;return BigInt(s.allowance)>=a}return!1},async getMyTokensWithBalance(e){var n;const t=await Sn.getMyTokensWithBalance({forceUpdate:e,caipNetwork:d.state.activeCaipNetwork,address:(n=d.getAccountData())==null?void 0:n.address});return d.setAccountProp("tokenBalance",t,d.state.activeChain),this.mapBalancesToSwapTokens(t)},mapBalancesToSwapTokens(e){return(e==null?void 0:e.map(t=>({...t,address:t!=null&&t.address?t.address:Vo(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1})))||[]},async handleSwapError(e){var t,n;try{const o=e==null?void 0:e.cause;if(!(o!=null&&o.json))return;const s=await o.json(),a=(n=(t=s==null?void 0:s.reasons)==null?void 0:t[0])==null?void 0:n.description;return a!=null&&a.includes("insufficient liquidity")?"Insufficient liquidity":void 0}catch{return}}},G=se({tokenBalances:[],loading:!1}),ia={state:G,subscribe(e){return we(G,()=>e(G))},subscribeKey(e,t){return ce(G,e,t)},setToken(e){e&&(G.token=jt(e))},setTokenAmount(e){G.sendTokenAmount=e},setReceiverAddress(e){G.receiverAddress=e},setReceiverProfileImageUrl(e){G.receiverProfileImageUrl=e},setReceiverProfileName(e){G.receiverProfileName=e},setNetworkBalanceInUsd(e){G.networkBalanceInUSD=e},setLoading(e){G.loading=e},getSdkEventProperties(e){var t,n;return{message:S.parseError(e),isSmartAccount:pt(d.state.activeChain)===ut.ACCOUNT_TYPES.SMART_ACCOUNT,token:((t=G.token)==null?void 0:t.symbol)||"",amount:G.sendTokenAmount??0,network:((n=d.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||""}},async sendToken(){var e;try{switch(K.setLoading(!0),(e=d.state.activeCaipNetwork)==null?void 0:e.chainNamespace){case"eip155":await K.sendEvmToken();return;case"solana":await K.sendSolanaToken();return;default:throw new Error("Unsupported chain")}}catch(t){throw tt.isUserRejectedRequestError(t)?new Us(t):t}finally{K.setLoading(!1)}},async sendEvmToken(){var n,o,s;const e=d.state.activeChain;if(!e)throw new Error("SendController:sendEvmToken - activeChainNamespace is required");const t=pt(e);if(!K.state.sendTokenAmount||!K.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!K.state.token)throw new Error("A token is required");if((n=K.state.token)!=null&&n.address){Y.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===ut.ACCOUNT_TYPES.SMART_ACCOUNT,token:K.state.token.address,amount:K.state.sendTokenAmount,network:((o=d.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||""}});const{hash:a}=await K.sendERC20Token({receiverAddress:K.state.receiverAddress,tokenAddress:K.state.token.address,sendTokenAmount:K.state.sendTokenAmount,decimals:K.state.token.quantity.decimals});a&&(G.hash=a)}else{Y.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===ut.ACCOUNT_TYPES.SMART_ACCOUNT,token:K.state.token.symbol||"",amount:K.state.sendTokenAmount,network:((s=d.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||""}});const{hash:a}=await K.sendNativeToken({receiverAddress:K.state.receiverAddress,sendTokenAmount:K.state.sendTokenAmount,decimals:K.state.token.quantity.decimals});a&&(G.hash=a)}},async fetchTokenBalance(e){var r,i,c;G.loading=!0;const t=d.state.activeChain,n=(r=d.state.activeCaipNetwork)==null?void 0:r.caipNetworkId,o=(i=d.state.activeCaipNetwork)==null?void 0:i.chainNamespace,s=((c=d.getAccountData(t))==null?void 0:c.caipAddress)??d.state.activeCaipAddress,a=s?S.getPlainAddress(s):void 0;if(G.lastRetry&&!S.isAllowedRetry(G.lastRetry,30*pe.ONE_SEC_MS))return G.loading=!1,[];try{if(a&&n&&o){const h=await Sn.getMyTokensWithBalance();return G.tokenBalances=h,G.lastRetry=void 0,h}}catch(h){G.lastRetry=Date.now(),e==null||e(h),_e.showError("Token Balance Unavailable")}finally{G.loading=!1}return[]},fetchNetworkBalance(){if(G.tokenBalances.length===0)return;const e=ra.mapBalancesToSwapTokens(G.tokenBalances);if(!e)return;const t=e.find(n=>n.address===Vo());t&&(G.networkBalanceInUSD=t?be.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){var r,i,c,h;L.pushTransactionStack({});const t=e.receiverAddress,n=(r=d.getAccountData())==null?void 0:r.address,o=E.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),a=await E.sendTransaction({chainNamespace:f.CHAIN.EVM,to:t,address:n,data:"0x",value:o??BigInt(0)});return Y.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:pt("eip155")===ut.ACCOUNT_TYPES.SMART_ACCOUNT,token:((i=K.state.token)==null?void 0:i.symbol)||"",amount:e.sendTokenAmount,network:((c=d.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)||"",hash:a||""}}),(h=E._getClient())==null||h.updateBalance("eip155"),K.resetSend(),{hash:a}},async sendERC20Token(e){var o,s,a;L.pushTransactionStack({onSuccess(){L.replace("Account")}});const t=E.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),n=(o=d.getAccountData())==null?void 0:o.address;if(n&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){const r=S.getPlainAddress(e.tokenAddress);if(!r)throw new Error("SendController:sendERC20Token - tokenAddress is required");const i=await E.writeContract({fromAddress:n,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:Fo.getERC20Abi(r),chainNamespace:f.CHAIN.EVM});return Y.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:pt("eip155")===ut.ACCOUNT_TYPES.SMART_ACCOUNT,token:((s=K.state.token)==null?void 0:s.symbol)||"",amount:e.sendTokenAmount,network:((a=d.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||"",hash:i||""}}),K.resetSend(),{hash:i}}return{hash:void 0}},async sendSolanaToken(){var n,o,s;if(!K.state.sendTokenAmount||!K.state.receiverAddress)throw new Error("An amount and receiver address are required");L.pushTransactionStack({onSuccess(){L.replace("Account")}});let e;K.state.token&&K.state.token.address!==pe.SOLANA_NATIVE_TOKEN_ADDRESS&&(S.isCaipAddress(K.state.token.address)?e=S.getPlainAddress(K.state.token.address):e=K.state.token.address);const t=await E.sendTransaction({chainNamespace:"solana",tokenMint:e,to:K.state.receiverAddress,value:K.state.sendTokenAmount});t&&(G.hash=t),(n=E._getClient())==null||n.updateBalance("solana"),Y.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:!1,token:((o=K.state.token)==null?void 0:o.symbol)||"",amount:K.state.sendTokenAmount,network:((s=d.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||"",hash:t||""}}),K.resetSend()},resetSend(){G.token=void 0,G.sendTokenAmount=void 0,G.receiverAddress=void 0,G.receiverProfileImageUrl=void 0,G.receiverProfileName=void 0,G.loading=!1,G.tokenBalances=[]}},K=at(ia),Ln={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,user:void 0,preferredAccountType:void 0},sn={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},C=se({chains:Zo(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{connectionControllerClient:void 0},isSwitchingNamespace:!1}),qo={state:C,subscribe(e){return we(C,()=>{e(C)})},subscribeKey(e,t){return ce(C,e,t)},subscribeAccountStateProp(e,t,n){var s;const o=n||C.activeChain;return o?ce(((s=C.chains.get(o))==null?void 0:s.accountState)||{},e,t):()=>{}},subscribeChainProp(e,t,n){let o;return we(C.chains,()=>{var a;const s=n||C.activeChain;if(s){const r=(a=C.chains.get(s))==null?void 0:a[e];o!==r&&(o=r,t(r))}})},initialize(e,t,n){const{chainId:o,namespace:s}=y.getActiveNetworkProps(),a=t==null?void 0:t.find(m=>m.id.toString()===(o==null?void 0:o.toString())),i=e.find(m=>(m==null?void 0:m.namespace)===s)||(e==null?void 0:e[0]),c=e.map(m=>m.namespace).filter(m=>m!==void 0),h=R.state.enableEmbedded?new Set([...c]):new Set([...(t==null?void 0:t.map(m=>m.chainNamespace))??[]]);((e==null?void 0:e.length)===0||!i)&&(C.noAdapters=!0),C.noAdapters||(C.activeChain=i==null?void 0:i.namespace,C.activeCaipNetwork=a,d.setChainNetworkData(i==null?void 0:i.namespace,{caipNetwork:a}),C.activeChain&&ot.set({activeChain:i==null?void 0:i.namespace})),h.forEach(m=>{const g=t==null?void 0:t.filter(M=>M.chainNamespace===m),W=y.getPreferredAccountTypes()||{},j={...R.state.defaultAccountTypes,...W};d.state.chains.set(m,{namespace:m,networkState:se({...sn,caipNetwork:g==null?void 0:g[0]}),accountState:se({...Ln,preferredAccountType:j[m]}),caipNetworks:g??[],...n}),d.setRequestedCaipNetworks(g??[],m)})},removeAdapter(e){var t,n;if(C.activeChain===e){const o=Array.from(C.chains.entries()).find(([s])=>s!==e);if(o){const s=(n=(t=o[1])==null?void 0:t.caipNetworks)==null?void 0:n[0];s&&d.setActiveCaipNetwork(s)}}C.chains.delete(e)},addAdapter(e,{connectionControllerClient:t},n){if(!e.namespace)throw new Error("ChainController:addAdapter - adapter must have a namespace");C.chains.set(e.namespace,{namespace:e.namespace,networkState:{...sn,caipNetwork:n[0]},accountState:{...Ln},caipNetworks:n,connectionControllerClient:t}),d.setRequestedCaipNetworks((n==null?void 0:n.filter(o=>o.chainNamespace===e.namespace))??[],e.namespace)},addNetwork(e){var n;const t=C.chains.get(e.chainNamespace);if(t){const o=[...t.caipNetworks||[]];(n=t.caipNetworks)!=null&&n.find(s=>s.id===e.id)||o.push(e),C.chains.set(e.chainNamespace,{...t,caipNetworks:o}),d.setRequestedCaipNetworks(o,e.chainNamespace),w.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){var o,s,a;const n=C.chains.get(e);if(n){const r=((o=C.activeCaipNetwork)==null?void 0:o.id)===t,i=[...((s=n.caipNetworks)==null?void 0:s.filter(c=>c.id!==t))||[]];r&&((a=n==null?void 0:n.caipNetworks)!=null&&a[0])&&d.setActiveCaipNetwork(n.caipNetworks[0]),C.chains.set(e,{...n,caipNetworks:i}),d.setRequestedCaipNetworks(i||[],e),i.length===0&&w.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){const n=C.chains.get(e);n&&(n.networkState={...n.networkState||sn,...t},C.chains.set(e,n))},setChainAccountData(e,t,n=!0){if(!e)throw new Error("Chain is required to update chain account data");const o=C.chains.get(e);if(o){const s={...o.accountState||Ln,...t};C.chains.set(e,{...o,accountState:s}),(C.chains.size===1||C.activeChain===e)&&t.caipAddress&&(C.activeCaipAddress=t.caipAddress)}},setChainNetworkData(e,t){if(!e)return;const n=C.chains.get(e);if(n){const o={...n.networkState||sn,...t};C.chains.set(e,{...n,networkState:o})}},setAccountProp(e,t,n,o=!0){d.setChainAccountData(n,{[e]:t},o)},setActiveNamespace(e){var o,s;C.activeChain=e;const t=e?C.chains.get(e):void 0,n=(o=t==null?void 0:t.networkState)==null?void 0:o.caipNetwork;n!=null&&n.id&&e&&(C.activeCaipAddress=(s=t==null?void 0:t.accountState)==null?void 0:s.caipAddress,C.activeCaipNetwork=n,d.setChainNetworkData(e,{caipNetwork:n}),y.setActiveCaipNetworkId(n==null?void 0:n.caipNetworkId),ot.set({activeChain:e,selectedNetworkId:n==null?void 0:n.caipNetworkId}))},setActiveCaipNetwork(e){var a,r;if(!e)return;const t=C.activeChain===e.chainNamespace;t||d.setIsSwitchingNamespace(!0);const n=C.chains.get(e.chainNamespace);C.activeChain=e.chainNamespace,C.activeCaipNetwork=e,d.setChainNetworkData(e.chainNamespace,{caipNetwork:e});let o=(a=n==null?void 0:n.accountState)==null?void 0:a.address;if(o)C.activeCaipAddress=`${e.chainNamespace}:${e.id}:${o}`;else if(t&&C.activeCaipAddress){const{address:i}=ne.parseCaipAddress(C.activeCaipAddress);o=i,C.activeCaipAddress=`${e.caipNetworkId}:${o}`}else C.activeCaipAddress=void 0;d.setChainAccountData(e.chainNamespace,{address:o,caipAddress:C.activeCaipAddress}),K.resetSend(),ot.set({activeChain:C.activeChain,selectedNetworkId:(r=C.activeCaipNetwork)==null?void 0:r.caipNetworkId}),y.setActiveCaipNetworkId(e.caipNetworkId),!d.checkIfSupportedNetwork(e.chainNamespace)&&R.state.enableNetworkSwitch&&!R.state.allowUnsupportedChain&&!E.state.wcBasic&&d.showUnsupportedChainUI()},addCaipNetwork(e){var n;if(!e)return;const t=C.chains.get(e.chainNamespace);t&&((n=t==null?void 0:t.caipNetworks)==null||n.push(e))},async switchActiveNamespace(e){var s;if(!e)return;const t=e!==d.state.activeChain,n=(s=d.getNetworkData(e))==null?void 0:s.caipNetwork,o=d.getCaipNetworkByNamespace(e,n==null?void 0:n.id);t&&o&&await d.switchActiveNetwork(o)},async switchActiveNetwork(e,{throwOnFailure:t=!1}={}){var r;const n=d.state.activeChain;if(!n)throw new Error("ChainController:switchActiveNetwork - namespace is required");const o=zo.getProviderId(C.activeChain)==="AUTH",s=(r=d.getAccountData(n))==null?void 0:r.address,a=f.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e.chainNamespace);try{if(s&&e.chainNamespace===n||o&&a){const i=aa.get(e.chainNamespace);if(!i)throw new Error("Adapter not found");await i.switchNetwork({caipNetwork:e})}d.setActiveCaipNetwork(e)}catch(i){if(t)throw i}Y.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})},getConnectionControllerClient(e){const t=e||C.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");const n=C.chains.get(t);if(!(n!=null&&n.connectionControllerClient))throw new Error("ConnectionController client not set");return n.connectionControllerClient},getNetworkProp(e,t){var o;const n=(o=C.chains.get(t))==null?void 0:o.networkState;if(n)return n[e]},getRequestedCaipNetworks(e){const t=C.chains.get(e),{approvedCaipNetworkIds:n=[],requestedCaipNetworks:o=[]}=(t==null?void 0:t.networkState)||{};return S.sortRequestedNetworks(n,o).filter(r=>r==null?void 0:r.id)},getAllRequestedCaipNetworks(){const e=[];return C.chains.forEach(t=>{if(!t.namespace)throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");const n=d.getRequestedCaipNetworks(t.namespace);e.push(...n)}),e},setRequestedCaipNetworks(e,t){d.setAdapterNetworkState(t,{requestedCaipNetworks:e});const o=d.getAllRequestedCaipNetworks().map(a=>a.chainNamespace),s=Array.from(new Set(o));w.filterByNamespaces(s)},getAllApprovedCaipNetworkIds(){const e=[];return C.chains.forEach(t=>{if(!t.namespace)throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");const n=d.getApprovedCaipNetworkIds(t.namespace);e.push(...n)}),e},getActiveCaipNetwork(e){var t,n;return e?(n=(t=C.chains.get(e))==null?void 0:t.networkState)==null?void 0:n.caipNetwork:C.activeCaipNetwork},getActiveCaipAddress(){return C.activeCaipAddress},getApprovedCaipNetworkIds(e){var o;const t=C.chains.get(e);return((o=t==null?void 0:t.networkState)==null?void 0:o.approvedCaipNetworkIds)||[]},setApprovedCaipNetworksData(e,t){d.setAdapterNetworkState(e,t)},checkIfSupportedNetwork(e,t){var s;const n=t||((s=C.activeCaipNetwork)==null?void 0:s.caipNetworkId),o=d.getRequestedCaipNetworks(e);return o.length?o==null?void 0:o.some(a=>a.caipNetworkId===n):!0},checkIfSupportedChainId(e){if(!C.activeChain)return!0;const t=d.getRequestedCaipNetworks(C.activeChain);return t==null?void 0:t.some(n=>n.id===e)},checkIfSmartAccountEnabled(){var o,s;const e=_s.caipNetworkIdToNumber((o=C.activeCaipNetwork)==null?void 0:o.caipNetworkId);if(!C.activeChain||!e)return!1;const n=((s=$s.get(pn.SMART_ACCOUNT_ENABLED_NETWORKS))==null?void 0:s.split(","))||[];return!!(n!=null&&n.includes(e.toString()))},showUnsupportedChainUI(){ee.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const e=C.activeCaipNetwork;return!!(e!=null&&e.chainNamespace&&pe.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){d.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})},resetAccount(e){var s,a;const t=e;if(!t)throw new Error("Chain is required to set account prop");const n=(a=(s=d.state.chains.get(t))==null?void 0:s.accountState)==null?void 0:a.preferredAccountType,o=R.state.defaultAccountTypes[t];C.activeCaipAddress=void 0,d.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:o||n,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,user:void 0,status:"disconnected"}),w.removeConnectorId(t)},setIsSwitchingNamespace(e){C.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){var n,o;const e=[];let t;if(C.chains.forEach(s=>{f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(a=>a===s.namespace)&&s.namespace&&e.push(s.namespace)}),e.length>0){const s=e[0];return t=s?(o=(n=C.chains.get(s))==null?void 0:n.caipNetworks)==null?void 0:o[0]:void 0,t}},getAccountData(e){var n;const t=e||C.activeChain;if(t)return(n=d.state.chains.get(t))==null?void 0:n.accountState},getNetworkData(e){var n;const t=e||C.activeChain;if(t)return(n=d.state.chains.get(t))==null?void 0:n.networkState},getCaipNetworkByNamespace(e,t){var s,a,r;if(!e)return;const n=d.state.chains.get(e),o=(s=n==null?void 0:n.caipNetworks)==null?void 0:s.find(i=>i.id.toString()===(t==null?void 0:t.toString()));return o||((a=n==null?void 0:n.networkState)==null?void 0:a.caipNetwork)||((r=n==null?void 0:n.caipNetworks)==null?void 0:r[0])},getRequestedCaipNetworkIds(){const e=w.state.filterByNamespace;return(e?[C.chains.get(e)]:Array.from(C.chains.values())).flatMap(n=>(n==null?void 0:n.caipNetworks)||[]).map(n=>n.caipNetworkId)},getCaipNetworks(e){return e?d.getRequestedCaipNetworks(e):d.getAllRequestedCaipNetworks()},getCaipNetworkById(e,t){return qo.getCaipNetworks(t).find(n=>n.id.toString()===e.toString()||n.caipNetworkId.toString()===e.toString())},setLastConnectedSIWECaipNetwork(e){C.lastConnectedSIWECaipNetwork=e},getLastConnectedSIWECaipNetwork(){return C.lastConnectedSIWECaipNetwork},async fetchTokenBalance(e){var r,i;const t=d.getAccountData();if(!t)return[];const n=(r=d.state.activeCaipNetwork)==null?void 0:r.caipNetworkId,o=(i=d.state.activeCaipNetwork)==null?void 0:i.chainNamespace,s=d.state.activeCaipAddress,a=s?S.getPlainAddress(s):void 0;if(d.setAccountProp("balanceLoading",!0,o),t.lastRetry&&!S.isAllowedRetry(t.lastRetry,30*pe.ONE_SEC_MS))return d.setAccountProp("balanceLoading",!1,o),[];try{if(a&&n&&o){const c=await Sn.getMyTokensWithBalance();return d.setAccountProp("tokenBalance",c,o),d.setAccountProp("lastRetry",void 0,o),d.setAccountProp("balanceLoading",!1,o),c}}catch(c){d.setAccountProp("lastRetry",Date.now(),o),e==null||e(c),_e.showError("Token Balance Unavailable")}finally{d.setAccountProp("balanceLoading",!1,o)}return[]},isCaipNetworkDisabled(e){var c;const t=e.chainNamespace,n=!!((c=d.getAccountData(t))!=null&&c.caipAddress),o=d.getAllApprovedCaipNetworkIds(),s=d.getNetworkProp("supportsAllNetworks",t)!==!1,a=w.getConnectorId(t),r=w.getAuthConnector(),i=a===f.CONNECTOR_ID.AUTH&&r;return!n||s||i?!1:!(o!=null&&o.includes(e.caipNetworkId))}},d=at(qo),ca={onSwitchNetwork({network:e,ignoreSwitchConfirmation:t=!1}){var W,j;const n=d.state.activeCaipNetwork,o=d.state.activeChain,s=L.state.data;if(e.id===(n==null?void 0:n.id))return;const r=!!((W=d.getAccountData(o))!=null&&W.address),i=!!((j=d.getAccountData(e.chainNamespace))!=null&&j.address),c=e.chainNamespace!==o,m=w.getConnectorId(o)===f.CONNECTOR_ID.AUTH,g=f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(M=>M===e.chainNamespace);t||m&&g?L.push("SwitchNetwork",{...s,network:e}):r&&c&&!i?L.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):L.push("SwitchNetwork",{...s,network:e})}},Ie=se({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),la={state:Ie,subscribe(e){return we(Ie,()=>e(Ie))},subscribeKey(e,t){return ce(Ie,e,t)},async open(e){var r,i;const t=e==null?void 0:e.namespace,n=d.state.activeChain,o=t&&t!==n,s=(r=d.getAccountData(e==null?void 0:e.namespace))==null?void 0:r.caipAddress,a=d.state.noAdapters;if(E.state.wcBasic?I.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1,fetchWalletRanks:!1}):await I.prefetch(),w.setFilterByNamespace(e==null?void 0:e.namespace),ee.setLoading(!0,t),t&&o){const c=((i=d.getNetworkData(t))==null?void 0:i.caipNetwork)||d.getRequestedCaipNetworks(t)[0];c&&(a?(await d.switchActiveNetwork(c),L.push("ConnectingWalletConnectBasic")):ca.onSwitchNetwork({network:c,ignoreSwitchConfirmation:!0}))}else R.state.manualWCControl||a&&!s?S.isMobile()?L.reset("AllWallets"):L.reset("ConnectingWalletConnectBasic"):e!=null&&e.view?L.reset(e.view,e.data):s?L.reset("Account"):L.reset("Connect");Ie.open=!0,ot.set({open:!0}),Y.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!s}})},close(){const e=R.state.enableEmbedded,t=!!d.state.activeCaipAddress;Ie.open&&Y.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),Ie.open=!1,L.reset("Connect"),ee.clearLoading(),e?t?L.replace("Account"):L.push("Connect"):ot.set({open:!1}),E.resetUri()},setLoading(e,t){t&&Ie.loadingNamespaceMap.set(t,e),Ie.loading=e,ot.set({loading:e})},clearLoading(){Ie.loadingNamespaceMap.clear(),Ie.loading=!1,ot.set({loading:!1})},shake(){Ie.shake||(Ie.shake=!0,setTimeout(()=>{Ie.shake=!1},500))}},ee=at(la),da=te`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
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
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
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
`;var Ut=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let ft=class extends X{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){const t={accent:"accent-primary",primary:"inverse",secondary:"default"};return l`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${t[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};ft.styles=[Ge,vn,da];Ut([b()],ft.prototype,"size",void 0);Ut([b({type:Boolean})],ft.prototype,"disabled",void 0);Ut([b()],ft.prototype,"icon",void 0);Ut([b()],ft.prototype,"iconColor",void 0);Ut([b()],ft.prototype,"variant",void 0);ft=Ut([J("wui-icon-link")],ft);const ua=Ro`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,pa=Ro`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ha=te`
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
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
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
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var It=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let st=class extends X{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:pa,md:rs,lg:ua},this.selected=!1,this.round=!1}render(){const t={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${t[this.size]});
    `,l`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};st.styles=[Ge,ha];It([b()],st.prototype,"size",void 0);It([b()],st.prototype,"name",void 0);It([b({type:Object})],st.prototype,"networkImagesBySize",void 0);It([b()],st.prototype,"imageSrc",void 0);It([b({type:Boolean})],st.prototype,"selected",void 0);It([b({type:Boolean})],st.prototype,"round",void 0);st=It([J("wui-network-image")],st);const ma=te`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var eo=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let zt=class extends X{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,l`${this.template()}`}template(){return this.text?l`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};zt.styles=[Ge,ma];eo([b()],zt.prototype,"text",void 0);eo([b()],zt.prototype,"bgColor",void 0);zt=eo([J("wui-separator")],zt);const fa={EIP155:f.CHAIN.EVM},De={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,o])=>{t[`${fa.EIP155}:${n}`]=o}),t},isLowerCaseMatch(e,t){return(e==null?void 0:e.toLowerCase())===(t==null?void 0:t.toLowerCase())},getActiveNamespaceConnectedToAuth(){const e=d.state.activeChain;return f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>w.getConnectorId(t)===f.CONNECTOR_ID.AUTH&&t===e)},withRetry({conditionFn:e,intervalMs:t,maxRetries:n}){let o=0;return new Promise(s=>{async function a(){return o+=1,await e()?s(!0):o>=n?s(!1):(setTimeout(a,t),null)}a()})},userChainIdToChainNamespace(e){if(typeof e=="number")return f.CHAIN.EVM;const[t]=e.split(":");return t},getOtherAuthNamespaces(e){return e?f.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(o=>o!==e):[]},getConnectorStorageInfo(e,t){const o=y.getConnections()[t]??[];return{hasDisconnected:y.isConnectorDisconnected(e,t),hasConnected:o.some(s=>De.isLowerCaseMatch(s.connectorId,e))}}},D={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"},dt={[D.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[D.INVALID_RECIPIENT]:"Invalid recipient address",[D.INVALID_ASSET]:"Invalid asset specified",[D.INVALID_AMOUNT]:"Invalid payment amount",[D.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[D.UNKNOWN_ERROR]:"Unknown payment error occurred",[D.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[D.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[D.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[D.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[D.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[D.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[D.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[D.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[D.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[D.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"};class z extends Error{get message(){return dt[this.code]}constructor(t,n){super(dt[t]),this.name="AppKitPayError",this.code=t,this.details=n,Error.captureStackTrace&&Error.captureStackTrace(this,z)}}const ga="https://rpc.walletconnect.org/v1/json-rpc",Ao="reown_test";function wa(){const{chainNamespace:e}=ne.parseCaipNetworkId(A.state.paymentAsset.network);if(!S.isAddress(A.state.recipient,e))throw new z(D.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${e}"`)}async function Ca(e,t,n){var i;if(t!==f.CHAIN.EVM)throw new z(D.INVALID_CHAIN_NAMESPACE);if(!n.fromAddress)throw new z(D.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");const o=typeof n.amount=="string"?parseFloat(n.amount):n.amount;if(isNaN(o))throw new z(D.INVALID_PAYMENT_CONFIG);const s=((i=e.metadata)==null?void 0:i.decimals)??18,a=E.parseUnits(o.toString(),s);if(typeof a!="bigint")throw new z(D.GENERIC_PAYMENT_ERROR);return await E.sendTransaction({chainNamespace:t,to:n.recipient,address:n.fromAddress,value:a,data:"0x"})??void 0}async function ya(e,t){if(!t.fromAddress)throw new z(D.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");const n=e.asset,o=t.recipient,s=Number(e.metadata.decimals),a=E.parseUnits(t.amount.toString(),s);if(a===void 0)throw new z(D.GENERIC_PAYMENT_ERROR);return await E.writeContract({fromAddress:t.fromAddress,tokenAddress:n,args:[o,a],method:"transfer",abi:Fo.getERC20Abi(n),chainNamespace:f.CHAIN.EVM})??void 0}async function ba(e,t){if(e!==f.CHAIN.SOLANA)throw new z(D.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new z(D.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");const n=typeof t.amount=="string"?parseFloat(t.amount):t.amount;if(isNaN(n)||n<=0)throw new z(D.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!zo.getProvider(e))throw new z(D.GENERIC_PAYMENT_ERROR,"No Solana provider available.");const s=await E.sendTransaction({chainNamespace:f.CHAIN.SOLANA,to:t.recipient,value:n,tokenMint:t.tokenMint});if(!s)throw new z(D.GENERIC_PAYMENT_ERROR,"Transaction failed.");return s}catch(o){throw o instanceof z?o:new z(D.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${o}`)}}async function Ea({sourceToken:e,toToken:t,amount:n,recipient:o}){const s=E.parseUnits(n,e.metadata.decimals),a=E.parseUnits(n,t.metadata.decimals);return Promise.resolve({type:Gn,origin:{amount:(s==null?void 0:s.toString())??"0",currency:e},destination:{amount:(a==null?void 0:a.toString())??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:Gn,type:"deposit",deposit:{amount:(s==null?void 0:s.toString())??"0",currency:e.asset,receiver:o}}],timeInSeconds:6})}function qn(e){if(!e)return null;const t=e.steps[0];return!t||t.type!==$a?null:t}function Wn(e,t=0){if(!e)return[];const n=e.steps.filter(s=>s.type===Da),o=n.filter((s,a)=>a+1>t);return n.length>0&&n.length<3?o:[]}const to=new Rt({baseUrl:S.getApiUrl(),clientId:null});class Aa extends Error{}function Na(){const e=R.getSnapshot().projectId;return`${ga}?projectId=${e}`}function no(){const{projectId:e,sdkType:t,sdkVersion:n}=R.state;return{projectId:e,st:t||"appkit",sv:n||"html-wagmi-4.2.2"}}async function oo(e,t){const n=Na(),{sdkType:o,sdkVersion:s,projectId:a}=R.getSnapshot(),r={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:o,sv:s,projectId:a}},c=await(await fetch(n,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})).json();if(c.error)throw new Aa(c.error.message);return c}async function No(e){return(await oo("reown_getExchanges",e)).result}async function To(e){return(await oo("reown_getExchangePayUrl",e)).result}async function Ta(e){return(await oo("reown_getExchangeBuyStatus",e)).result}async function va(e){const t=be.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:n,chainNamespace:o}=ne.parseCaipNetworkId(e.sourceToken.network),{chainId:s,chainNamespace:a}=ne.parseCaipNetworkId(e.toToken.network),r=e.sourceToken.asset==="native"?bo(o):e.sourceToken.asset,i=e.toToken.asset==="native"?bo(a):e.toToken.asset;return await to.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:n.toString(),originCurrency:r,destinationChainId:s.toString(),destinationCurrency:i,recipient:e.recipient,amount:t},params:no()})}async function Ia(e){const t=De.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),n=De.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&n?Ea(e):va(e)}async function Sa(e){return await to.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...no()}})}async function ka(e){return await to.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:no()})}const _a=["eip155","solana"],xa={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function Bn(e,t){const{chainNamespace:n,chainId:o}=ne.parseCaipNetworkId(e),s=xa[n];if(!s)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let a=s.native.assetNamespace,r=s.native.assetReference;return t!=="native"&&(a=s.defaultTokenNamespace,r=t),`${`${n}:${o}`}/${a}:${r}`}function Oa(e){const{chainNamespace:t}=ne.parseCaipNetworkId(e);return _a.includes(t)}function Pa(e){const n=d.getAllRequestedCaipNetworks().find(s=>s.caipNetworkId===e.chainId);let o=e.address;if(!n)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(De.isLowerCaseMatch(e.symbol,n.nativeCurrency.symbol))o="native";else if(S.isCaipAddress(o)){const{address:s}=ne.parseCaipAddress(o);o=s}else if(!o)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:n.caipNetworkId,asset:o,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}function Ra(e){return{chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:e.metadata.decimals.toString()}}}function yn(e){const t=be.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}function Ua(e){const n=d.getAllRequestedCaipNetworks().find(o=>o.caipNetworkId===e.network);return n?!!n.testnet:!1}const vo=0,Mn="unknown",Gn="direct-transfer",$a="deposit",Da="transaction",p=se({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[f.CHAIN.EVM]:[],[f.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),A={state:p,subscribe(e){return we(p,()=>e(p))},subscribeKey(e,t){return ce(p,e,t)},async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),wa(),await this.prepareTokenLogo(),p.isConfigured=!0,Y.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:p.exchanges,configuration:{network:p.paymentAsset.network,asset:p.paymentAsset.asset,recipient:p.recipient,amount:p.amount}}}),await ee.open({view:"Pay"})},resetState(){p.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},p.recipient="0x0",p.amount=0,p.isConfigured=!1,p.error=null,p.isPaymentInProgress=!1,p.isLoading=!1,p.currentPayment=void 0,p.selectedExchange=void 0,p.exchangeUrlForQuote=void 0,p.requestId=void 0},resetQuoteState(){p.quote=void 0,p.quoteStatus="waiting",p.quoteError=null,p.isFetchingQuote=!1,p.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new z(D.INVALID_PAYMENT_CONFIG);try{p.choice=e.choice??"pay",p.paymentAsset=e.paymentAsset,p.recipient=e.recipient,p.amount=e.amount,p.openInNewTab=e.openInNewTab??!0,p.redirectUrl=e.redirectUrl,p.payWithExchange=e.payWithExchange,p.error=null}catch(t){throw new z(D.INVALID_PAYMENT_CONFIG,t.message)}},setSelectedPaymentAsset(e){p.selectedPaymentAsset=e},setSelectedExchange(e){p.selectedExchange=e},setRequestId(e){p.requestId=e},setPaymentInProgress(e){p.isPaymentInProgress=e},getPaymentAsset(){return p.paymentAsset},getExchanges(){return p.exchanges},async fetchExchanges(){try{p.isLoading=!0;const e=await No({page:vo});p.exchanges=e.exchanges.slice(0,2)}catch{throw _e.showError(dt.UNABLE_TO_GET_EXCHANGES),new z(D.UNABLE_TO_GET_EXCHANGES)}finally{p.isLoading=!1}},async getAvailableExchanges(e){var t;try{const n=e!=null&&e.asset&&(e!=null&&e.network)?Bn(e.network,e.asset):void 0;return await No({page:(e==null?void 0:e.page)??vo,asset:n,amount:(t=e==null?void 0:e.amount)==null?void 0:t.toString()})}catch{throw new z(D.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,n=!1){try{const o=Number(t.amount),s=await To({exchangeId:e,asset:Bn(t.network,t.asset),amount:o.toString(),recipient:`${t.network}:${t.recipient}`});return Y.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e},headless:n}}),n&&(this.initiatePayment(),Y.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:p.paymentId||Mn,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e}}})),s}catch(o){throw o instanceof Error&&o.message.includes("is not supported")?new z(D.ASSET_NOT_SUPPORTED):new Error(o.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:n,recipient:o}){const s=await To({exchangeId:e,asset:Bn(t.network,t.asset),amount:n.toString(),recipient:o});p.exchangeSessionId=s.sessionId,p.exchangeUrlForQuote=s.url},async openPayUrl(e,t,n=!1){try{const o=await this.getPayUrl(e.exchangeId,t,n);if(!o)throw new z(D.UNABLE_TO_GET_PAY_URL);const a=e.openInNewTab??!0?"_blank":"_self";return S.openHref(o.url,a),o}catch(o){throw o instanceof z?p.error=o.message:p.error=dt.GENERIC_PAYMENT_ERROR,new z(D.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:n,amount:o,paymentAsset:s}){if(p.currentPayment={type:"wallet",status:"IN_PROGRESS"},!p.isPaymentInProgress)try{this.initiatePayment();const r=d.getAllRequestedCaipNetworks().find(c=>c.caipNetworkId===s.network);if(!r)throw new Error("Target network not found");const i=d.state.activeCaipNetwork;switch(De.isLowerCaseMatch(i==null?void 0:i.caipNetworkId,r.caipNetworkId)||await d.switchActiveNetwork(r),e){case f.CHAIN.EVM:s.asset==="native"&&(p.currentPayment.result=await Ca(s,e,{recipient:n,amount:o,fromAddress:t})),s.asset.startsWith("0x")&&(p.currentPayment.result=await ya(s,{recipient:n,amount:o,fromAddress:t})),p.currentPayment.status="SUCCESS";break;case f.CHAIN.SOLANA:p.currentPayment.result=await ba(e,{recipient:n,amount:o,fromAddress:t,tokenMint:s.asset==="native"?void 0:s.asset}),p.currentPayment.status="SUCCESS";break;default:throw new z(D.INVALID_CHAIN_NAMESPACE)}}catch(a){throw a instanceof z?p.error=a.message:p.error=dt.GENERIC_PAYMENT_ERROR,p.currentPayment.status="FAILED",_e.showError(p.error),a}finally{p.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:n}=e;A.initiatePayment();const s=d.getAllRequestedCaipNetworks().find(r=>{var i;return r.caipNetworkId===((i=p.paymentAsset)==null?void 0:i.network)});if(!s)throw new Error("Target network not found");const a=d.state.activeCaipNetwork;if(De.isLowerCaseMatch(a==null?void 0:a.caipNetworkId,s.caipNetworkId)||await d.switchActiveNetwork(s),t===f.CHAIN.EVM){const{from:r,to:i,data:c,value:h}=n.transaction;await E.sendTransaction({address:r,to:i,data:c,value:BigInt(h),chainNamespace:t})}else if(t===f.CHAIN.SOLANA){const{instructions:r}=n.transaction;await E.writeSolanaTransaction({instructions:r})}}catch(t){throw t instanceof z?p.error=t.message:p.error=dt.GENERIC_PAYMENT_ERROR,_e.showError(p.error),t}finally{p.isPaymentInProgress=!1}},getExchangeById(e){return p.exchanges.find(t=>t.id===e)},validatePayConfig(e){const{paymentAsset:t,recipient:n,amount:o}=e;if(!t)throw new z(D.INVALID_PAYMENT_CONFIG);if(!n)throw new z(D.INVALID_RECIPIENT);if(!t.asset)throw new z(D.INVALID_ASSET);if(o==null||o<=0)throw new z(D.INVALID_AMOUNT)},async handlePayWithExchange(e){try{p.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:n}=p.paymentAsset,o={network:t,asset:n,amount:p.amount,recipient:p.recipient},s=await this.getPayUrl(e,o);if(!s)throw new z(D.UNABLE_TO_INITIATE_PAYMENT);return p.currentPayment.sessionId=s.sessionId,p.currentPayment.status="IN_PROGRESS",p.currentPayment.exchangeId=e,this.initiatePayment(),{url:s.url,openInNewTab:p.openInNewTab}}catch(t){return t instanceof z?p.error=t.message:p.error=dt.GENERIC_PAYMENT_ERROR,p.isPaymentInProgress=!1,_e.showError(p.error),null}},async getBuyStatus(e,t){var n,o;try{const s=await Ta({sessionId:t,exchangeId:e});return(s.status==="SUCCESS"||s.status==="FAILED")&&Y.sendEvent({type:"track",event:s.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:s.status==="FAILED"?S.parseError(p.error):void 0,source:"pay",paymentId:p.paymentId||Mn,configuration:{network:p.paymentAsset.network,asset:p.paymentAsset.asset,recipient:p.recipient,amount:p.amount},currentPayment:{type:"exchange",exchangeId:(n=p.currentPayment)==null?void 0:n.exchangeId,sessionId:(o=p.currentPayment)==null?void 0:o.sessionId,result:s.txHash}}}),s}catch{throw new z(D.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:n}){if(!e)return[];const{address:o}=ne.parseCaipAddress(e);let s=t;return n===f.CHAIN.EVM&&(s=void 0),await Sn.getMyTokensWithBalance({address:o,caipNetwork:s})},async fetchTokensFromExchange(){if(!p.selectedExchange)return[];const e=await ka(p.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map(async o=>{const s=Ra(o),{chainNamespace:a}=ne.parseCaipNetworkId(s.chainId);let r=s.address;if(S.isCaipAddress(r)){const{address:c}=ne.parseCaipAddress(r);r=c}const i=await Oe.getImageByToken(r??"",a).catch(()=>{});return s.iconUrl=i??"",s}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:n}){try{p.isFetchingTokenBalances=!0;const a=await(!!p.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:n}));p.tokenBalances={...p.tokenBalances,[n]:a}}catch(o){const s=o instanceof Error?o.message:"Unable to get token balances";_e.showError(s)}finally{p.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:n,toToken:o,recipient:s}){try{A.resetQuoteState(),p.isFetchingQuote=!0;const a=await Ia({amount:e,address:p.selectedExchange?void 0:t,sourceToken:n,toToken:o,recipient:s});if(p.selectedExchange){const r=qn(a);if(r){const i=`${n.network}:${r.deposit.receiver}`,c=be.formatNumber(r.deposit.amount,{decimals:n.metadata.decimals??0,round:8});await A.generateExchangeUrlForQuote({exchangeId:p.selectedExchange.id,paymentAsset:n,amount:c.toString(),recipient:i})}}p.quote=a}catch(a){let r=dt.UNABLE_TO_GET_QUOTE;if(a instanceof Error&&a.cause&&a.cause instanceof Response)try{const i=await a.cause.json();i.error&&typeof i.error=="string"&&(r=i.error)}catch{}throw p.quoteError=r,_e.showError(r),new z(D.UNABLE_TO_GET_QUOTE)}finally{p.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===Gn){const n=p.selectedExchange,o=p.exchangeSessionId;if(n&&o){switch((await this.getBuyStatus(n.id,o)).status){case"IN_PROGRESS":p.quoteStatus="waiting";break;case"SUCCESS":p.quoteStatus="success",p.isPaymentInProgress=!1;break;case"FAILED":p.quoteStatus="failure",p.isPaymentInProgress=!1;break;case"UNKNOWN":p.quoteStatus="waiting";break;default:p.quoteStatus="waiting";break}return}p.quoteStatus="success";return}const{status:t}=await Sa({requestId:e});p.quoteStatus=t}catch{throw p.quoteStatus="failure",new z(D.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){p.isPaymentInProgress=!0,p.paymentId=crypto.randomUUID()},initializeAnalytics(){p.analyticsSet||(p.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{var t;if((t=p.currentPayment)!=null&&t.status&&p.currentPayment.status!=="UNKNOWN"){const n={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[p.currentPayment.status];Y.sendEvent({type:"track",event:n,properties:{message:p.currentPayment.status==="FAILED"?S.parseError(p.error):void 0,source:"pay",paymentId:p.paymentId||Mn,configuration:{network:p.paymentAsset.network,asset:p.paymentAsset.asset,recipient:p.recipient,amount:p.amount},currentPayment:{type:p.currentPayment.type,exchangeId:p.currentPayment.exchangeId,sessionId:p.currentPayment.sessionId,result:p.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!p.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=ne.parseCaipNetworkId(p.paymentAsset.network),t=await Oe.getImageByToken(p.paymentAsset.asset,e);p.paymentAsset.metadata.logoURI=t}catch{}}},La=te`
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
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`;var Ct=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let ze=class extends X{constructor(){super(),this.unsubscribe=[],this.amount=A.state.amount,this.namespace=void 0,this.paymentAsset=A.state.paymentAsset,this.activeConnectorIds=w.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=A.state.exchanges,this.isLoading=A.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(A.subscribeKey("amount",t=>this.amount=t)),this.unsubscribe.push(w.subscribeKey("activeConnectorIds",t=>this.activeConnectorIds=t)),this.unsubscribe.push(A.subscribeKey("exchanges",t=>this.exchanges=t)),this.unsubscribe.push(A.subscribeKey("isLoading",t=>this.isLoading=t)),A.fetchExchanges(),A.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return l`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var n;const t=d.state.activeChain;this.namespace=t,this.caipAddress=(n=d.getAccountData(t))==null?void 0:n.caipAddress,this.unsubscribe.push(d.subscribeChainProp("accountState",o=>{this.caipAddress=o==null?void 0:o.caipAddress},t))}paymentDetailsTemplate(){const n=d.getAllRequestedCaipNetworks().find(o=>o.caipNetworkId===this.paymentAsset.network);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${yn(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${(n==null?void 0:n.name)||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${Q(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${Q(Oe.getNetworkImage(n))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return Oa(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():l``}connectedWalletTemplate(){const{name:t,image:n}=this.getWalletProperties({namespace:this.namespace});return l`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${Q(n)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${t}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return l`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return l`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const t=this.exchanges.filter(n=>Ua(this.paymentAsset)?n.id===Ao:n.id!==Ao);return t.length===0?l`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:t.map(n=>l`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(n)}
          data-testid="exchange-option-${n.id}"
          ?chevron=${!0}
          imageSrc=${Q(n.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${n.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return l`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?L.push("PayQuote"):(await w.connect(),await ee.open({view:"PayQuote"}))}onExchangePayment(t){A.setSelectedExchange(t),L.push("PayQuote")}async onDisconnect(){try{await E.disconnect(),await ee.open({view:"Pay"})}catch{console.error("Failed to disconnect"),_e.showError("Failed to disconnect")}}getWalletProperties({namespace:t}){if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const o=w.getConnector({id:n,namespace:t});if(!o)return{name:void 0,image:void 0};const s=Oe.getConnectorImage(o);return{name:o.name,image:s}}};ze.styles=La;Ct([v()],ze.prototype,"amount",void 0);Ct([v()],ze.prototype,"namespace",void 0);Ct([v()],ze.prototype,"paymentAsset",void 0);Ct([v()],ze.prototype,"activeConnectorIds",void 0);Ct([v()],ze.prototype,"caipAddress",void 0);Ct([v()],ze.prototype,"exchanges",void 0);Ct([v()],ze.prototype,"isLoading",void 0);ze=Ct([J("w3m-pay-view")],ze);const Wa=te`
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
`;var $t=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ba=3,Ma=2,Fa=.3,Ha="200px",ja={"accent-primary":Vt.tokens.core.backgroundAccentPrimary};let gt=class extends X{constructor(){super(...arguments),this.rings=Ba,this.duration=Ma,this.opacity=Fa,this.size=Ha,this.variant="accent-primary"}render(){const t=ja[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${t};
      --pulse-opacity: ${this.opacity};
    `;const n=Array.from({length:this.rings},(o,s)=>this.renderRing(s,this.rings));return l`
      <div class="pulse-container">
        <div class="pulse-rings">${n}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(t,n){const s=`animation-delay: ${t/n*this.duration}s;`;return l`<div class="pulse-ring" style=${s}></div>`}};gt.styles=[Ge,Wa];$t([b({type:Number})],gt.prototype,"rings",void 0);$t([b({type:Number})],gt.prototype,"duration",void 0);$t([b({type:Number})],gt.prototype,"opacity",void 0);$t([b()],gt.prototype,"size",void 0);$t([b()],gt.prototype,"variant",void 0);gt=$t([J("wui-pulse")],gt);const Io=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],So=["success","submitted","failure","timeout","refund"],Va=te`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`;var Ye=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ka={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},za=3e3;let Le=class extends X{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=A.state.paymentAsset,this.quoteStatus=A.state.quoteStatus,this.quote=A.state.quote,this.amount=A.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=w.state.activeConnectorIds,this.selectedExchange=A.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(A.subscribeKey("quoteStatus",t=>this.quoteStatus=t),A.subscribeKey("quote",t=>this.quote=t),w.subscribeKey("activeConnectorIds",t=>this.activeConnectorIds=t),A.subscribeKey("selectedExchange",t=>this.selectedExchange=t))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const t=yn(this.amount||"0"),n=this.paymentAsset.metadata.symbol??"Unknown",s=d.getAllRequestedCaipNetworks().find(i=>i.caipNetworkId===this.paymentAsset.network),a=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";return this.quoteStatus==="success"||this.quoteStatus==="submitted"?l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a?l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:l`
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
                src=${Q(Oe.getNetworkImage(s))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${t} ${n}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return l`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const t=this.getStepsWithStatus();return l`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${t.map(n=>this.renderStep(n))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var s;const t=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund",n=this.quoteStatus==="success"||this.quoteStatus==="submitted";if(t)return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(n)return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const o=((s=this.quote)==null?void 0:s.timeInSeconds)??0;return l`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${o} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var r,i,c;const n=d.getAllRequestedCaipNetworks().find(h=>{var W;const m=(W=this.quote)==null?void 0:W.origin.currency.network;if(!m)return!1;const{chainId:g}=ne.parseCaipNetworkId(m);return De.isLowerCaseMatch(h.id.toString(),g.toString())}),o=be.formatNumber(((r=this.quote)==null?void 0:r.origin.amount)||"0",{decimals:((i=this.quote)==null?void 0:i.origin.currency.metadata.decimals)??0}).toString(),s=yn(o),a=((c=this.quote)==null?void 0:c.origin.currency.metadata.symbol)??"Unknown";return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${s}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${a}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${Q(Oe.getNetworkImage(n))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${n==null?void 0:n.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var s;const{image:t}=this.getWalletProperties({namespace:this.namespace}),{address:n}=this.caipAddress?ne.parseCaipAddress(this.caipAddress):{},o=(s=this.selectedExchange)==null?void 0:s.name;return this.selectedExchange?l`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${o}</wui-text>
          <wui-image src=${Q(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:l`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${In.getTruncateString({string:this.profileName||n||o||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${Q(t)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund"?Io.map(n=>({...n,status:"failed"})):Io.map(n=>{const s=(Ka[n.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...n,status:s}})}renderStep({title:t,icon:n,status:o}){return l`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${n} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${Uo({"step-icon-box":!0,success:o==="completed"})}>
            ${this.renderStatusIndicator(o)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(t){return t==="completed"?l`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:t==="failed"?l`<wui-icon size="sm" color="error" name="close"></wui-icon>`:t==="pending"?l`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},za))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const t=A.state.requestId;if(!t||So.includes(this.quoteStatus))this.stopPolling();else try{await A.fetchQuoteStatus({requestId:t}),So.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){var n,o;const t=d.state.activeChain;this.namespace=t,this.caipAddress=(n=d.getAccountData(t))==null?void 0:n.caipAddress,this.profileName=((o=d.getAccountData(t))==null?void 0:o.profileName)??null,this.unsubscribe.push(d.subscribeChainProp("accountState",s=>{this.caipAddress=s==null?void 0:s.caipAddress,this.profileName=(s==null?void 0:s.profileName)??null},t))}getWalletProperties({namespace:t}){if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const o=w.getConnector({id:n,namespace:t});if(!o)return{name:void 0,image:void 0};const s=Oe.getConnectorImage(o);return{name:o.name,image:s}}};Le.styles=Va;Ye([v()],Le.prototype,"paymentAsset",void 0);Ye([v()],Le.prototype,"quoteStatus",void 0);Ye([v()],Le.prototype,"quote",void 0);Ye([v()],Le.prototype,"amount",void 0);Ye([v()],Le.prototype,"namespace",void 0);Ye([v()],Le.prototype,"caipAddress",void 0);Ye([v()],Le.prototype,"profileName",void 0);Ye([v()],Le.prototype,"activeConnectorIds",void 0);Ye([v()],Le.prototype,"selectedExchange",void 0);Le=Ye([J("w3m-pay-loading-view")],Le);const qa=te`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var He=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Pe=class extends X{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const t=this.icon?l`<wui-icon
          size=${Q(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:l`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return l`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${t}
        ${this.enableGreenCircle?l`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return l`
      <wui-text variant="lg-regular" color="primary">
        ${In.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return l`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};Pe.styles=[Ge,vn,qa];He([b()],Pe.prototype,"address",void 0);He([b()],Pe.prototype,"profileName",void 0);He([b()],Pe.prototype,"alt",void 0);He([b()],Pe.prototype,"imageSrc",void 0);He([b()],Pe.prototype,"icon",void 0);He([b()],Pe.prototype,"iconSize",void 0);He([b({type:Boolean})],Pe.prototype,"enableGreenCircle",void 0);He([b({type:Boolean})],Pe.prototype,"loading",void 0);He([b({type:Number})],Pe.prototype,"charsStart",void 0);He([b({type:Number})],Pe.prototype,"charsEnd",void 0);Pe=He([J("wui-wallet-switch")],Pe);const Ga=Tn`
  :host {
    display: block;
  }
`;var Ya=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Yn=class extends X{render(){return l`
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
    `}};Yn.styles=[Ga];Yn=Ya([J("w3m-pay-fees-skeleton")],Yn);const Ja=te`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var Go=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let bn=class extends X{constructor(){super(),this.unsubscribe=[],this.quote=A.state.quote,this.unsubscribe.push(A.subscribeKey("quote",t=>this.quote=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var n,o,s;const t=be.formatNumber(((n=this.quote)==null?void 0:n.origin.amount)||"0",{decimals:((o=this.quote)==null?void 0:o.origin.currency.metadata.decimals)??0,round:6}).toString();return l`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${t} ${((s=this.quote)==null?void 0:s.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(a=>this.renderFee(a)):null}
      </wui-flex>
    `}renderFee(t){const n=t.id==="network",o=be.formatNumber(t.amount||"0",{decimals:t.currency.metadata.decimals??0,round:6}).toString();if(n){const a=d.getAllRequestedCaipNetworks().find(r=>De.isLowerCaseMatch(r.caipNetworkId,t.currency.network));return l`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${t.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${o} ${t.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${Q(Oe.getNetworkImage(a))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(a==null?void 0:a.name)||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${t.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${o} ${t.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};bn.styles=[Ja];Go([v()],bn.prototype,"quote",void 0);bn=Go([J("w3m-pay-fees")],bn);const Qa=te`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var Yo=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let En=class extends X{constructor(){super(),this.unsubscribe=[],this.selectedExchange=A.state.selectedExchange,this.unsubscribe.push(A.subscribeKey("selectedExchange",t=>this.selectedExchange=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=!!this.selectedExchange;return l`
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

        ${t?null:l`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};En.styles=[Qa];Yo([b({type:Array})],En.prototype,"selectedExchange",void 0);En=Yo([J("w3m-pay-options-empty")],En);const Xa=te`
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
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
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
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var Za=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Jn=class extends X{render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return l`
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
    `}};Jn.styles=[Xa];Jn=Za([J("w3m-pay-options-skeleton")],Jn);const er=te`
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
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var kn=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const tr=300;let Ot=class extends X{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var n,o;this.unsubscribe.forEach(s=>s()),(n=this.resizeObserver)==null||n.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".pay-options-container");t==null||t.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var n,o;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".pay-options-container");t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),t==null||t.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),(o=this.resizeObserver)==null||o.observe(t),this.handleOptionsListScroll())}render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(t=>this.payOptionTemplate(t))}
      </wui-flex>
    `}payOptionTemplate(t){var j,M;const{network:n,metadata:o,asset:s,amount:a="0"}=t,i=d.getAllRequestedCaipNetworks().find(F=>F.caipNetworkId===n),c=`${n}:${s}`,h=`${(j=this.selectedPaymentAsset)==null?void 0:j.network}:${(M=this.selectedPaymentAsset)==null?void 0:M.asset}`,m=c===h,g=be.bigNumber(a,{safe:!0}),W=g.gt(0);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>{var F;return(F=this.onSelect)==null?void 0:F.call(this,t)}}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${Q(o.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${Q(Oe.getNetworkImage(i))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${o.symbol}</wui-text>
            ${W?l`<wui-text variant="sm-regular" color="secondary">
                  ${g.round(6).toString()} ${o.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${m?l`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".pay-options-container");if(!t)return;t.scrollHeight>tr?(t.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--options-scroll--top-opacity",uo.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--options-scroll--bottom-opacity",uo.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--options-mask-image","none"),t.style.setProperty("--options-scroll--top-opacity","0"),t.style.setProperty("--options-scroll--bottom-opacity","0"))}};Ot.styles=[er];kn([b({type:Array})],Ot.prototype,"options",void 0);kn([b()],Ot.prototype,"selectedPaymentAsset",void 0);kn([b()],Ot.prototype,"onSelect",void 0);Ot=kn([J("w3m-pay-options")],Ot);const nr=te`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var ge=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const an={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},or={eip155:{icon:an.eip155,label:"EVM"},solana:{icon:an.solana,label:"Solana"},bip122:{icon:an.bip122,label:"Bitcoin"},ton:{icon:an.ton,label:"Ton"}};let le=class extends X{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=A.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=A.state.amount,this.recipient=A.state.recipient,this.activeConnectorIds=w.state.activeConnectorIds,this.selectedPaymentAsset=A.state.selectedPaymentAsset,this.selectedExchange=A.state.selectedExchange,this.isFetchingQuote=A.state.isFetchingQuote,this.quoteError=A.state.quoteError,this.quote=A.state.quote,this.isFetchingTokenBalances=A.state.isFetchingTokenBalances,this.tokenBalances=A.state.tokenBalances,this.isPaymentInProgress=A.state.isPaymentInProgress,this.exchangeUrlForQuote=A.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(A.subscribeKey("paymentAsset",t=>this.paymentAsset=t)),this.unsubscribe.push(A.subscribeKey("tokenBalances",t=>this.onTokenBalancesChanged(t))),this.unsubscribe.push(A.subscribeKey("isFetchingTokenBalances",t=>this.isFetchingTokenBalances=t)),this.unsubscribe.push(w.subscribeKey("activeConnectorIds",t=>this.activeConnectorIds=t)),this.unsubscribe.push(A.subscribeKey("selectedPaymentAsset",t=>this.selectedPaymentAsset=t)),this.unsubscribe.push(A.subscribeKey("isFetchingQuote",t=>this.isFetchingQuote=t)),this.unsubscribe.push(A.subscribeKey("quoteError",t=>this.quoteError=t)),this.unsubscribe.push(A.subscribeKey("quote",t=>this.quote=t)),this.unsubscribe.push(A.subscribeKey("amount",t=>this.amount=t)),this.unsubscribe.push(A.subscribeKey("recipient",t=>this.recipient=t)),this.unsubscribe.push(A.subscribeKey("isPaymentInProgress",t=>this.isPaymentInProgress=t)),this.unsubscribe.push(A.subscribeKey("selectedExchange",t=>this.selectedExchange=t)),this.unsubscribe.push(A.subscribeKey("exchangeUrlForQuote",t=>this.exchangeUrlForQuote=t)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(t=>t())}updated(t){super.updated(t),t.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return l`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){var r,i;if(this.selectedExchange){const c=be.formatNumber((r=this.quote)==null?void 0:r.origin.amount,{decimals:((i=this.quote)==null?void 0:i.origin.currency.metadata.decimals)??0}).toString();return l`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?l`<wui-text variant="lg-regular" color="primary">
                ${be.bigNumber(c,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:l`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const t=S.getPlainAddress(this.caipAddress)??"",{name:n,image:o}=this.getWalletProperties({namespace:this.namespace}),{icon:s,label:a}=or[this.namespace]??{};return l`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${Q(this.profileName)}
          address=${Q(t)}
          imageSrc=${Q(o)}
          alt=${Q(n)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${Q(a)}
          address=${Q(t)}
          icon=${Q(s)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${Q(a)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var n,o;const t=d.state.activeChain;this.namespace=t,this.caipAddress=(n=d.getAccountData(t))==null?void 0:n.caipAddress,this.profileName=((o=d.getAccountData(t))==null?void 0:o.profileName)??null,this.unsubscribe.push(d.subscribeChainProp("accountState",s=>this.onAccountStateChanged(s),t))}async fetchTokens(){if(this.namespace){let t;if(this.caipAddress){const{chainId:n,chainNamespace:o}=ne.parseCaipAddress(this.caipAddress),s=`${o}:${n}`;t=d.getAllRequestedCaipNetworks().find(r=>r.caipNetworkId===s)}await A.fetchTokens({caipAddress:this.caipAddress,caipNetwork:t,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:t}=this.caipAddress?ne.parseCaipAddress(this.caipAddress):{};A.fetchQuote({amount:this.amount.toString(),address:t,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:t}){if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const o=w.getConnector({id:n,namespace:t});if(!o)return{name:void 0,image:void 0};const s=Oe.getConnectorImage(o);return{name:o.name,image:s}}paymentOptionsViewTemplate(){return l`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const t=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return l`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(t.length===0)return l`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const n={disabled:this.isFetchingQuote};return l`<w3m-pay-options
      class=${Uo(n)}
      .options=${t}
      .selectedPaymentAsset=${Q(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?l`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:l`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var s,a,r;const t=this.isFetchingQuote||this.isFetchingTokenBalances,n=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,o=be.formatNumber(((s=this.quote)==null?void 0:s.origin.amount)??0,{decimals:((a=this.quote)==null?void 0:a.origin.currency.metadata.decimals)??0}).toString();return this.selectedExchange?t||n?l`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:l`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${t||n?l`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:l`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${yn(o)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${((r=this.quote)==null?void 0:r.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:t,isDisabled:n})}
      </wui-flex>
    `}actionButtonTemplate(t){const n=Wn(this.quote),{isLoading:o,isDisabled:s}=t;let a="Pay";return n.length>1&&this.completedTransactionsCount===0&&(a="Approve"),l`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${o||this.isPaymentInProgress}
        ?disabled=${s||this.isPaymentInProgress}
        @click=${()=>{n.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${a}
        ${o?null:l`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(s=>{try{return Pa(s)}catch{return null}}).filter(s=>!!s).filter(s=>{const{chainId:a}=ne.parseCaipNetworkId(s.network),{chainId:r}=ne.parseCaipNetworkId(this.paymentAsset.network);return De.isLowerCaseMatch(s.asset,this.paymentAsset.asset)?!0:this.selectedExchange?!De.isLowerCaseMatch(a.toString(),r.toString()):!0}):[]}onTokenBalancesChanged(t){this.tokenBalances=t;const[n]=this.getPaymentAssetFromTokenBalances();n&&A.setSelectedPaymentAsset(n)}async onConnectOtherWallet(){await w.connect(),await ee.open({view:"PayQuote"})}onAccountStateChanged(t){const{address:n}=this.caipAddress?ne.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=t==null?void 0:t.caipAddress,this.profileName=(t==null?void 0:t.profileName)??null,n){const{address:o}=this.caipAddress?ne.parseCaipAddress(this.caipAddress):{};o?De.isLowerCaseMatch(o,n)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):ee.close()}}onSelectedPaymentAssetChanged(t){this.isFetchingQuote||A.setSelectedPaymentAsset(t)}async onTransfer(){var n,o,s;const t=qn(this.quote);if(t){if(!De.isLowerCaseMatch((n=this.selectedPaymentAsset)==null?void 0:n.asset,t.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const r=((o=this.selectedPaymentAsset)==null?void 0:o.amount)??"0",i=be.formatNumber(t.deposit.amount,{decimals:((s=this.selectedPaymentAsset)==null?void 0:s.metadata.decimals)??0}).toString();if(!be.bigNumber(r).gte(i)){_e.showError("Insufficient funds");return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:h}=ne.parseCaipAddress(this.caipAddress);await A.onTransfer({chainNamespace:this.namespace,fromAddress:h,toAddress:t.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),A.setRequestId(t.requestId),L.push("PayLoading")}}}async onSendTransactions(){var r,i,c;const t=((r=this.selectedPaymentAsset)==null?void 0:r.amount)??"0",n=be.formatNumber(((i=this.quote)==null?void 0:i.origin.amount)??0,{decimals:((c=this.selectedPaymentAsset)==null?void 0:c.metadata.decimals)??0}).toString();if(!be.bigNumber(t).gte(n)){_e.showError("Insufficient funds");return}const s=Wn(this.quote),[a]=Wn(this.quote,this.completedTransactionsCount);a&&this.namespace&&(await A.onSendTransaction({namespace:this.namespace,transactionStep:a}),this.completedTransactionsCount+=1,this.completedTransactionsCount===s.length&&(A.setRequestId(a.requestId),L.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){const t=S.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!t)throw new Error("Could not create popup window");t.location.href=this.exchangeUrlForQuote;const n=qn(this.quote);n&&A.setRequestId(n.requestId),A.initiatePayment(),L.push("PayLoading")}}resetAssetsState(){A.setSelectedPaymentAsset(null)}resetQuoteState(){A.resetQuoteState()}};le.styles=nr;ge([v()],le.prototype,"profileName",void 0);ge([v()],le.prototype,"paymentAsset",void 0);ge([v()],le.prototype,"namespace",void 0);ge([v()],le.prototype,"caipAddress",void 0);ge([v()],le.prototype,"amount",void 0);ge([v()],le.prototype,"recipient",void 0);ge([v()],le.prototype,"activeConnectorIds",void 0);ge([v()],le.prototype,"selectedPaymentAsset",void 0);ge([v()],le.prototype,"selectedExchange",void 0);ge([v()],le.prototype,"isFetchingQuote",void 0);ge([v()],le.prototype,"quoteError",void 0);ge([v()],le.prototype,"quote",void 0);ge([v()],le.prototype,"isFetchingTokenBalances",void 0);ge([v()],le.prototype,"tokenBalances",void 0);ge([v()],le.prototype,"isPaymentInProgress",void 0);ge([v()],le.prototype,"exchangeUrlForQuote",void 0);ge([v()],le.prototype,"completedTransactionsCount",void 0);le=ge([J("w3m-pay-quote-view")],le);const sr=te`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`;var so=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let qt=class extends X{constructor(){super(),this.unsubscribe=[],this.paymentAsset=A.state.paymentAsset,this.amount=A.state.amount,this.unsubscribe.push(A.subscribeKey("paymentAsset",t=>{this.paymentAsset=t}),A.subscribeKey("amount",t=>{this.amount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const n=oe.getAllRequestedCaipNetworks().find(o=>o.caipNetworkId===this.paymentAsset.network);return l`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${Q(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${(n==null?void 0:n.name)??"Unknown"}
      </wui-text>
    </wui-flex>`}};qt.styles=[sr];so([b()],qt.prototype,"paymentAsset",void 0);so([b()],qt.prototype,"amount",void 0);qt=so([J("w3m-pay-header")],qt);const ar=te`
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
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
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
`;var yt=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const rr=["SmartSessionList"],ir={PayWithExchange:Vt.tokens.theme.foregroundPrimary};function ko(){var c,h,m,g,W,j,M,F;const e=(h=(c=U.state.data)==null?void 0:c.connector)==null?void 0:h.name,t=(g=(m=U.state.data)==null?void 0:m.wallet)==null?void 0:g.name,n=(j=(W=U.state.data)==null?void 0:W.network)==null?void 0:j.name,o=t??e,s=fn.getConnectors(),a=s.length===1&&((M=s[0])==null?void 0:M.id)==="w3m-email",r=(F=oe.getAccountData())==null?void 0:F.socialProvider,i=r?r.charAt(0).toUpperCase()+r.slice(1):"Connect Social";return{Connect:`Connect ${a?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:n??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:i,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let qe=class extends X{constructor(){super(),this.unsubscribe=[],this.heading=ko()[U.state.view],this.network=oe.state.activeCaipNetwork,this.networkImage=xn.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=U.state.view,this.viewDirection="",this.unsubscribe.push(ns.subscribeNetworkImages(()=>{this.networkImage=xn.getNetworkImage(this.network)}),U.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.heading=ko()[t]},At.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),oe.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=xn.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=ir[U.state.view]??Vt.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),l`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){ht.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),U.push("WhatIsAWallet")}async onClose(){await Lo.safeClose()}rightHeaderTemplate(){var n,o,s;const t=(s=(o=(n=fe)==null?void 0:n.state)==null?void 0:o.features)==null?void 0:s.smartSessions;return U.state.view!=="Account"||!t?this.closeButtonTemplate():l`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>U.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return l`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if(this.view==="PayQuote")return l`<w3m-pay-header></w3m-pay-header>`;const t=rr.includes(this.view);return l`
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
        ${t?l`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var h;const{view:t}=U.state,n=t==="Connect",o=fe.state.enableEmbedded,s=t==="ApproveTransaction",a=t==="ConnectingSiwe",r=t==="Account",i=fe.state.enableNetworkSwitch,c=s||a||n&&o;return r&&i?l`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${Q((h=this.network)==null?void 0:h.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${Q(this.networkImage)}
      ></wui-select>`:this.showBack&&!c?l`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:l`<wui-icon-button
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(ht.sendEvent({type:"track",event:"CLICK_NETWORKS"}),U.push("Networks"))}isAllowedNetworkSwitch(){const t=oe.getAllRequestedCaipNetworks(),n=t?t.length>1:!1,o=t==null?void 0:t.find(({id:s})=>{var a;return s===((a=this.network)==null?void 0:a.id)});return n||!o}onViewChange(){const{history:t}=U.state;let n=At.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(n=At.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=n}async onHistoryChange(){var o;const{history:t}=U.state,n=(o=this.shadowRoot)==null?void 0:o.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){U.goBack()}};qe.styles=ar;yt([v()],qe.prototype,"heading",void 0);yt([v()],qe.prototype,"network",void 0);yt([v()],qe.prototype,"networkImage",void 0);yt([v()],qe.prototype,"showBack",void 0);yt([v()],qe.prototype,"prevHistoryLength",void 0);yt([v()],qe.prototype,"view",void 0);yt([v()],qe.prototype,"viewDirection",void 0);qe=yt([J("w3m-header")],qe);const cr=te`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var ao=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Gt=class extends X{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return l`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},n={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:l`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${n[this.variant]}
    ></wui-icon-box>`}};Gt.styles=[Ge,cr];ao([b()],Gt.prototype,"message",void 0);ao([b()],Gt.prototype,"variant",void 0);Gt=ao([J("wui-snackbar")],Gt);const lr=Tn`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Jo=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let An=class extends X{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=me.state.open,this.unsubscribe.push(me.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=me.state;return l` <wui-snackbar message=${t} variant=${n}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),me.state.autoClose&&(this.timeout=setTimeout(()=>me.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};An.styles=lr;Jo([v()],An.prototype,"open",void 0);An=Jo([J("w3m-snackbar")],An);const dr=Tn`
  :host {
    width: 100%;
    display: block;
  }
`;var ro=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Yt=class extends X{constructor(){super(),this.unsubscribe=[],this.text="",this.open=Ue.state.open,this.unsubscribe.push(U.subscribeKey("view",()=>{Ue.hide()}),Fe.subscribeKey("open",t=>{t||Ue.hide()}),Ue.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),Ue.hide()}render(){return l`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return l`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();if(!this.open){const n=document.querySelector("w3m-modal"),o={width:t.width,height:t.height,left:t.left,top:t.top};if(n){const s=n.getBoundingClientRect();o.left=t.left-(window.innerWidth-s.width)/2,o.top=t.top-(window.innerHeight-s.height)/2}Ue.showTooltip({message:this.text,triggerRect:o,variant:"shade"})}}onMouseLeave(t){this.contains(t.relatedTarget)||Ue.hide()}};Yt.styles=[dr];ro([b()],Yt.prototype,"text",void 0);ro([v()],Yt.prototype,"open",void 0);Yt=ro([J("w3m-tooltip-trigger")],Yt);const ur=te`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
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
`;var Xt=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let vt=class extends X{constructor(){super(),this.unsubscribe=[],this.open=Ue.state.open,this.message=Ue.state.message,this.triggerRect=Ue.state.triggerRect,this.variant=Ue.state.variant,this.unsubscribe.push(Ue.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,n=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${n}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,l`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};vt.styles=[ur];Xt([v()],vt.prototype,"open",void 0);Xt([v()],vt.prototype,"message",void 0);Xt([v()],vt.prototype,"triggerRect",void 0);Xt([v()],vt.prototype,"variant",void 0);vt=Xt([J("w3m-tooltip")],vt);const Ht={getTabsByNamespace(e){var n;return!!e&&e===et.CHAIN.EVM?((n=fe.state.remoteFeatures)==null?void 0:n.activity)===!1?At.ACCOUNT_TABS.filter(o=>o.label!=="Activity"):At.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){var t;const e=U.state.view;if(At.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:n,privacyPolicyUrl:o}=fe.state,s=(t=fe.state.features)==null?void 0:t.legalCheckbox;return!(!n&&!o||s)}return At.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},pr=te`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var Qo=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Nn=class extends X{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=fe.state.remoteFeatures,this.unsubscribe.push(fe.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var a;const{termsConditionsUrl:t,privacyPolicyUrl:n}=fe.state,o=(a=fe.state.features)==null?void 0:a.legalCheckbox;return!t&&!n||o?l`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:l`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=fe.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=fe.state;return t?l`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=fe.state;return t?l`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){var n;return(n=this.remoteFeatures)!=null&&n.reownBranding?t?l`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:l`<wui-ux-by-reown></wui-ux-by-reown>`:null}};Nn.styles=[pr];Qo([v()],Nn.prototype,"remoteFeatures",void 0);Nn=Qo([J("w3m-legal-footer")],Nn);const hr=Tn``;var mr=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Qn=class extends X{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=fe.state;return!t&&!n?null:l`
      <wui-flex
        .padding=${["4","3","3","3"]}
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
    `}howDoesItWorkTemplate(){return l` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){ht.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:cn(oe.state.activeChain)===ln.ACCOUNT_TYPES.SMART_ACCOUNT}}),U.push("WhatIsABuy")}};Qn.styles=[hr];Qn=mr([J("w3m-onramp-providers-footer")],Qn);const fr=te`
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
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
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
`;var io=function(e,t,n,o){var s=arguments.length,a=s<3?t:o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Jt=class extends X{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=U.state.view}firstUpdated(){this.status=Ht.hasFooter()?"show":"hide",this.unsubscribe.push(U.subscribeKey("view",t=>{this.view=t,this.status=Ht.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(t=>{for(const n of t)if(n.target===this.getWrapper()){const o=`${n.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",o)}}),this.resizeObserver.observe(this.getWrapper())}render(){return l`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return Ht.hasFooter()?l` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return l`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return l`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return l` <wui-flex
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
    </wui-flex>`}onNetworkHelp(){ht.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),U.push("WhatIsANetwork")}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.container")}};Jt.styles=[fr];io([v()],Jt.prototype,"status",void 0);io([v()],Jt.prototype,"view",void 0);Jt=io([J("w3m-footer")],Jt);const gr=te`
  :host {
    display: block;
    width: inherit;
  }
`;var co=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Qt=class extends X{constructor(){super(),this.unsubscribe=[],this.viewState=U.state.view,this.history=U.state.history.join(","),this.unsubscribe.push(U.subscribeKey("view",()=>{this.history=U.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return l`${this.templatePageContainer()}`}templatePageContainer(){return l`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=U.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(t){switch(t){case"AccountSettings":return l`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return l`<w3m-account-view></w3m-account-view>`;case"AllWallets":return l`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return l`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return l`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return l`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return l`<w3m-connect-view></w3m-connect-view>`;case"Create":return l`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return l`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return l`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return l`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return l`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return l`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return l`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return l`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return l`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return l`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return l`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return l`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return l`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return l`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return l`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return l`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return l`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return l`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return l`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return l`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return l`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return l`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return l`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return l`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return l`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return l`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return l`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return l`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return l`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return l`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return l`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return l`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return l`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return l`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return l`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return l`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return l`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return l`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return l`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return l`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return l`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return l`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return l`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return l`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return l`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return l`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return l`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return l`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return l`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return l`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return l`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return l`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return l`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return l`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return l`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;default:return l`<w3m-connect-view></w3m-connect-view>`}}};Qt.styles=[gr];co([v()],Qt.prototype,"viewState",void 0);co([v()],Qt.prototype,"history",void 0);Qt=co([J("w3m-router")],Qt);const wr=te`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
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
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
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
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
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
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
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
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
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
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var Je=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const _o="scroll-lock",Cr={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class je extends X{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=fe.state.enableEmbedded,this.open=Fe.state.open,this.caipAddress=oe.state.activeCaipAddress,this.caipNetwork=oe.state.activeCaipNetwork,this.shake=Fe.state.shake,this.filterByNamespace=fn.state.filterByNamespace,this.padding=Vt.spacing[1],this.mobileFullScreen=fe.state.enableMobileFullScreen,this.initializeTheming(),en.prefetchAnalyticsConfig(),this.unsubscribe.push(Fe.subscribeKey("open",t=>t?this.onOpen():this.onClose()),Fe.subscribeKey("shake",t=>this.shake=t),oe.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),oe.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),fe.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),fn.subscribeKey("filterByNamespace",t=>{var n;this.filterByNamespace!==t&&!((n=oe.getAccountData(t))!=null&&n.caipAddress)&&(en.fetchRecommendedWallets(),this.filterByNamespace=t)}),U.subscribeKey("view",()=>{this.dataset.border=Ht.hasFooter()?"true":"false",this.padding=Cr[U.state.view]??Vt.spacing[1]}))}firstUpdated(){if(this.dataset.border=Ht.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){Fe.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?l`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?l`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return l` <wui-card
      shake="${this.shake}"
      data-embedded="${Q(this.enableEmbedded)}"
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
    </wui-card>`}async onOverlayClick(t){if(t.target===t.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await Lo.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:n}=os.state,o=In.getColorTheme(n);ss(t,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),me.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=_o,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${_o}"]`);t&&t.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:s}=o.target;s&&!s.includes("W3M-")&&!s.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const n=oe.state.isSwitchingNamespace,o=U.state.view==="ProfileWallets";!t&&!n&&!o&&Fe.close(),await Do.initializeIfEnabled(t),this.caipAddress=t,oe.setIsSwitchingNamespace(!1)}onNewNetwork(t){var h,m;const n=this.caipNetwork,o=(h=n==null?void 0:n.caipNetworkId)==null?void 0:h.toString(),s=(m=t==null?void 0:t.caipNetworkId)==null?void 0:m.toString(),a=o!==s,r=U.state.view==="UnsupportedChain",i=Fe.state.open;let c=!1;this.enableEmbedded&&U.state.view==="SwitchNetwork"&&(c=!0),a&&P.resetState(),i&&r&&(c=!0),c&&U.state.view!=="SIWXSignMessage"&&U.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(en.prefetch(),en.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}je.styles=wr;Je([b({type:Boolean})],je.prototype,"enableEmbedded",void 0);Je([v()],je.prototype,"open",void 0);Je([v()],je.prototype,"caipAddress",void 0);Je([v()],je.prototype,"caipNetwork",void 0);Je([v()],je.prototype,"shake",void 0);Je([v()],je.prototype,"filterByNamespace",void 0);Je([v()],je.prototype,"padding",void 0);Je([v()],je.prototype,"mobileFullScreen",void 0);let xo=class extends je{};xo=Je([J("w3m-modal")],xo);let Oo=class extends je{};Oo=Je([J("appkit-modal")],Oo);const yr=te`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`;var br=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Xn=class extends X{constructor(){super()}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
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
    `}onTryAgainClick(){U.goBack()}};Xn.styles=yr;Xn=br([J("w3m-usage-exceeded-view")],Xn);const Er=te`
  :host {
    width: 100%;
  }
`;var Ce=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let he=class extends X{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(t){super.updated(t),(t.has("name")||t.has("imageSrc")||t.has("walletRank"))&&(this.hasImpressionSent=!1),t.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&ht.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:U.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(as.state.adapters).length>1?this.namespaces:[]}render(){return l`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${Q(this.imageSrc)}
        name=${this.name}
        size=${Q(this.size)}
        tagLabel=${Q(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};he.styles=Er;Ce([b({type:Array})],he.prototype,"walletImages",void 0);Ce([b()],he.prototype,"imageSrc",void 0);Ce([b()],he.prototype,"name",void 0);Ce([b()],he.prototype,"size",void 0);Ce([b()],he.prototype,"tagLabel",void 0);Ce([b()],he.prototype,"tagVariant",void 0);Ce([b()],he.prototype,"walletIcon",void 0);Ce([b()],he.prototype,"tabIdx",void 0);Ce([b({type:Boolean})],he.prototype,"disabled",void 0);Ce([b({type:Boolean})],he.prototype,"showAllWallets",void 0);Ce([b({type:Boolean})],he.prototype,"loading",void 0);Ce([b({type:String})],he.prototype,"loadingSpinnerColor",void 0);Ce([b()],he.prototype,"rdnsId",void 0);Ce([b()],he.prototype,"displayIndex",void 0);Ce([b()],he.prototype,"walletRank",void 0);Ce([b({type:Array})],he.prototype,"namespaces",void 0);he=Ce([J("w3m-list-wallet")],he);const Ar=te`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
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
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
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
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
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
`;var Qe=function(e,t,n,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Nr=60;let We=class extends X{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=fe.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(t){if(t.has("history")){const n=this.history;this.historyState!==""&&this.historyState!==n&&this.onViewChange(n)}t.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),t.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var t;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(n=>{var o;for(const s of n)if(s.target===this.getWrapper()){let a=s.contentRect.height;const r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){const i=((o=window.visualViewport)==null?void 0:o.height)||window.innerHeight,c=this.getHeaderHeight();a=i-c-r,this.style.setProperty("--local-border-bottom-radius","0px")}else a=a+r,this.style.setProperty("--local-border-bottom-radius",r?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${a}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${a}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var n;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),(n=window.visualViewport)==null||n.removeEventListener("resize",this.onViewportResize)}render(){return l`
      <div class="container" data-mobile-fullscreen="${Q(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${Q(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(t){const n=t.split(",").filter(Boolean),o=this.historyState.split(",").filter(Boolean),s=o.length,a=n.length,r=n[n.length-1]||"",i=In.cssDurationToNumber(this.transitionDuration);let c="";a>s?c="next":a<s?c="prev":a===s&&n[a-1]!==o[s-1]&&(c="next"),this.viewDirection=`${c}-${r}`,setTimeout(()=>{var h;this.historyState=t,(h=this.setView)==null||h.call(this,r)},i),setTimeout(()=>{this.viewDirection=""},i*2)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.page")}updateContainerHeight(){var s;const t=this.getWrapper();if(!t)return;const n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let o=0;if(this.mobileFullScreen){const a=((s=window.visualViewport)==null?void 0:s.height)||window.innerHeight,r=this.getHeaderHeight();o=a-r-n,this.style.setProperty("--local-border-bottom-radius","0px")}else o=t.getBoundingClientRect().height+n,this.style.setProperty("--local-border-bottom-radius",n?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${o}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${o}px`}getHeaderHeight(){return Nr}};We.styles=[Ar];Qe([b({type:String})],We.prototype,"transitionDuration",void 0);Qe([b({type:String})],We.prototype,"transitionFunction",void 0);Qe([b({type:String})],We.prototype,"history",void 0);Qe([b({type:String})],We.prototype,"view",void 0);Qe([b({attribute:!1})],We.prototype,"setView",void 0);Qe([v()],We.prototype,"viewDirection",void 0);Qe([v()],We.prototype,"historyState",void 0);Qe([v()],We.prototype,"previousHeight",void 0);Qe([v()],We.prototype,"mobileFullScreen",void 0);We=Qe([J("w3m-router-container")],We);export{Oo as AppKitModal,he as W3mListWallet,xo as W3mModal,je as W3mModalBase,We as W3mRouterContainer,Xn as W3mUsageExceededView};
//# sourceMappingURL=w3m-modal-CXLzJPyO.js.map
