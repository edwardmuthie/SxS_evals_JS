import moment from 'moment';
import 'moment-timezone/builds/with-data-10-year-range'; 
moment.locale('fr'); 
// Set the desired timezone
const timezone = 'America/Los_Angeles'; 

// Get the current time in the specified timezone
const now = moment().tz(timezone);

console.log(now.format('LLLL')); // Example (in Los Angeles timezone): Sunday, June 24, 2018 1:42 PM