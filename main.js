import moment from 'moment';
import 'moment/locale/es'; // Import Spanish locale

moment.locale('es');

const date = moment([2024, 6, 3]); // July 3rd, 2024

console.log(date.format('LL')); // Output: 3 de julio de 2024
console.log(date.format('LLLL')); // Output: miércoles, 3 de julio de 2024 0:00
