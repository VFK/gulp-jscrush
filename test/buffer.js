'use strict';

var plugin = require('../index');
var jscrush = require('jscrush');
var gutil = require('gulp-util');
var assert = require('assert');

var fixture = '"use strict"; (function(console, first, second) { console.log(first + second) }(5, 10))';
var expected = jscrush(fixture);

describe('gulp-jscrush', function () {
    it('in buffer mode', function (done) {

        var fakeFile = new gutil.File({
            contents: new Buffer(fixture)
        });

        var stream = plugin();
        stream.write(fakeFile);

        stream.once('data', function (file) {
            assert(file.isBuffer());
            assert.equal(file.contents.toString('utf8'), expected);
            done();
        });
    });
});