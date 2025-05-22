import { extractPasskeyData} from '@safe-global/protocol-kit';
import  decodePublicKey from '@safe-global/protocol-kit';
import { Safe4337InitOptions, Safe4337Pack } from '@safe-global/relay-kit'
import {SponsoredPaymasterOption,PaymasterOptions} from "@safe-global/relay-kit";
export class UniversalClient {
  
  constructor() {}

  async createSafe4337(params: Safe4337InitOptions
  ) {
    const safe4337Pack = await Safe4337Pack.init({
      provider: params.provider,
      signer: params.signer,
      bundlerUrl: params.bundlerUrl,
      options: params.options,
      safeModulesVersion: params.safeModulesVersion,
    });
    return safe4337Pack;
  }


  async getSafeAddress(params: Safe4337InitOptions) {
    return (await this.createSafe4337(params)).protocolKit.getAddress()

  }
}
export {SponsoredPaymasterOption,PaymasterOptions,decodePublicKey,extractPasskeyData};