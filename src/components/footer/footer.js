import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul className="filters">
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
