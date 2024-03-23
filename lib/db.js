import fs from "fs";

const dbFile = "db.json";

const initState = {
  tickets: [],
};

const readDb = () => {
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify(initState));
    return initState;
  }

  const data = fs.readFileSync(dbFile);
  return JSON.parse(data);
};

const writeDb = (data) => {
  fs.writeFileSync(dbFile, JSON.stringify(data));
};

const add = async (type, data) => {
  const db = readDb();
  db[type].push(data);
  writeDb(db);
};

export default {
  add,
};
