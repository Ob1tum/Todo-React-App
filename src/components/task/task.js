import React from 'react';

class Task extends React.Component {
  onLabelClick = () => {
    console.log(`Clicked: ${this.props.label}`);
  };

  render() {
    const { label, taskClass, id } = this.props;
    return (
      <li className={taskClass}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description" onClick={this.onLabelClick}>
              {label}
            </span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" defaultValue={label} />
      </li>
    );
  }
}

export default Task;
