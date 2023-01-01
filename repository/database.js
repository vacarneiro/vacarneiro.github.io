// Creates database from scratch
// let db = openDatabase('harnBase', '1.0', 'Hârn Database', 2 * 1024 * 1024);

// db.transaction(function (tx) {
//     tx.executeSql('CREATE TABLE vilas (ID PRIMARY KEY, name TEXT, senhor TEXT, meirinho TEXT)');
// }
// );

// Connecting to a disk file SQLite database
let db = new sqlite3.Database('scripts/harnBase.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the harnBase database.');
  });