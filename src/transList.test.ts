import { describe, expect, it } from 'vitest';

import { transList } from './functions';

describe('moveTile', () => {
  const Map = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  it('Inverting test', () => {
    expect(Map).toEqual(transList(transList(Map, 'right'), 'right', true));
  });

  it('Rotating test', () => {
    expect(transList(transList(Map, 'up'), 'up')).toEqual(
      transList(transList(Map, 'down'), 'down'),
    );
  });
});
