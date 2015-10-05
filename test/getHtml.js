/* global describe, it, global */

'use strict';

require('should');
var fs = require('fs');
var files = fs.readdirSync('.');

files = files.filter(function(file){
    return fs.statSync(file).isFile() && /\.html$/.test(file);
});

describe('Кол-во html файлов', function(){
    it('Должен быть один html-файл в проекте', function () {
        files.length.should.be.eql(1);
    });
});

module.exports = fs.readFileSync(files[0], 'utf-8');
