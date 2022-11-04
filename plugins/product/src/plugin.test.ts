import { productPlugin } from './plugin';

describe('product', () => {
  it('should export plugin', () => {
    expect(productPlugin).toBeDefined();
  });
});
