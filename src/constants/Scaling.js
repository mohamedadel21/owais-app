import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

const currentDeviceHeight = Dimensions.get('window').height;
const iPhonePlusHeight = 763;
const scalingMultiplier = currentDeviceHeight / iPhonePlusHeight;
const currentDeviceWidth = Dimensions.get('window').width;


export const ScaleWidth = function (value) {
  if (typeof value === 'number') {
    return value * scalingMultiplier;
  } else {
    let valueNumber = parseFloat(value) / 100;
    return currentDeviceWidth * valueNumber;
  }
};

export const ScaleHeight = function (value) {
  if (typeof value === 'number') {
    return value * scalingMultiplier + (value - value * scalingMultiplier) / 4;
  } else {
    let valueNumber = parseFloat(value) / 100;
    return currentDeviceHeight * valueNumber;
  }
};



