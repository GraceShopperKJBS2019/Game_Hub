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

const Finalcheckout = () => {
  return (
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
    </Form>
  )
}

export default Finalcheckout
