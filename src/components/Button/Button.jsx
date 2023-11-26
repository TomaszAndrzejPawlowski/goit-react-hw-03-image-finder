import { Component } from 'react';
import css from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <button className={css.Button} type="button">
        Load more
      </button>
    );
  }
}
