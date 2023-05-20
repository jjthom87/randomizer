//https://www.npmjs.com/package/node-schedule

/*

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

*/

const schedule = require('node-schedule');

//5:30am on December 21, 2012. Remember - in JavaScript - 0 - January, 11 - December.
const date = new Date(2012, 11, 21, 5, 30, 0);

const job = schedule.scheduleJob('30 * * * * *', function(){
  console.log('The world is going to end today.');
});

module.exports = job;