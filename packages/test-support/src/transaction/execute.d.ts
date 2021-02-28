import { SubmittableExtrinsic } from '@polkadot/api/types';
import { KeyringPair } from '@polkadot/keyring/types';
export declare function execute(extrinsic: SubmittableExtrinsic<'promise'>, singer: KeyringPair, logger?: {
    info: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
}): Promise<void>;
