/* global describe, it, global */

'use strict';

var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf-8');
require('should');

var tags = [];

html.match(/\<\s*[a-z]+/ig).forEach(function(tag){
    tag = tag.replace('<', '');

    if (tags.indexOf(tag) === -1) {
        tags.push(tag);
    }
});

describe('Кол-во тегов', function(){
    it('Должно быть не менее 25 тегов', function () {
        (tags.length >= 25).should.be.eql(true);
    });
});
