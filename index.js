const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    process.exit();
  }
  passTimes.forEach(passTime => {
    let date = new Date(0);
    date.setUTCSeconds(passTime.risetime);
    console.log(`Next pass at ${date} for ${passTime.duration}!`);
  });
});