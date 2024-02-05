import React, { createContext, useContext, useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

const DatabaseContext = createContext();

export const useDatabase = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider = ({ children }) => {
  const [db, setDb] = useState(SQLite.openDatabase("stelog.db"));
  const [orders, setOrders] = useState([]);
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
