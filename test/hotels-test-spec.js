'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const hotelsData = require('../hotels.json');
const { getHotelsInfos } = hotels.functions

describe('hotels infos test', function () {
  it('should return: - Lakewood, rating 3 and price 330. - Bridgewood, rating 4 and price 480. - Ridgewood, rating 5 and price 660', function () {
    expect(getHotelsInfos("regular", [1, 2, 3], hotelsData)).to.eql([
      { name: 'Lakewood', rating: 3, price: 330 },
      { name: 'Bridgewood', rating: 4, price: 480 },
      { name: 'Ridgewood', rating: 5, price: 660 }
    ]);
  });
  it('should return: - Lakewood, rating 3 and price 270. - Bridgewood, rating 4 and price 180. - Ridgewood, rating 5 and price 450', function () {
    expect(getHotelsInfos("regular", [5, 6, 0], hotelsData)).to.eql([
      { name: 'Lakewood', rating: 3, price: 270 },
      { name: 'Bridgewood', rating: 4, price: 180 },
      { name: 'Ridgewood', rating: 5, price: 450 }
    ]);
  });
  it('should return: - Lakewood, rating 3 and price 240. - Bridgewood, rating 4 and price 210. - Ridgewood, rating 5 and price 180', function () {
    expect(getHotelsInfos("reward", [4, 5, 6], hotelsData)).to.eql([
      { name: 'Lakewood', rating: 3, price: 240 },
      { name: 'Bridgewood', rating: 4, price: 210 },
      { name: 'Ridgewood', rating: 5, price: 180 }
    ]);
  });
})