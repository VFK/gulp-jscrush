'use strict';

var jscrush = require('jscrush');
var through = require('through2');
var BufferStreams = require('bufferstreams');

module.exports = function () {

    return through.obj(function (file, enc, callback) {

        if (file.isBuffer()) {
            var crushed = jscrush(String(file.contents));
            file.contents = new Buffer(crushed);
        }

        if (file.isStream()) {
            var bufferStream = new BufferStreams(function (err, buffer, callback) {
                if (err) this.emit('error', err);

                var crushed = jscrush(buffer.toString('utf8'));
                callback(null, new Buffer(crushed));
            }.bind(this));

            file.contents = file.contents.pipe(bufferStream);
        }

        this.push(file);
        return callback();

    });
};