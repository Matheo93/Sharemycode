import React, { useContext } from 'react';
import { CodeContext } from './CodeContext';

const CodeEditor = () => {
  const { code, setCode } = useContext(CodeContext);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <textarea value={code} onChange={handleChange} />
  );
};

export default CodeEditor;
