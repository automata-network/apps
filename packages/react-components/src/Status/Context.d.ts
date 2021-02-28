import type { QueueProps } from './types';
import React from 'react';
declare const StatusContext: React.Context<QueueProps>;
declare const QueueConsumer: React.Consumer<QueueProps>;
declare const QueueProvider: React.Provider<QueueProps>;
export default StatusContext;
export { QueueConsumer, QueueProvider };
