import React from 'react'
import {finishOrder} from '../store/cart'
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
import {connect} from 'react-redux'
import {postOrder} from '../store/orderHistory'

class CheckoutModal extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      transactions: [],
      visible: false,
      animation: 'overlay',
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleClick() {
    this.setState({visible: true})
  }

  handleSubmit(event, userId) {
    // console.log('USERID SUBMIT', userId)
    this.props.postOrder(userId, this.props.cart)
    this.props.finishOrder(userId)
    event.preventDefault()
    this.closeModal()
  }

  closeModal() {
    this.setState({showModal: false})
  }
  render() {
    const {visible, showModal} = this.state
    const {user} = this.props
    console.log('!!!!!props in checkout!!!!!', this.props)
    return (
      <Modal
        onClose={this.closeModal}
        open={showModal}
        trigger={
          <Button onClick={() => this.setState({showModal: true})} color="blue">
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
                  <Button onClick={event => this.handleSubmit(event, user.id)}>
                    Submit
                  </Button>
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

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  finishOrder: userId => dispatch(finishOrder(userId)),
  postOrder: (userId, cart) => dispatch(postOrder(userId, cart))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal)
