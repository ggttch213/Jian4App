import React, { createContext, useState } from 'react';

export const BMIContext = createContext();

export const BMIProvider = ({ children }) => {
  const [bmiRecords, setBmiRecords] = useState([]);

  const addBMIRecord = (record) => {
    setBmiRecords([...bmiRecords, record]);
  };

  const deleteBMIRecord = (index) => {
    setBmiRecords(bmiRecords.filter((_, i) => i !== index));
  };

  return (
    <BMIContext.Provider value={{ bmiRecords, addBMIRecord, deleteBMIRecord }}>
      {children}
    </BMIContext.Provider>
  );
};
