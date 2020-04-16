// components/Search.js

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
  state = {
    search: '',
  }

  handleInput = (e, foods, toggleFood) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }, () => {
      const searchResults = foods.map(food => {
        return { ...food, show: food.name.includes(value) }
      });
      toggleFood(searchResults);
    });
  };

  render() {
    const { search } = this.state;
    const { foods, toggleFood } = this.props;
    return (
      <div className='content'>
        <p className='control has-icons-left'>
          <input
            className='input'
            type='text'
            name='search'
            placeholder='Cheeseburger'
            value={search}
            onChange={(e) => this.handleInput(e, foods, toggleFood)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-camera"></i>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </p>
      </div>
    );
  }
}

export default Search;