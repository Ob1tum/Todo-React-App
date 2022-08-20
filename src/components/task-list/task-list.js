import React from 'react';
import Task from '../task';

const TaskList = ({ todos, onDeleted, onToggleCompleted }) => {
  const elements = todos.map((item) => {
    return (
      <Task
        {...item}
        key={item.id}
        onDeleted={() => onDeleted(item.id)}
        onToggleCompleted={() => onToggleCompleted(item.id)}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};
export default TaskList;
