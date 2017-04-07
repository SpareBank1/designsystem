/* eslint-env mocha */

import { assert } from 'chai';
import simpleDate from './simpledate';

describe('simpledate', () => {
  describe('formats',  () => {
    it('single digit dates as double digit values', () =>
      assert.deepEqual(simpleDate.fromString('01.01.2016').format(), '01.01.2016'));

    it('double digit dates as double digit values', () =>
      assert.deepEqual(simpleDate.fromString('10.10.2016').format(), '10.10.2016'));
  });

  describe('does not accept', () => {
    it('date format prepended anything other than digits', () =>
      assert.isNull(simpleDate.fromString('----10102016')));

    it('date format appended anything after valid date', () =>
      assert.isNull(simpleDate.fromString('10102016----')));

    it('date without year', () =>
      assert.isNull(simpleDate.fromString('10.10.')));

    it('date without day', () =>
      assert.isNull(simpleDate.fromString('.10.2016')));

    it('date without month', () =>
      assert.isNull(simpleDate.fromString('10..2016')));

    it('date with 1 digit as year', () =>
      assert.isNull(simpleDate.fromString('10.10.6')));

    it('date with 3 digits as year', () =>
      assert.isNull(simpleDate.fromString('10.10.206')));

    it('date with more than 4 digits as year', () =>
      assert.isNull(simpleDate.fromString('10.10.201673829')));

    it('date higher than 31', () =>
      assert.isNull(simpleDate.fromString('32.03.2015')));

    it('february 29 in none-leap years', () =>
      assert.isNull(simpleDate.fromString('29.02.2015')));

    it('month higher than 12', () =>
      assert.isNull(simpleDate.fromString('25.13.2015')));
  });

  describe('accepts', () => {
    it('single digit day', () =>
      assert.deepEqual(simpleDate.fromString('5.04.2015').format(), '05.04.2015'));

    it('single digit month', () =>
      assert.deepEqual(simpleDate.fromString('25.1.2015').format(), '25.01.2015'));

    it('double digit year', () =>
      assert.deepEqual(simpleDate.fromString('10.10.17').format(), '10.10.2017'));

    it('no separators for 4 digit years', () =>
      assert.deepEqual(simpleDate.fromString('10102016').format(), '10.10.2016'));

    it('no separators for 2 digit years', () =>
      assert.deepEqual(simpleDate.fromString('101016').format(), '10.10.2016'));

    it('given separators for 4 digit years', () => {
      '. -/'.split('').forEach(separator => {
        const date = simpleDate.fromString(`10${separator}10${separator}2016`);
        assert.deepEqual(date.format(), `10.10.2016`);
      });
    });

    it('given separators for 2 digit years', () => {
      '. -/'.split('').forEach(separator => {
        const date = simpleDate.fromString(`10${separator}10${separator}16`);
        assert.deepEqual(date.format(), '10.10.2016');
      });
    });
  });
});
