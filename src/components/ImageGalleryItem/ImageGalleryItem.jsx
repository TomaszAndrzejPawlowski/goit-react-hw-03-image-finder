import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.imgUrl}
          alt={this.props.imgAlt}
        />
      </li>
    );
  }
}
