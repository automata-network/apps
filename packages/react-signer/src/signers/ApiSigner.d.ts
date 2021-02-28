import type { SubmittableResult } from '@polkadot/api';
import type { Signer, SignerResult } from '@polkadot/api/types';
import type { QueueTxMessageSetStatus, QueueTxPayloadAdd } from '@polkadot/react-components/Status/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { Registry, SignerPayloadJSON } from '@polkadot/types/types';
export default class ApiSigner implements Signer {
    #private;
    constructor(registry: Registry, queuePayload: QueueTxPayloadAdd, queueSetTxStatus: QueueTxMessageSetStatus);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
    update(id: number, result: Hash | SubmittableResult): void;
}
