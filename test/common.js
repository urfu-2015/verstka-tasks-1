/* global describe, it, global */

'use strict';

require('should');

var tags = require('./getDifferentTags');

describe('Запрещенные теги.', function(){
    it('Не должно быть тега <i>', function () {
        (tags.indexOf('i') === -1).should.be.eql(true);
    });

    it('Не должно быть тега <b>', function () {
        (tags.indexOf('b') === -1).should.be.eql(true);
    });

    it('Не должно быть тега <font>', function () {
        (tags.indexOf('font') === -1).should.be.eql(true);
    });

    it('Не должно быть тега <center>', function () {
        (tags.indexOf('center') === -1).should.be.eql(true);
    });

    it('Не должно быть тега <marquee>', function () {
        (tags.indexOf('marquee') === -1).should.be.eql(true);
    });

    it('Не должно быть тега <u>', function () {
        (tags.indexOf('u') === -1).should.be.eql(true);
    });

    it('Не должно быть тега <s>', function () {
        (tags.indexOf('s') === -1).should.be.eql(true);
    });
});
