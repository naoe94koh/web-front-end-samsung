const fs = require('fs');
const fsPromise = require('fs/promises');
const path = require('path');

let filePath = path.resolve('client/public/index.html');

// fs.readFile(
//   filePath,
//   'utf-8',
//   (error, data) => {
//     if (error) {
//       console.error(error.message);
//     } else {
//       console.log(data);
//     }
//   }
// );

// try {
//   const data = fs.readFileSync(filePath, 'utf-8');
//   console.log(data);
// } catch (error) {
//   console.error(error.message);
// }

// (async () => {
//   try {
//     const data = await fsPromise.readFile(filePath, { encoding: 'utf-8' });
//     console.log(data);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();
