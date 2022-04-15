import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex === 0) {
      this.setState({activeIndex})
    } else {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex === reviewsList.length - 1) {
      this.setState({activeIndex})
    } else {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state

    const currentReview = reviewsList[activeIndex]
    const {imgUrl, username, companyName, description} = currentReview

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Reviews</h1>
          <div className="review-container">
            <button
              type="button"
              testid="leftArrow"
              onClick={this.onLeftArrow}
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="review-description">
              <img src={imgUrl} alt={username} className="review-image" />
              <p className="user-name">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              testid="rightArrow"
              onClick={this.onRightArrow}
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
