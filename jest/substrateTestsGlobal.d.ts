/// <reference types="node" />
import { StartedTestContainer } from 'testcontainers';
export interface SubstrateTestsGlobal extends NodeJS.Global {
    __SUBSTRATE__: StartedTestContainer;
}
