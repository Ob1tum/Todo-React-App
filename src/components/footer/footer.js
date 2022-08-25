import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';
export default class Footer extends React.Component {
  static defaultProps = {
    leftItems: 0,
    onFilterChange: 'all',
    deleteCompleted: () => {},
  };
  static propTypes = {
    leftItems: PropTypes.number,
    onFilterChange: PropTypes.string,
  };
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { leftItems, onFilterChange, deleteCompleted } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      return (
        <li key={name}>
          <button key={name} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });
    return (
      <footer className="footer">
        <span className="todo-count">{leftItems} items left</span>
        <ul className="filters">{buttons}</ul>
        <button className="clear-completed" onClick={() => deleteCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
