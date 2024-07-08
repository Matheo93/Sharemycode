import React, { useContext } from 'react';
import { CodeContext } from './CodeContext';

const CodeView = () => {
  const { code } = useContext(CodeContext);

  return (
    <pre>
      {code}
    </pre>
  );
};

export default CodeView;
