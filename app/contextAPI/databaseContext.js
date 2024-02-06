import React, { createContext, useContext, useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

const DatabaseContext = createContext();

export const useDatabase = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider = ({ children }) => {
  const [db, setDb] = useState(SQLite.openDatabase("stelog.db"));
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS ORDERS (" +
          "OrderId INTEGER NOT NULL," +
          "CustomerId INTEGER," +
          "OrderDate TEXT," +
          "ShippingDate TEXT," +
          "ShippingName TEXT," +
          "ShippingAddress TEXT," +
          "ShippingCity TEXT," +
          "ShippingRegion TEXT," +
          "ShippingPostalCode TEXT," +
          "ShippingCountry TEXT," +
          "ShippingPhone TEXT," +
          "PRIMARY KEY(OrderId AUTOINCREMENT))"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS CUSTOMER (" +
          "CustomerId TEXT NOT NULL," +
          "CompanyName TEXT," +
          "ContactName TEXT," +
          "Address TEXT," +
          "City TEXT," +
          "Region TEXT," +
          "PostalCode TEXT," +
          "Country TEXT," +
          "Phone TEXT," +
          "PRIMARY KEY(CustomerId))"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO CUSTOMER VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "CL00001",
          "La récrée des petits bouts",
          "TAUREAU",
          "27 rue des fleurs",
          "CHARTRES",
          "EURE-ET-LOIR",
          "28000",
          "FR",
          null,
          "CL00002",
          "TARDIEU Antoinette",
          null,
          "11 Avenue du coin du bois",
          "BOISEMONT",
          "VAL-D OISE",
          "95000",
          "FR",
          null,
          "CL00003",
          "RAVIN Odile",
          null,
          "5 rue Mond",
          "BOBIGNY",
          "SEINE-ST-DENIS",
          "93000",
          "FR",
          null,
          "CL00004",
          "CRECHE LES LUTINS",
          "TONGSAVARN",
          "44 rue Turenne",
          "GRENOBLE",
          "ISERE",
          "38000",
          "FR",
          null,
          "CL00005",
          "LUDOTHEQUE ODYSSEE",
          "VOEGEL",
          "35 rue Marbeuf",
          "GRENOBLE",
          "ISERE",
          "38000",
          "FR",
          null,
          "CL00006",
          "IKEO",
          "PLESSIS",
          "2 rue Gloxin",
          "STRASBOURG",
          "BAS-RHIN",
          "67000",
          "FR",
          null,
          "CL00007",
          "LUDO CLUB",
          "ROUSSEAU",
          "13 rue source",
          "MOLSHEIM",
          "BAS-RHIN",
          "67120",
          "FR",
          null,
          "CL00008",
          "MOREL",
          "MOREL",
          "128 route Guillon",
          "COUBLEVIE",
          "ISERE",
          "38500",
          "FR",
          null,
        ]
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT CompanyName FROM CUSTOMER",
        null,
        (txObj, resultSet) => setCustomers(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ORDERS",
        null,
        (txObj, resultSet) => setOrders(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

    setIsLoading(false);
  }, [db]);

  const addOrder = (orderData) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO ORDERS (CustomerId, OrderDate, ShippingDate, ShippingName, ShippingAddress, ShippingCity, ShippingRegion, ShippingPostalCode, ShippingCountry, ShippingPhone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          orderData.CustomerId,
          orderData.OrderDate,
          orderData.ShippingDate,
          orderData.ShippingName,
          orderData.ShippingAddress,
          orderData.ShippingCity,
          orderData.ShippingRegion,
          orderData.ShippingPostalCode,
          orderData.ShippingCountry,
          orderData.ShippingPhone,
        ],
        (txObj, resultSet) => {
          let existingOrders = [...orders];
          existingOrders.push({
            OrderId: resultSet.insertId,
            ...orderData,
          });
          setOrders(existingOrders);
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  const deleteOrder = (orderId) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM ORDERS WHERE OrderId = ?",
        [orderId],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingOrders = [...orders].filter(
              (order) => order.OrderId !== orderId
            );
            setOrders(existingOrders);
          }
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  const values = {
    db,
    orders,
    customers,
    isLoading,
    addOrder,
    deleteOrder,
  };

  return (
    <DatabaseContext.Provider value={values}>
      {children}
    </DatabaseContext.Provider>
  );
};
