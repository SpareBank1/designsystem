/* eslint-env mocha */

import { assert } from 'chai';
import simpleDate from './simpledate';

describe('simpledate', () => {
  it('should format single digit dates as double digit values', () => {
    const date = simpleDate.fromString('01.01.2016');
    assert.deepEqual(date.format(), '01.01.2016');
  });

  it('should format double digit dates as double digit values', () => {
    const date = simpleDate.fromString('10.10.2016');
    assert.deepEqual(date.format(), '10.10.2016');
  });
});
