import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { productPlugin, ProductPage } from '../src/plugin';

createDevApp()
  .registerPlugin(productPlugin)
  .addPage({
    element: <ProductPage />,
    title: 'Root Page',
    path: '/product'
  })
  .render();
