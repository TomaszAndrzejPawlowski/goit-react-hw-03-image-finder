import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import css from './App.module.css';
import { getImages } from './Api/PixabayApi';
import Error from './Error/Error';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    errorMsg: '',
  };
  handleSearch = async query => {
    try {
      this.setState({ isLoading: true, images: [], errorMsg: '' });
      const fetchedImages = await getImages(query);
      this.setState({ images: fetchedImages });
    } catch (err) {
      this.setState({ errorMsg: err.message });
      console.error(err.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images } = this.state;
    const { children } = this.props;
    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch} />
        {this.state.isLoading && <Loader />}
        {this.state.errorMsg && <Error errorMsg={this.state.errorMsg} />}
        {!this.state.errorMsg && (
          <ImageGallery fetchedImages={images}>{children}</ImageGallery>
        )}
        {this.state.images.length !== 0 && <Button />}
        {/* <Modal /> */}
      </div>
    );
  }
}
