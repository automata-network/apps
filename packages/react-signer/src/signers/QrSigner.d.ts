import type { Signer, SignerResult } from '@polkadot/api/types';
import type { Registry, SignerPayloadJSON } from '@polkadot/types/types';
import type { QrState } from '../types';
export default class QrSigner implements Signer {
    #private;
    constructor(registry: Registry, setState: (state: QrState) => void);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}
