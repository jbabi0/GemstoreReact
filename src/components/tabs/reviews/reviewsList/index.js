import React, { Component } from 'react';
import './index.css';
import ReviewItem from '../reviewItem';


class ReviewsList extends Component {
  render() {
    return (
      <div className="ReviewsList">
      {this.props.reviews &&
        this.props.reviews.map(review =>
          <ReviewItem key={review.id} review={review}/>)
        }

      </div>
    );
  }
}

export default ReviewsList;
