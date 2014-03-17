'use strict';

var plugin = require('../index');
var jscrush = require('jscrush');
var gutil = require('gulp-util');
var es = require('event-stream');
var assert = require('assert');

var fixture = ['"use strict";', '(function(console, first, second)', '{ console.log(first + second) }(5, 10))'];
var expected = jscrush(fixture.join(''));

describe('gulp-jscrush', function () {
    it('in streaming mode', function (done) {

        var fakeFile = new gutil.File({
            contents: es.readArray(fixture)
        });

        var stream = plugin();
        stream.write(fakeFile);

        stream.once('data', function (file) {
            assert(file.isStream());

            file.contents.pipe(es.wait(function(err, data) {
                assert.equal(data, expected);
                done();
            }));
        });

    });
});