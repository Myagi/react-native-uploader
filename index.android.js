'use strict';

var { NativeModules } = require('react-native');
var RNUploaderNative = NativeModules.RNUploader

class RNUploader {
  constructor() {
  }

  static upload(opts, callback) {
    RNUploaderNative.upload(opts, callback);
  }
}

module.exports = RNUploader;
