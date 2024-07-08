import React from 'react';
import { CodeProvider } from './CodeContext';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <CodeProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </CodeProvider>
  );
};

export default App;
