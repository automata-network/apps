import React from 'react';
interface Props {
    parachainCount?: number;
    proposalCount?: number;
    upcomingCount?: number;
}
declare function Summary({ parachainCount, proposalCount, upcomingCount }: Props): React.ReactElement<Props>;
export default Summary;
