import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { festiveFunPlugin, FestiveFun } from '../src/plugin';

createDevApp()
  .registerPlugin(festiveFunPlugin)
  .addPage({
    element: <FestiveFun initialShowInSeconds={600} />,
    title: 'Root Page',
    path: '/festive-fun',
  })
  .render();
