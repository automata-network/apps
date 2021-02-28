import type { OnChangeCb } from '../types';
export default function triggerChange(value?: unknown, ...callOnResult: (OnChangeCb | undefined)[]): void;
