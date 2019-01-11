import React from 'react'
import {Image} from 'semantic-ui-react'

const Slide = ({image}) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles} />
}

export default Slide
