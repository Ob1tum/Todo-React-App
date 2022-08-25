import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';
class Task extends React.Component {
  static defaultProps = {
    deleteItem: () => {},
    onToggleCompleted: () => {},
    editItem: () => {},
    onToggleEditing: () => {},
    addItem: 'New Task',
  };
  static propTypes = {
    deleteItem: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    editItem: PropTypes.func,
    onToggleEditing: PropTypes.func,
    addItem: PropTypes.string,
  };
  state = {
    label: '',
    classEdit: '',
    id: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label === '') {
      this.props.onToggleEditing();
    } else {
      this.props.editItem(this.state.label, this.props.id);
    }
  };

  render() {
    let classNames = 'todo-list-item';
    let isChecked = false;
    let classEdit = 'edit';
    let isEditing = false;
    const {
      label,
      onDeleted,
      onToggleCompleted,
      onToggleEditing,
      completed,
      editing,
    } = this.props;
    if (completed) {
      classNames += ' completed';
      isChecked = true;
    }
    if (editing) {
      classEdit = 'editing';
      isEditing = true;
    }

    return (
      <li className={classNames}>
        <div className="view">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className={classEdit}
              defaultValue={label}
              onChange={this.onLabelChange}
            />
          </form>
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={isChecked}
            onClick={onToggleCompleted}
          />
          <label>
            <span className="description">{label}</span>
            <span className="created">{`created ${formatDistanceToNow(
              this.props.date
            )} ago`}</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEditing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}

export default Task;
