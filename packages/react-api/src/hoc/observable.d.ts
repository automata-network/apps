import type { HOC, Options } from './types';
import { Observable } from '@polkadot/x-rxjs';
export default function withObservable<T, P>(observable: Observable<P>, { callOnResult, propName, transform }?: Options): HOC;
