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
import {connect} from 'react-redux'
import {finishOrder, finishOrderGuest} from '../store/cart'
import {postOrder, postGuestOrder} from '../store/orderHistory'

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
      zipcode: '',
      email: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangePayment = this.handleChangePayment.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleClick() {
    this.setState({visible: true})
  }

  handleSubmit(event, user) {
    const {address, city, state, zipcode} = this.state
    const addressInfo = `${address}, ${city}, ${state} ${zipcode}`

    if (!this.props.user.hasOwnProperty('id')) {
      this.props.postGuestOrder(addressInfo, this.state.email, this.props.cart)
      this.props.finishOrderGuest()
    } else {
      this.props.postOrder(addressInfo, user, this.props.cart)
      this.props.finishOrder(user)
    }
    event.preventDefault()
    this.closeModal()
  }

  handleChangePayment(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  closeModal() {
    this.setState({showModal: false})
  }
  render() {
    const {visible, showModal} = this.state
    const {user} = this.props
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
                  <Button onClick={event => this.handleSubmit(event, user)}>
                    Submit
                  </Button>
                </Form>
              </Segment>
            </Sidebar>
            <Sidebar.Pusher>
              <Form>
                <Form.Field width="four">
                  <label>Email</label>
                  <input
                    placeholder="Enter Email"
                    onChange={this.handleChangePayment}
                    name="email"
                  />
                </Form.Field>
                <Form.Field width="two">
                  <label>Name</label>
                  <input
                    placeholder="Enter name"
                    onChange={this.handleChangePayment}
                    name="name"
                  />
                </Form.Field>
                <Form.Field width="three">
                  <label>Street Address</label>
                  <input
                    placeholder="Enter address"
                    onChange={this.handleChangePayment}
                    name="address"
                  />
                </Form.Field>
                <Form.Field width="two">
                  <label>City</label>
                  <input
                    placeholder="Enter city"
                    onChange={this.handleChangePayment}
                    name="city"
                  />
                </Form.Field>
                <Form.Field width="1">
                  <label>State</label>
                  <input
                    placeholder="Enter State"
                    onChange={this.handleChangePayment}
                    name="state"
                  />
                </Form.Field>
                <Form.Field width="2">
                  <label>Zipcode</label>
                  <input
                    placeholder="Enter Zipcode"
                    onChange={this.handleChangePayment}
                    name="zipcode"
                  />
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
  finishOrderGuest: () => dispatch(finishOrderGuest()),
  postOrder: (address, userId, cart) =>
    dispatch(postOrder(address, userId, cart)),
  postGuestOrder: (address, email, cart) =>
    dispatch(postGuestOrder(address, email, cart))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal)
