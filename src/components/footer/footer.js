import React from 'react';
import './footer.css';
export default class Footer extends React.Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { leftItems, filter, onFilterChange, deleteCompleted } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      //написать стиль Active
      const clazz = isActive ? 'active' : '';
      return (
        <li key={name}>
          <button
            className={clazz}
            key={name}
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        </li>
      );
    });
    return (
      <footer className="footer">
        <span className="todo-count">{leftItems} items left</span>
        {/*написать другие стили на последнюю кнопку)*/}
        <ul className="filters">{buttons}</ul>
        <button className="clear-completed" onClick={() => deleteCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
