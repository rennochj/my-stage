import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const productPlugin = createPlugin({
  id: 'product',
  routes: {
    root: rootRouteRef,
  },
});

export const ProductPage = productPlugin.provide(
  createRoutableExtension({
    name: 'ProductPage',
    component: () =>
      import('./components/ProductComponent').then(m => m.ProductComponent),
    mountPoint: rootRouteRef,
  }),
);
