import React from 'react';

class Task extends React.Component {
  render() {
    let classNames = 'todo-list-item';
    const { label, onDeleted, onToggleCompleted, completed, taskClass, id } =
      this.props;
    if (completed) {
      classNames += ' completed';
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onToggleCompleted}
          />
          <label>
            <span className="description">{label}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => {
              alert('Потом сделаю)');
            }}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {/* <input type="text" className="edit" defaultValue={label} /> */}
      </li>
    );
  }
}

export default Task;
