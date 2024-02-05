import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

async function openDatabase() {
  const databaseFilename = "mySQLiteDB.db";
  const documentsDirectory = FileSystem.documentDirectory + "SQLite/";

  if (!(await FileSystem.getInfoAsync(documentsDirectory)).exists) {
    await FileSystem.makeDirectoryAsync(documentsDirectory);
  }

  await FileSystem.downloadAsync(
    Asset.fromModule(require(`../data/${databaseFilename}`)).uri,
    documentsDirectory + databaseFilename
  );

  return SQLite.openDatabase(databaseFilename);
}

async function readFromDatabase() {
  return new Promise((resolve, reject) => {
    const db = openDatabase();

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM PRODUCT;",
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}

export { openDatabase, readFromDatabase };
