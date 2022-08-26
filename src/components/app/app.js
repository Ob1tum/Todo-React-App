import React from 'react';

import AppHeader from '../app-header';
import TaskList from '../task-list';
import Footer from '../footer';
import './app.css';
class App extends React.Component {
  constructor(){
    super();
    this.maxId = 100;
    this.state = {
      todoData: [
        this.createTodoItem('Completed task'),
        this.createTodoItem('Editing task'),
        this.createTodoItem('Active task'),
      ],
      term: '',
      filter: '',
    };
    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
  
        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
  
        return {
          todoData: newArray,
        };
      });
    };
    this.addItem = (text, id) => {
      if (id) {
        this.setState(({ todoData }) => {
          const newItem = this.createTodoItem(text);
          const idx = todoData.findIndex((el) => el.id === id);
          const newwrray = [
            ...todoData.slice(0, idx),
            newItem,
            ...todoData.slice(idx + 1),
          ];
  
          return {
            todoData: newwrray,
          };
        });
      } else {
        const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
          const newArr = [...todoData, newItem];
          return {
            todoData: newArr,
          };
        });
      }
    };
    this.editItem = (text, id) => {
      this.addItem(text, id);
    };
    this.onToggleCompleted = (id) => {
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
    this.onToggleEditing = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
  
        const oldItem = todoData[idx];
        const newItem = { ...oldItem, editing: !oldItem.editing };
  
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
    this.onFilterChange = (filter) => {
      this.setState({ filter });
    };
    this.deleteCompleted = () => {
      this.setState(({ todoData }) => {
        const compArr = todoData.filter((el) => el.completed === false);
        return {
          todoData: compArr,
        };
      });
    };
  }
  
  createTodoItem(label) { 
    return {
      label,
      completed: false,
      editing: false,
      id: this.maxId++,
      date: new Date(),
    };
  }

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => !item.done);
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  }

  filter(items, filter) {
    switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter((item) => !item.completed);
    case 'completed':
      return items.filter((item) => item.completed);
    default:
      return items;
    }
  }

  render() {
    const { todoData, filter } = this.state;

    const visibleItems = this.filter(todoData, filter);
    const unCompletedCount = todoData.filter((el) => !el.completed).length;

    return (
      <section className="todoapp">
        <AppHeader onItemAdded={this.addItem} />
        <TaskList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleCompleted={this.onToggleCompleted}
          editItem={this.editItem}
          onToggleEditing={this.onToggleEditing}
          onItemAdded={this.addItem}
        />
        <Footer
          leftItems={unCompletedCount}
          onFilterChange={this.onFilterChange}
          deleteCompleted={this.deleteCompleted}
        />
      </section>
    );
  }
}

export default App;
