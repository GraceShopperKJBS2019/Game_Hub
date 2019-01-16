import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {Segment} from 'semantic-ui-react'

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {}

  render() {
    return (
      <Segment color="black">
        <Header>Final Submission</Header>
        <CardElement />
        <Button onClick={event => this.handleSubmit(event, user.id)}>
          Submit
        </Button>
      </Segment>
    )
  }
}

export default injectStripe(CheckoutForm)
