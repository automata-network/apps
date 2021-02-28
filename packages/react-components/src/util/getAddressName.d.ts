import type { KeyringItemType } from '@polkadot/ui-keyring/types';
export default function getAddressName(address: string, type?: KeyringItemType | null, defaultName?: string): [boolean, boolean, string];
