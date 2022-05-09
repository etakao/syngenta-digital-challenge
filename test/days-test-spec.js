'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const { getWeekDays } = hotels.functions

describe('week days test', function () {
  it('should return 1 (monday), 2 (tuesday) and 3 (wednesday)', function () {
    expect(getWeekDays(" 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.eql([1, 2, 3]);
  });
  it('should return 5 (friday), 6 (saturday) and 0 (sunday)', function () {
    expect(getWeekDays(" 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.eql([5, 6, 0]);
  });
  it('should return 4 (thursday), 5 (friday) and 6 (saturday)', function () {
    expect(getWeekDays(" 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.eql([4, 5, 6]);
  });
})