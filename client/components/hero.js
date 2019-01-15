import React from 'react'
import Allgames from './allgames'
import {Grid, Item} from 'semantic-ui-react'

const Landing = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)',
          height: '75vh',
          backgroundSize: 'cover'
        }}
      >
        <p className="hero-text">Welcome To GameHub</p>
      </div>
    </div>
  )
}

export default Landing
