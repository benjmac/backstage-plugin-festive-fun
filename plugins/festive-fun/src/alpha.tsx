import { createFrontendPlugin } from '@backstage/frontend-plugin-api';

/**
 * The Festive Fun plugin for the new Backstage frontend system.
 *
 * @alpha
 */
export default createFrontendPlugin({
  pluginId: 'festive-fun',
  extensions: [],
});

export { FestiveFun } from './components/FestiveFun';
export type { Festivity } from './types';
