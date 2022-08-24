import { findAllByTestId } from '@testing-library/react';
import React from 'react';
import { formatDistance, formatDistanceToNow } from 'date-fns';
import './task.css';
class Task extends React.Component {
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
    // e.preventDefault();
    // console.log('edit:', this.state.label, this.props.id);
    // this.props.editItem(this.state.label, this.props.id);
    // this.props.onToggleEditing();
    e.preventDefault();
    if (this.state.label === '') {
      this.props.onToggleEditing();
    } else {
      this.props.editItem(this.state.label, this.props.id);
    }

    // this.setState({
    //   label: '',
    // });

    // this.props.onToggleEditing();
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
      onEdit,
      id,
    } = this.props;
    if (completed) {
      classNames += ' completed';
      isChecked = true;
    }
    if (editing) {
      classEdit = 'editing';
      isEditing = true;
    }
    const currentDate = new Date();
    const createDate = new Date(); // тут дата создания
    let creationTime = formatDistanceToNow(currentDate);
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
            <span className="created">{creationTime}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={onToggleEditing}
            // onClick={() => {
            //   classEdit = 'edittt';
            // }}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {/* <input type="text" className="edit" defaultValue={label} /> */}
      </li>
    );
  }
}

export default Task;
