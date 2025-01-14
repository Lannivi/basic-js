const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || isNaN(parseInt(sampleActivity)) || sampleActivity >= MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  } else {
  const up = Math.log(MODERN_ACTIVITY / sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(up / k);
  }
};