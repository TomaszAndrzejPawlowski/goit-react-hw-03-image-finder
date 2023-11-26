import React, { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(event.target.value);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
// export default Searchbar;
