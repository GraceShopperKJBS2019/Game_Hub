import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

const handleBlur = () => {
  console.log('[blur]')
}
const handleChange = change => {
  console.log('[change]', change)
}
const handleClick = () => {
  console.log('[click]')
}
const handleFocus = () => {
  console.log('[focus]')
}
const handleReady = () => {
  console.log('[ready]')
}

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4'
        },
        padding
      },
      invalid: {
        color: '#9e2146'
      }
    }
  }
}

class _CardForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault()
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload.token.card.last4))
    } else {
      console.log("Stripe.js hasn't loaded yet.")
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <button type="submit">Pay</button>
      </form>
    )
  }
}
export const CardForm = injectStripe(_CardForm)
