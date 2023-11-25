import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    console.log(this.props.fetchedImages);
    return (
      <ul className={css.ImageGallery}>
        {this.props.fetchedImages.map(fetchedImage => (
          <ImageGalleryItem
            key={fetchedImage.id}
            imgUrl={fetchedImage.webformatURL}
            imgAlt={fetchedImage.tags}
          />
        ))}
      </ul>
    );
  }
}
