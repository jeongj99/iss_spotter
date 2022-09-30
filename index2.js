const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(flyTimes => {
    flyTimes.forEach(flyTime => {
      const date = new Date(0);
      date.setUTCSeconds(flyTime.risetime);
      console.log(`Next pass at ${date} for ${flyTime.duration}!`);
    });
  })
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });