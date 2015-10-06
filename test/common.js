/* global describe, it, global */

'use strict';

require('should');

var html = require('./getHtml');
var tags = require('./getUniqTags');

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

describe('Сodestyle.', function(){
    it('Не должно быть табуляций.', function () {
        var hasTabs = /\t/.test(html);

        if (hasTabs) {
            console.warn('Вместо табуляций следует использовать 4 пробела на 1 уровень вложенности.')
        }

        hasTabs.should.be.eql(false);
    });

    describe('Запрещенные атрибуты элементов.', function(){
        it('Не должно быть атрибута style.', function () {
            /\<[-\w\'\"\=\s]+style\s*=[-\w\'\"\=\s]*\>/.test(html).should.be.eql(false);
        });

        it('Не должно быть атрибута border у <table> и <td>.', function () {
            /\<\s*(table|td)[-\w\'\"\=\s]+border\s*=(\'|\"|\d)+[-\w\'\"\=\s]*\>/.test(html).should.be.eql(false);
        });
    });
});