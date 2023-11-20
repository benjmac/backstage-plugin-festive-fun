import {
  createPlugin,
  createRoutableExtension,
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
  createRoutableExtension({
    name: 'FestiveFun',
    component: () => import('./components/FestiveFun').then(m => m.FestiveFun),
    mountPoint: rootRouteRef,
  }),
);
