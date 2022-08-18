import React from 'react';
import ReactDOM from 'react-dom/client';

const AppHeader = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
};

export default AppHeader;
