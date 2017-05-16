var through = require('through2');
var gutil = require('gulp-util');
var crypto = require("crypto");
var PluginError = gutil.PluginError;


const PLUGIN_NAME = 'gulp-injectmd52self';

function md5(file) {
    return crypto.createHash('md5').update(file, "utf8").digest('hex').substring(0, 15);
}

function gulpInjectmd52self(pattern) {

    if (!pattern) {
        throw new PluginError(PLUGIN_NAME, 'Missing pattern!');
    }

    var stream = through.obj(function (file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        if (file.isNull()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'file is not exsit!'));
            return cb();
        }

        if (file.isBuffer()) {
            var newFile = String(file.contents);
            file.contents = new Buffer(newFile.split(pattern).join(md5(newFile)));
        }


        this.push(file);


        cb(null, file);
    });


    return stream;

};


module.exports = gulpInjectmd52self;