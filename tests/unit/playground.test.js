import { describe, it, expect } from 'vitest';
import { evenOrOdd } from '@/playground';

describe('basic math', () => {
  it('should add numbers', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('evenOrOdd', () => {
  it('should return even if number is even', () => {
    expect(evenOrOdd(2)).toBe('even');
  });
  it('should return odd if number is odd', () => {
    expect(evenOrOdd(3)).toBe('odd');
  });
});
