import type { InjectedExtension, InjectedMetadataKnown, MetadataDef } from '@polkadot/extension-inject/types';
interface ExtensionKnown {
    extension: InjectedExtension;
    known: InjectedMetadataKnown[];
    update: (def: MetadataDef) => Promise<boolean>;
}
interface ExtensionInfo extends ExtensionKnown {
    current: InjectedMetadataKnown | null;
}
interface Extensions {
    count: number;
    extensions: ExtensionInfo[];
}
export default function useExtensions(): Extensions;
export {};
