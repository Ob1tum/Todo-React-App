import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import './app-header.css';
class AppHeader extends React.Component {
  static defaultProps = {
    addItem: 'New Task',
  };
  static propTypes = {
    addItem: PropTypes.string,
  };
  state = {
    label: '',
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

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
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
