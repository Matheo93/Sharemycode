import React, { createContext, useState, useEffect } from 'react';

const CodeContext = createContext();

const CodeProvider = ({ children }) => {
  const [codes, setCodes] = useState(() => {
    const savedCodes = localStorage.getItem('codes');
    return savedCodes ? JSON.parse(savedCodes) : [];
  });

  const addCode = (code) => {
    const newCodes = [...codes, { ...code, id: codes.length }];
    setCodes(newCodes);
    localStorage.setItem('codes', JSON.stringify(newCodes));
  };

  useEffect(() => {
    console.log('Codes state updated:', codes);
  }, [codes]);

  return (
    <CodeContext.Provider value={{ codes, addCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export { CodeContext, CodeProvider };
