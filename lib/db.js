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

const getAll = async (type) => {
  const db = readDb();
  return db[type];
};

const updateById = async (type, id, updateObj) => {
  const db = readDb();
  let idx = db[type].findIndex((item) => item.id === id);
  if (idx < 0) {
    throw new Error(`Item with id ${id} not found.`);
  }
  db[type][idx] = { ...db[type][idx], ...updateObj };
  writeDb(db);
};

export default {
  add,
  getAllByUser,
  getAll,
  updateById,
};
