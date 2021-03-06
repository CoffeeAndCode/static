'use strict';

const help = require('../../lib/help');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const pkg = require('../../package.json');

describe('help', () => {
  it('will return a string', () => {
    expect(help()).to.be.a('string');
  });

  it('will contain the cli version number', () => {
    expect(help()).to.contain(pkg.version);
  });
});
