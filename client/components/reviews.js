import React from 'react'
import {Comment, Icon} from 'semantic-ui-react'

export const Review = props => (
  <Comment.Group>
    {props.review.map(rev => (
      <Comment key={rev.key}>
        <Comment.Avatar as="a" src="/images/avatar/small/stevie.jpg" />
        <Comment.Content>
          <Comment.Author>
            {rev.user.firstName} {rev.user.lastName}
          </Comment.Author>
          <Comment.Metadata>
            <div>{rev.createdAt.slice(0, 10)}</div>
            <div>
              {rev.rating}
              <Icon name="star" />
            </div>
          </Comment.Metadata>
          <Comment.Text>{rev.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    ))}
  </Comment.Group>
)
