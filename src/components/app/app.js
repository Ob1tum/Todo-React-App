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
    term: '',
    filter: 'all',
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

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => !item.done);
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  }

  onSearchChange = (term) => {
    this.setState({ term });
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  // searchItems(items, search) {
  //   if (search.length === 0) {
  //     return items;
  //   }

  //   return items.filter((item) => {
  //     return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
  //   });
  // }
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
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
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const unCompletedCount = todoData.filter((el) => !el.completed).length;

    return (
      <section className="todoapp">
        <AppHeader
          onItemAdded={this.addItem}
          onSearchChange={this.onSearchChange}
        />
        <TaskList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleCompleted={this.onToggleCompleted}
        />
        <Footer
          onItemAdded={this.addItem}
          leftItems={unCompletedCount}
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
      </section>
    );
  }
}

export default App;
