'use strict';

const MqttUnifiProtectPlatform = require('./platform');

module.exports = (api) => {
  api.registerPlatform(
    'homebridge-mqtt-security-system', // npm package name
    'MqttSecuritySystemPlatform', // platform name used in config.json/UI
    MqttSecuritySystemPlatform,
    true // dynamic platform
  );
};
