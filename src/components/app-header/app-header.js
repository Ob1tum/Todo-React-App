import React from 'react';
import ReactDOM from 'react-dom/client';

class AppHeader extends React.Component {
  state = {
    label: '',
    term: '',
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <form>
          <input
            className="new-todo"
            placeholder="Seatch task"
            value={this.state.term}
            onChange={this.onSearchChange}
          ></input>
        </form>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </header>
    );
  }
}

export default AppHeader;
