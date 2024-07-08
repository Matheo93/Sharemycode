import React from 'react';
import { CodeProvider } from './CodeContext';
import Header from './components/Header';
import Home from './components/Home';

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
