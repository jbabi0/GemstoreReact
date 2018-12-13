import React, { Component } from 'react';
import './index.css';
import ReviewsList from './reviewsList';

class Reviews extends Component {
  render() {
    return (
      <div className="Reviews">
        <ReviewsList reviews={this.props.reviews}/>
      </div>
    );
  }
}

export default Reviews;
