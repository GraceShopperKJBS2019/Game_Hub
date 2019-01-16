import React from 'react'
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  IbanElement,
  IdealBankElement,
  StripeProvider,
  Elements,
  injectStripe
} from 'react-stripe-elements'

import {CardForm} from './stripeForm'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px'
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'})
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'})
      }
    })
  }

  render() {
    const {elementFontSize} = this.state
    return (
      <div className="Checkout">
        <h1>Available Elements</h1>
        <Elements>
          <CardForm fontSize={elementFontSize} />
        </Elements>
      </div>
    )
  }
}
const Stripe = () => {
  return (
    <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
      <Checkout />
    </StripeProvider>
  )
}

export default Stripe
