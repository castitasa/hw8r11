import React, { Component } from 'react';

class Name extends Component {
 state = {
    names: JSON.parse(localStorage.getItem('names')) || [],
    newName: '',
 };

 componentDidUpdate(prevProps, prevState) {
    if (prevState.names !== this.state.names) {
      localStorage.setItem('names', JSON.stringify(this.state.names));
    }
 }

 handleChange = (e) => {
    this.setState({ newName: e.target.value });
 };

 handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      names: [...prevState.names, {name: prevState.newName }],
      newName: '',
    }));
 };

 render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newName} onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.names.map((name) => (
            <li key={name.id}>{name.name}</li>
          ))}
        </ul>
      </div>
    );
 }
}

export default Name;