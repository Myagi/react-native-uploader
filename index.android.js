'use strict';

var { NativeModules } = require('react-native');
var RNUploader = NativeModules.RNUploader

class RNUploader {
  constructor() {
  }

  static upload(opts, callback) {
    RNUploader.upload(opts, callback);
  }
}

module.exports = RNUploader;