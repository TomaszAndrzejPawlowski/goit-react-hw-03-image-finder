import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import css from './App.module.css';
import { getImages } from './Api/PixabayApi';

export class App extends Component {
  state = {
    images: [],
  };
  handleSearch = async query => {
    try {
      const fetchedImages = await getImages(query);
      this.setState({ images: fetchedImages });
      // console.log(fetchedImages);
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    const { images } = this.state;
    const { children } = this.props;
    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery fetchedImages={images}>{children}</ImageGallery>
        {/* <Loader /> */}
        {/* <Modal /> */}
        <Button />
      </div>
    );
  }
}
