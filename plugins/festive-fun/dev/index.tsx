import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import {
  festiveFunPlugin,
  FestiveFun,
  FestiveFunSettings,
} from '../src/plugin';

createDevApp()
  .registerPlugin(festiveFunPlugin)
  .addPage({
    element: <FestiveFun initialShowInSeconds={600} />,
    title: 'Festive Fun',
    path: '/festive-fun',
  })
  .addPage({
    element: <FestiveFunSettings />,
    title: 'Festive Fun Settings',
    path: '/settings',
  })
  .render();
