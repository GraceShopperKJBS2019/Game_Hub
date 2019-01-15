import React from 'react'
import {Segment, Container, Grid, Header, List} from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment inverted vertical color="black" style={{padding: '1em 0em'}}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row centered>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Return Policy</List.Item>
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

export default Footer
