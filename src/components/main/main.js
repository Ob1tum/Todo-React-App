import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../footer';
import TaskList from '../task-list';
const Main = () => {
  const todoData = [
    { label: 'Completed task', taskClass: '', id: 1 },
    { label: 'Editing task', taskClass: '', id: 2 },
    { label: 'Active task', taskClass: '', id: 3 },
  ];

  return (
    <section className="main">
      <TaskList todos={todoData} />
      <Footer />
    </section>
  );
};

export default Main;
