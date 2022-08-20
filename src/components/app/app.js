import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from '../app-header';
import TaskList from '../task-list';
import Footer from '../footer';

class App extends React.Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      taskClass: '',
      completed: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, completed: !oldItem.completed };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const unCompletedCount = todoData.filter((el) => !el.completed).length;

    return (
      <section className="todoapp">
        <AppHeader onItemAdded={this.addItem} />
        <TaskList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleCompleted={this.onToggleCompleted}
        />
        <Footer onItemAdded={this.addItem} leftItems={unCompletedCount} />
      </section>
    );
  }
}

export default App;
