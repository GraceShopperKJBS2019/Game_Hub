import React, {Component} from 'react'
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
  Icon,
  Modal
} from 'semantic-ui-react'

export default class Footer extends Component {
  state = {modalOpen: false}
  handleOpen = () => this.setState({modalOpen: true})
  handleClose = () => this.setState({modalOpen: false})
  render() {
    return (
      <Segment inverted vertical color="black" style={{padding: '1em 0em'}}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row centered>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <Modal
                    trigger={<List.Item as="a">Our Team</List.Item>}
                    header="Designed & Engineered By"
                    content="Barry Huang  |  Joseph Hu  |  Sanjeev Sharma  |  Ken Atienza"
                    actions={[{content: 'Done', positive: true}]}
                  />
                  <Modal
                    trigger={<List.Item as="a">Contact Us</List.Item>}
                    header="Contact Information"
                    content="Reach out to our support team at game.hub.helpdesk@gmail.com"
                    actions={[{content: 'Done', positive: true}]}
                  />
                  <Modal
                    trigger={
                      <List.Item as="a" onClick={this.handleOpen}>
                        Return Policy
                      </List.Item>
                    }
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size="small"
                  >
                    <Header icon="browser" content="Return policy" />
                    <Modal.Content>
                      <img src="https://www.wholesaleted.com/wp-content/uploads/2018/05/14422071226509-no-refunds-1.png" />
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color="green" onClick={this.handleClose} inverted>
                        <Icon name="checkmark" /> Got it
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Pre-Orders</List.Item>
                  <List.Item as="a">Ask about Mintzer's Tab!</List.Item>
                  <List.Item as="a">Secretss</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
