import { render, screen } from '@testing-library/vue';
import TheHeadline from '@/components/TheHeadline.vue';

describe('TheHeadline', () => {
  describe('vitest playground', () => {
    it('tracks whether it has been called', () => {
      const mockFunction = vi.fn();
      mockFunction(1, 2);
      expect(mockFunction).toHaveBeenCalledWith(1, 2);
    });
  });
});
