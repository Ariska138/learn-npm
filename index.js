const adhan = require('adhan');

const coordinates = new adhan.Coordinates(35.7897507, -78.6912485);
const params = adhan.CalculationMethod.MoonsightingCommittee();
const date = new Date();

const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

console.log(prayerTimes);

