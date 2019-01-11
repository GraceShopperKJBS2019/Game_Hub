import React from 'react'
import {
  Button,
  Modal,
  Header,
  Item,
  Icon,
  Divider,
  Form,
  Segment
} from 'semantic-ui-react'

class CheckoutModal extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: ''
    }
  }

  render() {
    return (
      <Modal
        trigger={
          <Button color="blue">
            <Icon name="credit card outline" size="large" /> Pay with credit
            card
          </Button>
        }
      >
        <Modal.Content>
          <Segment color="blue">
            <Form>
              <Form.Field width="two">
                <label>Name</label>
                <input placeholder="Enter name" />
              </Form.Field>
              <Form.Field width="three">
                <label>Street Address</label>
                <input placeholder="Enter address" />
              </Form.Field>
              <Form.Field width="two">
                <label>City</label>
                <input placeholder="Enter city" />
              </Form.Field>
              <Form.Field width="1">
                <label>State</label>
                <input />
              </Form.Field>
              <Form.Field width="2">
                <label>Zipcode</label>
                <input />
              </Form.Field>
            </Form>
            <Button color="blue">
              Payment Info<Icon
                name="arrow alternate circle right outline"
                size="large"
              />
            </Button>
          </Segment>
        </Modal.Content>
      </Modal>
    )
  }
}

export default CheckoutModal
