import React, {Component} from 'react'
import Slide from './slide'
import LeftArrow from './leftarrow'
import RightArrow from './rightarrow'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        'https://static-cdn.jtvnw.net/ttv-boxart/ATLAS.jpg',
        'https://hb.imgix.net/18eda5bccfb1095c66c64d0fdafef3983355ec5e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=795903240797be65dc1617609f66f03a',
        'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite.jpg',
        'https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2019.jpg',
        'https://static-cdn.jtvnw.net/ttv-boxart/Mario%20Kart%208.jpg',
        'https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20Ultimate.jpg',
        'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty%3A%20Black%20Ops%204.jpg',
        'https://static-cdn.jtvnw.net/ttv-boxart/Shadow%20of%20the%20Tomb%20Raider.jpg'
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }))
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div
        className="slider"
        style={{overflow: 'hidden', whiteSpace: 'nowrap'}}
      >
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}
        >
          {this.state.images.map((image, i) => <Slide key={i} image={image} />)}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    )
  }
}
