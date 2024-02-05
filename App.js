import React, { useEffect } from "react";
import OnBoardingNav from "./app/navigation/onBoardingNav/onBoardingNav";
import { DatabaseProvider } from "./app/contextAPI/databaseContext";

export default function App() {
  return (
    <DatabaseProvider>
      <OnBoardingNav />
    </DatabaseProvider>
  );
}
