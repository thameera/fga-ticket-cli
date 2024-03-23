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

const getAllByUser = async (type, username) => {
  const db = readDb();
  return db[type].filter((item) => item.user === username);
};

export default {
  add,
  getAllByUser,
};
