import {
  createComponentExtension,
  createPlugin,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const festiveFunPlugin = createPlugin({
  id: 'festive-fun',
  featureFlags: [{ name: 'festive-fun' }],
  routes: {
    root: rootRouteRef,
  },
});

export const FestiveFun = festiveFunPlugin.provide(
  createComponentExtension({
    name: 'FestiveFun',
    component: {
      lazy: () => import('./components/FestiveFun').then(m => m.FestiveFun),
    },
  }),
);
