/* eslint-env mocha */

import { assert } from 'chai';
import { spy, useFakeTimers } from 'sinon';
import simpleDate from './simpledate';
import ErrorTypes from './error-types';

describe('simpleDate fromString', () => {
  describe('triggers', () => {
    it('onSuccess callback', () => {
      const onSuccess = spy();
      const date = simpleDate.fromString('01.01.2016', onSuccess);
      assert.isTrue(onSuccess.calledWith(date));
    });

    it('onError callback with INVALID_DATE_FORMAT', () => {
      const onError = spy();
      simpleDate.fromString('---', () => {}, onError);
      assert.isTrue(onError.calledWith(ErrorTypes.INVALID_DATE_FORMAT));
    });

    it('onError callback with INVALID_DATE', () => {
      const onError = spy();
      simpleDate.fromString('29.02.2015', () => {}, onError);
      assert.isTrue(onError.calledWith(ErrorTypes.INVALID_DATE));
    });
  });

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

  describe('during last day of month', () => {
    let clock;

    before(() => {
      clock = useFakeTimers(new Date(2017, 6, 31).getTime());
    });

    after(() => {
      clock.restore();
    });

    describe('given date from month with 30 days', () => {
      it('parses', () =>
        assert.isNotNull(simpleDate.fromString('01.09.2017')));

      it('formats', () =>
        assert.deepEqual(simpleDate.fromString('01.09.2017').format(), '01.09.2017'));
    });

    describe('given date from month with 28 days', () => {
      it('parses', () =>
        assert.isNotNull(simpleDate.fromString('05.02.2015')));

      it('formats', () =>
        assert.deepEqual(simpleDate.fromString('05.02.2015').format(), '05.02.2015'));
    });

  });
});
