import React from 'react';

import leaf1 from '../../assets/leaf1.png';
import leaf2 from '../../assets/leaf2.png';
import leaf3 from '../../assets/leaf3.png';
import leaf4 from '../../assets/leaf4.png';
import { DecendingItems } from '../DecendingItems';

const leaves = [leaf1, leaf2, leaf3, leaf4];

export const FestiveFall = () => {
  return (
    <div data-testid="fall">
      <DecendingItems itemImages={leaves} />;
    </div>
  );
};
