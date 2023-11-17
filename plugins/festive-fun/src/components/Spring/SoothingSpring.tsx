import React from 'react';

import petal1 from '../../assets/petal1.png';
import petal2 from '../../assets/petal2.png';
import petal3 from '../../assets/petal3.png';
import petal4 from '../../assets/petal4.png';
import { DecendingItems } from '../DecendingItems';

const petals = [petal1, petal2, petal3, petal4];

export const SoothingSpring = () => {
  return <DecendingItems itemImages={petals} />;
};
