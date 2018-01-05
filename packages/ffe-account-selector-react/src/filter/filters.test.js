/* eslint-env mocha */

import { assert } from 'chai';
import { accountFilter, createAccountFilter } from './filters';

describe('accountFilter', () => {
  const accounts = [
    {
      name: 'Skattetrekkskonto',
      accountNumber: '654684',
      balance: 66546.99,
    },
    {
      name: 'Matvererkonto',
      accountNumber: '12867318345',
      balance: 24566546.21,
    },
    {
      name: 'Something else konto',
      accountNumber: '87654321',
      balance: 12566546.34,
    },
    {
      name: 'Et virkelig langt kontonavn',
      accountNumber: '118763547961',
      balance: 13466546.15,
    },
    {
      name: 'Lønnskonto',
      accountNumber: '97136098334',
      balance: 4566546,
    },
    {
      name: 'Utland lønnskonto',
      accountNumber: '97136098334',
      balance: 4566546,
    },
  ];

  it('should not filter with empty query', () => {
    assert.deepEqual(accounts.filter(accountFilter('')), accounts);
  });

  it('should not filter with undefined query', () => {
    assert.deepEqual(accounts.filter(accountFilter(undefined)), accounts);
  });

  it('should filter by name', () => {
    assert.deepEqual(accounts.filter(accountFilter('Matvererkonto')), [accounts[1]]);
  });

  it('should filter by account number', () => {
    assert.deepEqual(accounts.filter(accountFilter('12867318345')), [accounts[1]]);
  });

  it('should filter account number with dots seperators', () => {
    assert.deepEqual(accounts.filter(accountFilter('1286.7318.345')), [accounts[1]]);
  });

  it('should filter account number with space seperators', () => {
    assert.deepEqual(accounts.filter(accountFilter('1286 7318 345')), [accounts[1]]);
  });

  it('should filter by partial account number', () => {
    assert.deepEqual(accounts.filter(accountFilter('876')), [accounts[2], accounts[3]]);
  });

  it('should filter by partial name', () => {
    assert.deepEqual(accounts.filter(accountFilter('lønnskonto')), [accounts[4], accounts[5]]);
  });

  it('should return empty array when no match', () => {
    assert.deepEqual(accounts.filter(accountFilter('xxx')), []);
  });

  it('should enable account filter', () => {
    assert.equal(createAccountFilter(true).name, 'accountFilter');
  });

  it('should disable account filter', () => {
    assert.equal(createAccountFilter(false).name, 'noFilter');
  });
});
