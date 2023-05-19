import React, {useEffect, useState } from "react";
import { KEYS } from "../constants";
export const FetctedApiContext = React.createContext(null);

const ContextFetchdData = (props) => {
  const [fakeData, setFakeData] = useState([]);
  const [userDetails, setUserDetails] = useState(
     null
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setFakeData(data.slice(16, 20)))
      .catch((e) => console.log("error occurred", e));
  }, []);

  const getMeUserDetails = (details) => {
    setUserDetails(details);
  };

  const total = Math.ceil(
    fakeData.reduce((acc, ele) => acc + ele.price, 0) || 100
  );

  return (
    <FetctedApiContext.Provider
      value={{
        fakeData: fakeData,
        total: total,
        userDetails: userDetails,
        getMeUserDetails: getMeUserDetails,
      }}
    >
      {props.children}
    </FetctedApiContext.Provider>
  );
};

export default ContextFetchdData;
