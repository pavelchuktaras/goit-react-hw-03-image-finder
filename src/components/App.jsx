import { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { fetchGallery } from '../Services/api'
import { Button } from './Button/Button'
import Loader from './Loader/Loader'
import styled from './App.module.css'

const IMAGES_PER_PAGE = 12;
export class App extends Component {
  state = {
    query: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
  if (
    this.state.query !== prevState.query ||
    this.state.currentPage !== prevState.currentPage
  ) {
    this.fetchImages();
  }
  if (this.state.totalHits !== prevState.totalHits) {
    this.setState({ maxPage: Math.ceil(this.state.totalHits / IMAGES_PER_PAGE) });
  }
}


  fetchImages = async () => {
    const { currentPage, images, query } = this.state;
    this.setState({ isLoading: true });
    try {
      const data = await fetchGallery(query, currentPage, IMAGES_PER_PAGE);
      this.setState({
        images: [...images, ...data.hits],
        totalHits: data.totalHits,
      });
      if (data.hits.length === 0) {
        alert('No images found...')
      }
    } catch (error) {
      console.error('Error fetching images:', error);
       alert('Something went wrong...');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  handleSubmit = query => {
    this.setState({ query, images: [], currentPage: 1 });
  };

  render() {
    const { images, isLoading, totalHits } = this.state;
    const showLoadMoreButton = images.length < totalHits;
    return (
      <div className={styled.App}>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery 
          query={this.state.images}
          images={this.state.images}
          isLoading={this.state.isLoading}
        />
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
         {!isLoading && showLoadMoreButton && (
          <Button
            onClick={this.handleLoadMore}
            showButton={images.length > 0}
          />
        )}
      </div>
    );
  }
}