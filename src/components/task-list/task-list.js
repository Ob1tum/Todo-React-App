import React from 'react';
import Task from '../task';

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    return <Task {...item} key={item.id} />;
  });
  return <ul className="todo-list">{elements}</ul>;
};
export default TaskList;
