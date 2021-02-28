import type { TFunction } from 'i18next';
import type { LinkOption } from '../settings/types';
import type { EndpointOption } from './types';
export declare function expandLinked(input: LinkOption[]): LinkOption[];
export declare function expandEndpoint(t: TFunction, input: EndpointOption): LinkOption[];
export declare function expandEndpoints(t: TFunction, input: EndpointOption[]): LinkOption[];
