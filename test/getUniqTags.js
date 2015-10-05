'use strict';
var html = require('./getHtml');

var tags = [];

html.match(/\<\s*[a-z]+/ig).forEach(function(tag){
    tag = tag.replace('<', '');

    if (tags.indexOf(tag) === -1) {
        tags.push(tag);
    }
});

module.exports = tags;
