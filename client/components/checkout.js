import React from 'react'
import {
  Button,
  Modal,
  Header,
  Item,
  Icon,
  Divider,
  Form,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import {Finalcheckout} from './finalcheckout'
class CheckoutModal extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      animation: 'overlay',
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({visible: true})
  }
  render() {
    const {visible} = this.state
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
          <Sidebar.Pushable color="blue" as={Segment}>
            <Sidebar
              as={Segment}
              animation="overlay"
              direction="right"
              inverted
              visible={visible}
              width="very wide"
            >
              <Segment color="black">
                <Form>
                  <Form.Field width="three">
                    <label>Card #</label>
                    <input placeholder="Credit Card" />
                  </Form.Field>
                  <Form.Field width="three">
                    <label>Expiration Date</label>
                    <input placeholder="Date" />
                  </Form.Field>
                  <Form.Field width="two">
                    <label>Card Code</label>
                    <input placeholder="CardCode" />
                  </Form.Field>
                  <Button>Submit</Button>
                </Form>
              </Segment>
            </Sidebar>
            <Sidebar.Pusher>
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
              <Button color="blue" onClick={this.handleClick}>
                Payment Info<Icon
                  name="arrow alternate circle right outline"
                  size="large"
                />
              </Button>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Modal.Content>
      </Modal>
    )
  }
}

export default CheckoutModal
