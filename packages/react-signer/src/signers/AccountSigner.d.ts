import type { Signer, SignerResult } from '@polkadot/api/types';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { Registry, SignerPayloadJSON } from '@polkadot/types/types';
export default class AccountSigner implements Signer {
    #private;
    constructor(registry: Registry, keyringPair: KeyringPair);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}
