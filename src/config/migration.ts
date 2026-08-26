export const PUSH_TOKEN_ADDRESS = "0xf418588522d5dd018b425E472991E52EBBeEEEEE";

// TODO: Fill in after contract deploy
export const PRE_MIGRATION_LOCKER_ADDRESS = "";
export const MIGRATION_LOCKER_ADDRESS = "";

// 11155111 = Sepolia (current wallet config), 1 = Ethereum mainnet
export const MIGRATION_CHAIN_ID = 11155111;

export const LOCKER_ABI = [
  "function lock(uint256 _amount, address _recipient) external",
  "function lockWithPermit(uint256 _amount, address _recipient, uint256 _deadline, uint8 _v, bytes32 _r, bytes32 _s) external",
  "function paused() view returns (bool)",
  "function epoch() view returns (uint256)",
  "event Locked(address caller, address recipient, uint256 amount, uint256 epoch)",
];

export const PUSH_TOKEN_ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
];
