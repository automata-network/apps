import type { Signer, SignerResult } from '@polkadot/api/types';
import type { Registry, SignerPayloadJSON } from '@polkadot/types/types';
import type { Ledger } from '@polkadot/ui-keyring';
export default class LedgerSigner implements Signer {
    #private;
    constructor(registry: Registry, getLedger: () => Ledger, accountOffset: number, addressOffset: number);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}
