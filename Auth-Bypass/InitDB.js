var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./Database.db3");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users(UserId INT, UserName TEXT, Password TEXT)"
  );
  db.run("INSERT OR IGNORE INTO users VALUES(1,'admin','admin')");

  db.run(
    "CREATE TABLE IF NOT EXISTS preferences(PreferenceId INT, API_key TEXT, UserId INT)"
  );
  db.run(
    "INSERT OR IGNORE INTO preferences VALUES(1,'5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 1)"
  );
  db.run(
    "INSERT OR IGNORE INTO preferences VALUES(2,'cbfdac6008f9cab4083784cbd1874f76618d2a97', 2)"
  );
});
