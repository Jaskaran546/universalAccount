import { Account, Chain, Transport } from 'viem';

export interface UniversalClientConfig {
  transport: Transport;
  chain: Chain;
  accountOrAddress: Account;
}
