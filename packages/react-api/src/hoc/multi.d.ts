import React from 'react';
declare type HOC = (Component: React.ComponentType<any>) => React.ComponentType<any>;
export default function withMulti<T>(Component: React.ComponentType<T>, ...hocs: HOC[]): React.ComponentType<any>;
export {};
