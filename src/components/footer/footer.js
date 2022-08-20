import React from 'react';

export default class Footer extends React.Component {
  render() {
    const { leftItems } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{leftItems} items left</span>
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
          <li></li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
