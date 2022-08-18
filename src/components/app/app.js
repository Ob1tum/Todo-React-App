import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from '../app-header';
import Main from '../main';

const App = () => {
  return (
    <section className="todoapp">
      <AppHeader />
      <Main />
    </section>
  );
};

export default App;
